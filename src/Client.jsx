import React, { Component } from "react";

class Client extends Component {
  render() {
    const { details, onDelete } = this.props;
    return (
      <li className="list-group-item mb-2" key={details.id}>
        {details.nom}{" "}
        <button
          className="btn btn-sm ml-2 btn-danger"
          onClick={() => onDelete(details.id)}
        >
          X
        </button>
      </li>
    );
  }
}

export default Client;
