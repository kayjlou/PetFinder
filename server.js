const express = require("express");
const { join } = require("path");
// const bodyParser = require("body-parser");
// const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Points our server to a series of route files
//These routes give our server a map of how to respond when users visit or request data from various urls
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// routes(app);
//Listen on port and log out link to click
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
