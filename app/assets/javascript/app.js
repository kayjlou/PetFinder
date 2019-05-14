const pets = require("../../data/pets.js");

module.exports = {
  showMatch(match) {
    console.log("GETTING MATCH!!!!!");
    //Hide survey
    document.querySelector(".survey").style.display = "none";
    document.querySelector("#info").style.display = "none";
    document.querySelector(".input-div").style.display = "none";
    document.querySelector("#matchName").innerHTML = `Your match is ${
      match.name
    }!`;
  },

  //Function to calculate the difference between scores
  getDiff(input) {
    console.log(input);
    // let newUser = req.body;
    let newScores = input.scores;
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
    // showMatch(match);
  }
};
