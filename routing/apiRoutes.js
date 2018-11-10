// this is the calling of the friend.js file so we can use

var friends = require('../app/data/friend.js');

// creating the api route api/friends to gather a json object from the friend.js file which gets passed a function to log the total score of the user and compare them to friends already stored in the friend.js file

module.exports = function (app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        var array = [];
        friends.forEach(function(obj){
            var total = 0;
            obj.scores.forEach(function(i){
                total += i
            })
            console.log(total);
            var difference = Math.abs(req.body.userScore - total);
            console.log(difference);
            if (difference <= 5) {
                array.push(obj);
            }
            });
            res.send(array);
        });
    
}

// We also send the object available as result of /api/friends
