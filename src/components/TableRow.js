import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
              <img src={this.props.obj.playlist_cover_art_url} style={{ height: "15%", width: "15%" }} alt=""></img>
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id}>            
          {this.props.obj.playlist_name}
</Link>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;