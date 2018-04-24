
var path = require("path");


module.exports = function(app) {

// survey page path
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// catches rest for home page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

};