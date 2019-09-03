const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Song
let Song = new Schema({
  song_name: {
    type: String
  },
  song_cover_art_url: {
    type: String
  },
  artist: {
      type: String
  },
  genre: {
      type: String
  },
  playlist_id: {
    type: String
  }
},{
    collection: 'song'
});

module.exports = mongoose.model('Song', Song);