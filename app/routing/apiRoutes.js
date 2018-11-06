let express = require('express');
let app = express();
let path = require('path');



let friends = require('../data/friends');

let sampleSurveyScores = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
]
findFriend(sampleSurveyScores);
function findFriend(thisFriend){
    findAllDifferences(thisFriend);
    return findLowestDifference();
}
function findLowestDifference() {
let lowestDiff = 999;
let lowestFriend = '';
    friends.forEach(friend => {
    if (friend.diff <lowestDiff){
        lowestDiff = friend.diff;
    lowestFriend = friend;
    }

});
return(lowestFriend);
};
function findAllDifferences(thisFriend) {
    friends.forEach(friend => {
        this.diff = 0;
        let index = 0;
        let totalDiff = 0;
        friend.scores.forEach(score => {
            let numericalScore = parseInt(score);
            let diff = Math.abs(numericalScore - thisFriend[index]);

            totalDiff += diff;
            friend.diff = totalDiff;
            index++;
        });
    });
}

module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let data = req.body;
        let scores = data.answers;
        let friend = findFriend(scores);
    // We then display the JSON to the users
    res.json(friend);
});

}