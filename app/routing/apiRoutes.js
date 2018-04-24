
var friendsData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/tables", function(req, res) {
		res.json(friendsData);
	});

	app.post("/friends", function(req, res) {
		// what else to return? Friends data info
		var name = request.body.name;
		var scores = request.body.scores;

		res.json();
	})

};