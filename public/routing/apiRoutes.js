//Link routes to data
const pets = require("../data/pets");

module.exports = function (app) {
  const getDiff = newUser => {
    // //Initialize match object
    let match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };
    console.log(`The new user we are finding match for is: ${newUser.name}`);

    //Define new scores that user just input
    let userScores = newUser.scores.map(num => parseInt(num))
    console.log(userScores)

    //calculate difference between two values
    let difference = (a, b) => { return Math.abs(a - b) }
    //loop through existing pets
    for (i = 0; i < pets.length; i++) {
      //defined array to hold difference between two arrays
      let diffArr = []
      //loop through pets and compare scores to those of the new user
      for (j = 0; j < userScores.length; j++) {
        //at same index compares the numbers

        //if there is a difference push it into the array
        diffArr.push(difference(userScores[j], pets[i].scores[j]))
        console.log(diffArr)
      }
      let sum = diffArr.reduce(function (a, b) {
        return a + b
      })

      //compare the difference to the pre set difference 
      if (sum < match.matchDifference) {
        match.name = pets[i].name
        match.photo = pets[i].photo
        match.matchDifference = sum
        console.log(`New match is ${match.name}`)
        console.log(match.matchDifference)
      }
    }
    return match

  }
  // API GET requests
  // In each of the below cases when a user visits a link
  app.get("/api/pets", (req, res) => {
    res.json(pets);
  });

  //Handles post requests
  app.post("/api/pets", (req, res) => {
    //Recieve user values (name, photo and scores)
    let newUser = req.body;
    //Set match variable to pass into frontend
    let newMatch = getDiff(newUser);
    //Post new data that user inputs
    pets.push(newUser);
    console.log(`New user pushed: ${newUser.name}`);
    return res.send(newMatch);
  });
};
