
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// var htmlRoutes = require(path.join(__dirname, 'app/routing/htmlRoutes.js'));
// var apiRoutes = require(path.join(__dirname, 'app/routing/apiRoutes.js'));
// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});