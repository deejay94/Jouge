import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeSongName = this.onChangeSongName.bind(this)
        this.onChangeSongCoverArt = this.onChangeSongCoverArt.bind(this)
        this.onChangeArtist = this.onChangeArtist.bind(this)
        this.onChangeGenre = this.onChangeGenre.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            song_name: '',
            song_cover_art_url: '',
            artist: '',
            genre: '',
            playlist_id: ''
        }
    }

    onChangeSongName(e) {
        this.setState({
            song_name: e.target.value
        })
    }

    onChangeSongCoverArt(e) {
        this.setState({
            song_cover_art_url: e.target.value
        })
    }

    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        })
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            song_name: this.state.song_name,
            song_cover_art_url: this.state.song_cover_art_url,
            artist: this.state.artist,
            genre: this.state.genre,
            playlist_id: this.props.match.params.id
        };

        axios.post('http://localhost:4000/song/add', obj)
        .then(res => {
            console.log(`song added to playlist id: ${this.props.match.params.id}`);
            
            console.log(res.data)
        });

        this.setState({
            song_name: '',
            song_cover_art_url: '',
            artist: '',
            genre: '',
            playlist_id: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Song</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Song Name:  </label>
                        <input type="text" className="form-control" value={this.state.song_name}
                      onChange={this.onChangeSongName}/>
                    </div>
                    <div className="form-group">
                        <label> Song Cover Art URL:  </label>
                        <input type="text" className="form-control" value={this.state.song_cover_art_url}
                      onChange={this.onChangeSongCoverArt}/>
                    </div>
                    <div className="form-group">
                        <label> Artist:  </label>
                        <input type="text" className="form-control" value={this.state.artist}
                      onChange={this.onChangeArtist}/>
                    </div>
                    <div className="form-group">
                        <label> Genre:  </label>
                        <input type="text" className="form-control" value={this.state.genre}
                      onChange={this.onChangeGenre}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Song" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}