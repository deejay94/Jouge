import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePlaylistName = this.onChangePlaylistName.bind(this)
        this.onChangePlaylistCoverArt = this.onChangePlaylistCoverArt.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    
        this.state = {
            playlist_name: '',
            playlist_cover_art_url: ''
        }
  }


  componentDidMount() {
      axios.get('http://localhost:4000/playlist/edit/'+this.props.match.params.id)
          .then(response => {

              this.setState({ 
                playlist_name: response.data.playlist_name, 
                playlist_cover_art_url: response.data.playlist_cover_art_url
              })
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePlaylistName(e) {
    this.setState({
      playlist_name: e.target.value
    });
  }
  
  onChangePlaylistCoverArt(e) {
    this.setState({
      playlist_cover_art_url: e.target.value
    })  
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      playlist_name: this.state.playlist_name,
      playlist_cover_art_url: this.state.playlist_cover_art_url
    };

    axios.post('http://localhost:4000/playlist/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Playlist</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Playlist Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.playlist_name}
                      onChange={this.onChangePlaylistName}
                      />
                </div>
                <div className="form-group">
                    <label>Cover Art URL: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.playlist_cover_art_url}
                      onChange={this.onChangePlaylistCoverArt}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Playlist" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}