import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
              <img src={this.props.obj.playlist_cover_art_url} style={{ height: "15%", width: "15%" }} alt=""></img>
          </td>
          <td>
            {this.props.obj.playlist_name}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;