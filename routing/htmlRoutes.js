const { join } = require("path");

module.exports = function(app) {
  //HTML GET requests
  //Handles when users visit a page

  //When user visits friends page it displays json results
  // app.get("/api/friends", (req, res) => {});

  //When user goes to survey page it displays survey
  app.get("/survey", (req, res) => {
    res.sendFile(join(__dirname, "../public/survey.html"));
  });

  //When user clicks on home button bring to home
  app.get("/home", (req, res) => {
    res.sendFile(join(__dirname, "../public/home.html"));
  });
  //Default page goes to home if no matching route is found
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../public/home.html"));
  });
};
