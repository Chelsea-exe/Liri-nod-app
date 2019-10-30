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
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");//[3];

//App functions with commands using switch, case method

//function spotifyThis() {
//    spotify.search({ type: 'track', query: userSearch }, function(err, data) {
//        if (err) {
//          return console.log('Error occurred: ' + err);
//        }
//       if ((data.tracks.items).length<5){
//           var length = s
//       }
//      console.log(data); 
//      });
//}

//command from the user input to use the liri bot
function doThis(action, value) {
    switch (action) {
        case "concert-this":
            concertThis(value);
            break;
        case "spotify-this":
            spotifyThis(value);
            break;
        case "movie-this":
            movieThis(value);
            break;
        default:
            console.log("What are you saying???");

    }
}
//function for spotify-this function tried with the if else method, ran into problems
//to write proper code for the link to be posted
function spotifyThis() {
    console.log(`\n---SEARCHING SONG!!!---${value}`);
    //if user search not found, "Ari Lennox BMO" should appear
    if (value) { value = "BMO"};
    //spotify npm search query format
    spotify.search({ type: 'track', query: value, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        //the spotify data array
        var spotifyArray = data.tracks.items;
        //collect data from spotify giving artist name, song title and album
        for (i = 0; i < spotifyArray.length; i++) {
            console.log(`\nIs this the song?\nArtist: ${data.tracks.items[i].album.artists[0].name} 
            \nSong: ${data.tracks.items[i].name}\nAlbum: ${data.tracks.items[i].album.name}`)
        }
         
});
}

function movieThis(value) {
    var queryURL = "http://omdbapi.com/?t=" + value + "&y=&plot=short&apikey=3d7df99";
    axios.get(queryURL).then(
        function(response) {
            //output of the movie info
            //movie title
            console.log(`Title: ${response.data.Title}`);
            //released year
            console.log(`Realeased: ${response.data.Year}`);
            //rating of movie via IMDB and Rotten Tomatoes
            console.log(`IMDB Rating: ${response.data.Rating[0].Value}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            //produced in the following country
            console.log(`Produced in Country: ${response.data.Country}`);
            //language of movie
            console.log(`Plot: ${response.data.Plot}`);
            //actors in movie
            console.log(`Actors: ${response.data.Actors}`);
            //error message, Mr. Nobody movie and link to Netlix link will appear
            if(request === "Mr.+Nobody") {

                console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>")
                console.log("Its on Netflix!");

            }
        }
    )}