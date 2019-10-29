//spotify keys from .env file
require("dotenv").config();

//accessing the API Keys, axios
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotify = require('node-spotify-api');
var Spotify = new spotify(keys.spotify);
var moment = require('moment');


var request;
var response;

//search for concerts via BandsInTown
function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp"
}


































//access command line argv to acquire the file we need const [node, file, arg] = process.argv;

//
//if (process.argv[0] === "movie-this") {
//    newMovie("The Lion King");
//}
//else {
//    newMovie(argv.)
//}
