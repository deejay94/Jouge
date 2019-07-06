import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {
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

    onChangePlaylistName(e) {
        this.setState({
            playlist_name: e.target.value
        })
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
        axios.post('http://localhost:4000/playlist/add', obj)
        .then(res => console.log(res.data));

        this.setState({
            playlist_name: '',
            playlist_cover_art_url: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Playlist</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Playlist Name:  </label>
                        <input type="text" className="form-control" value={this.state.playlist_name}
                      onChange={this.onChangePlaylistName}/>
                    </div>
                    <div className="form-group">
                        <label> Cover Art URL:  </label>
                        <input type="text" className="form-control" value={this.state.playlist_cover_art_url}
                      onChange={this.onChangePlaylistCoverArt}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Playlist" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}