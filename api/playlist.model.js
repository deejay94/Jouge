const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Playlist
let Playlist = new Schema({
  playlist_name: {
    type: String
  },
  playlist_cover_art_url: {
    type: String
  }
},{
    collection: 'playlist'
});

module.exports = mongoose.model('Playlist', Playlist);