//spotify keys from .env file
require("dotenv").config();

//accessing the API Keys, axios
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotify = require('node-spotify-api');
var Spotify = new spotify(keys.spotify);
var moment = require('moment');

//bot takes user inputs for the search
var userInput = process.argv[2];
var userSearch = process.argv[3];

//App functions with commands using switch, case method
function userCommand(userInput, userSearch) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis(userSearch);
            break;
        default:
            console.log("What are you saying???");

    }
}

function spotifyThis() {
    console.log(`\n---SEARCHING SONG!!!---${userSearch}`);
    //if user search not found, "Ari Lennox BMO" should appear
    if (!userSearch) { userSearch = "BMO"};
    //spotify npm search query format
    spotify.search({ type: 'track', query: userSearch, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
         
});
}
































//access command line argv to acquire the file we need const [node, file, arg] = process.argv;

//
//if (process.argv[0] === "movie-this") {
//    newMovie("The Lion King");
//}
//else {
//    newMovie(argv.)

