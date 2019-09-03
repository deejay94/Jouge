const express = require('express');
const songRoutes = express.Router();

let Song = require('./song.model');

//Create song route
songRoutes.route('/add').post(function(req, res) {
    let song = new Song(req.body);
    
    song.save()
    .then(song => {
        res.status(200).json({'song': 'song created added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    })

module.exports = songRoutes;

