//Link routes to data

const pets = require("../data/pets");
const { getDiff, showMatch } = require("../assets/javascript/app.js");

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
    // let newScores = newUser.scores;
    //Run function to find out who is the best match
    getDiff(newUser);

    //Post new data that user inputs
    pets.push(newUser);
    console.log(`New user pushed: ${newUser.name}`);
    showMatch(newUser);
  });
};
