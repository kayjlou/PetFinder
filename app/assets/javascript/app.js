// const pets = require("../../data/pets.js");
const fetch = window.fetch;

// module.exports = {
//Function to calculate the difference between scores
const getDiff = newUser => {
  fetch("/api/pets")
    .then(r => r.json())
    .then(pets => {
      match = {
        name: "",
        photo: "",
        matchDifference: 1000
      };
      console.log(newUser);
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
          console.log(
            `Calculating difference ${currentUserScore} minus ${currentPetScore}`
          );
          console.log(`The difference is ${difference}`);
        }
        //Set new match info
        if (difference < match.matchDifference) {
          match.name = currentPet.name;
          match.photo = currentPet.photo;
          console.log(`The new match is ${match.name}`);
        }
      }
    })
    .catch(e => console.log(e));
};

//Add event listener
//Add event listener to post the values we entered into the friends object of arrays
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  let q1 = parseInt(document.querySelector("#q1").value);
  let q2 = parseInt(document.querySelector("#q2").value);

  fetch("/api/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify({
      name: document.querySelector("#newName").value,
      photo: document.querySelector("#newImage").value,
      scores: [q1, q2]
    })
  })
    .then(r => {
      console.log(r);
      console.log("running the getdiff function");
      getDiff(req.body);
    })
    .catch(e => console.error(e));
});

//   console.log(input);
//   // let newUser = req.body;
//   let newScores = input.scores;
//   //Set match initial value
//   match = {
//     name: "",
//     photo: "",
//     matchDifference: 1000
//   };

//   let difference = "";

//   //Loops through current pets to get scores
//   for (i = 0; i < pets.length; i++) {
//     let currentPet = pets[i];
//     difference = 0;
//     console.log(`Running compatibility with ${currentPet.name}`);

//     //check compatability by subtracting each question and then adding together total difference
//     for (let j = 0; j < newScores.length; j++) {
//       let currentPetScore = currentPet.scores[j];
//       let currentUserScore = newScores[j];
//       difference += Math.abs(
//         parseInt(currentUserScore) - parseInt(currentPetScore)
//       );
//       console.log(
//         `Calculating difference ${currentUserScore} minus ${currentPetScore}`
//       );
//       console.log(`The difference is ${difference}`);

//       //Set new match info
//       if (difference < match.matchDifference) {
//         match.name = currentPet.name;
//         match.photo = currentPet.photo;
//         console.log(`The new match is ${match.name}`);
//       }
//     }
//   }
// }),
//   (showMatch = match => {
//     console.log("GETTING MATCH!!!!!");
//     console.log(match);
//     //Hide survey
//     // document.querySelector(".survey").style.display = "none";
//     // document.querySelector("#info").style.display = "none";
//     // document.querySelector(".input-div").style.display = "none";
//     // document.querySelector("#matchName").innerHTML = `Your match is ${
//     //   match.name
//     // }!`;
//   });
// };
