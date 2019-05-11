//Link routes to data

const pets = require("../app/data/pets");

module.exports = function(app) {
  // API GET requests
  // handles when user visits a page
  // In each of the below cases whena user visits a link
  app.get("/api/pets", (req, res) => {
    res.json(pets);
  });

  //Handles post requests
  app.post("/api/friends", (req, res) => {
    //Set match initial value
    let match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };

    //Post new data that user inputs

    //check compatability

    //Set new match info
  });
};
