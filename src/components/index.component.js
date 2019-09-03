import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
  _isMounted = false

  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        playlist: [],
        signal: axios.CancelToken.source()
      };
    }

    abortController = new AbortController()

    componentDidMount(){
      this._isMounted = true
      axios.get('http://localhost:4000/playlist')
        .then(response => {
          if (this._isMounted) {
          this.setState({ 
            playlist: response.data,
            isLoading: true
           });
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    componentDidUpdate() {
      axios.get('http://localhost:4000/playlist')
      .then(response => {
          this.setState({ playlist: response.data });
          })
          .catch(function (error) {
          console.log(error);
          })
  }

    tabRow(){
      return this.state.playlist.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Playlists</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Cover Art</th>
                <th>Name</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }