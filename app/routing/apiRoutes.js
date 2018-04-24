
var friendsData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/friends", function(req, res) {
		// what else to return? Friends data info
		var name = request.body.name;
		var photo = request.body.photo;
		var scores = request.body.scores;

		res.json();
	})

};