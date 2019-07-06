const express = require('express');
const playlistRoutes = express.Router();

// Require Playlist model in our routes module
let Playlist = require('./playlist.model');

// Defined store route
playlistRoutes.route('/add').post(function (req, res) {
  let playlist = new Playlist(req.body);
  playlist.save()
    .then(playlist => {
      res.status(200).json({'playlist': 'playlist created added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

playlistRoutes.route('/').get(function(req, res) {
  Playlist.find(function(err, playlists) {
    if(err) {
      console.log(err);
    } else {
      res.json(playlists)
    }
  })
})

module.exports = playlistRoutes;
