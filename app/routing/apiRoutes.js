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
    console.log(req.body);

    //Recieve user values (name, photo and scores)
    let newUser = req.body;

    // Parse int scores
    // for (let i = 0; i < newUser.scores.length; i++) {
    //   newUser.scores[i] = parseInt(newUser.scores[i]);
    // }

    //Set match initial value
    let match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };

    let newScores = newUser.scores;

    //Loops through current pets to get scores
    for (i = 0; i < pets.length; i++) {
      let difference = 1000;

      //check compatability by subtracting each question and then adding together total difference
      for (let j = 0; j < newUser.scores.length; j++) {
        difference += Math.abs(
          parseInt(newScores[i]) - parseInt(pets[i].scores)
        );
        console.log(difference);
      }
    }
    //Set new match info

    //Post new data that user inputs
    pets.push(newUser);
  });
};
