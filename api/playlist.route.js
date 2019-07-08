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

playlistRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  Playlist.findById(id, function(err, playlist) {
    res.json(playlist)
  })
})

playlistRoutes.route('/update/:id').post(function (req, res) {
  Playlist.findById(req.params.id, function(err, playlist) {
  if (!playlist)
    res.status(404).send("data is not found");
  else {
      playlist.playlist_name = req.body.playlist_name;
      playlist.playlist_cover_art_url = req.body.playlist_cover_art_url;

      playlist.save().then(playlist => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

playlistRoutes.route('/delete/:id').get(function (req, res) {
  Playlist.findByIdAndRemove({_id: req.params.id}, function(err, playlist){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
})


module.exports = playlistRoutes;
