
var friendsData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/friends", function(req, res) {
		var userData = req.body;
		console.log(userData);

		var userScores = userData.scores;
		var userPhoto = userData.photo;
		var userName = userData.name;


		var match = {name: "", photo: "", scoreDifference: 20};



		for (var i=0; i < friendsData.length; i++) {

			userDifference = 0;

			for (var x=0; x < 10; x++) {
				userDifference += Math.abs(parseInt(userScores[x] - friendsData[i].scores[x]));

				if (userDifference <= match.scoreDifference) {

					match.name = friendsData[i].name;
					match.photo = friendsData[i].photo;
					match.scoreDifference = userDifference;
				}


			}
		}

		friendsData.push(userData);
		res.json(match);
	})

};