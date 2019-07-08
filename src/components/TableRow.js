import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}

  delete() {
    axios.get('http://localhost:4000/playlist/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}

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
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;