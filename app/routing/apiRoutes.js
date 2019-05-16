//Link routes to data

const pets = require("../data/pets");
// const { getDiff, showMatch } = require("../assets/javascript/app.js");

module.exports = function(app) {
  // API GET requests
  // handles when user visits a page
  // In each of the below cases when a user visits a link
  app.get("/api/pets", (req, res) => {
    console.log("Getting pets");
    res.json(pets);
  });

  //Handles post requests
  app.post("/api/pets", (req, res) => {
    //Recieve user values (name, photo and scores)
    let newUser = req.body;
    //Run function to find out who is the best match
    // getDiff(newUser);

    //Post new data that user inputs
    pets.push(newUser);
    console.log(`New user pushed: ${newUser.name}`);
    res.sendStatus(200);
    // .then(_ => res.sendStatus(200))
    // .catch(e => console.log(e));
    // showMatch(newUser);
  });
};
