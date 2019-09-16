import React, { Component } from "react";

class ClientAddForm extends Component {
  state = {
    NvClient: ""
  };

  handleChange = event => {
    const NvClient = event.currentTarget.value;
    this.setState({ NvClient: NvClient });
  };

  handleSubmit = event => {
    event.preventDefault();

    const nom = this.state.NvClient;
    const NvClient = { id: new Date().getDate(), nom: nom };
    this.props.onclientAdd(NvClient);
    this.setState({ NvClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control col-5 mt-4 mb-2"
            onChange={this.handleChange}
            value={this.state.NvClient}
            type="text"
            placeholder="Entrer un nom"
          />
          <button className="btn-md  btn btn-primary">Ajouter</button>
        </div>
      </form>
    );
  }
}

export default ClientAddForm;
