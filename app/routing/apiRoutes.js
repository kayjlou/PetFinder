//Link routes to data

const pets = require("../data/pets");

module.exports = function(app) {
  // API GET requests
  // handles when user visits a page
  // In each of the below cases whena user visits a link
  app.get("/api/pets", (req, res) => {
    console.log("Getting pets");
    res.json(pets);
  });

  //Handles post requests
  app.post("/api/pets", (req, res) => {
    // console.log(req.body);

    //Recieve user values (name, photo and scores)
    let newUser = req.body;
    let newScores = newUser.scores;

    // Parse int scores
    // for (let i = 0; i < newUser.scores.length; i++) {
    //   newUser.scores[i] = parseInt(newUser.scores[i]);
    // }

    //Set match initial value
    match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };

    let difference = "";
    //Loops through current pets to get scores
    for (i = 0; i < pets.length; i++) {
      let currentPet = pets[i];
      difference = 0;
      console.log(`Running compatibility with ${currentPet.name}`);
      //check compatability by subtracting each question and then adding together total difference
      for (let j = 0; j < newScores.length; j++) {
        let currentPetScore = currentPet.scores[j];
        let currentUserScore = newScores[j];
        difference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentPetScore)
        );
        console.log(
          `Calculating difference ${currentUserScore} minus ${currentPetScore}`
        );
        console.log(`The difference is ${difference}`);
        //Set new match info
        if (difference < match.matchDifference) {
          match.name = currentPet.name;
          match.photo = currentPet.photo;
          console.log(`The new match is ${match.name}`);
        }
      }
    }
    //Post new data that user inputs
    pets.push(newUser);
  });
};
