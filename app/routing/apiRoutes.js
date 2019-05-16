//Link routes to data
const pets = require("../data/pets");

module.exports = function(app) {
  const getDiff = newUser => {
    //Initialize match object
    let match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };
    console.log(`The new user we are finding match for is: ${newUser.name}`);
    //Asign score variable
    let newScores = newUser.scores;

    //Loops through current pets to get scores
    for (i = 0; i < pets.length; i++) {
      let currentPet = pets[i];
      difference = 0;
      console.log(`Running compatibility with ${currentPet.name}`);

      // /check compatability by subtracting each question and then adding together total difference
      for (let j = 0; j < newScores.length; j++) {
        let currentPetScore = currentPet.scores[j];
        let currentUserScore = newScores[j];
        difference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentPetScore)
        );
      }
      //Set new match info with the lowest difference
      if (difference < match.matchDifference) {
        match.name = currentPet.name;
        match.photo = currentPet.photo;
        console.log(`The new match is ${match.name}`);
      }
    }
    return match;
  };

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
