import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import "./styles.css";
import ClientAddForm from "./ClientAddForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Taleb Riadh" },
      { id: 2, nom: "Mehrez Riyad" },
      { id: 3, nom: "Cristiano ronaldo" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleAdd = client => {
    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients: clients });
  };

  render() {
    const title = "list des clients";
    return (
      <div className="container bg-light pt-4 pb-4 pl-5 pr-5">
        <h1>{title}</h1>
        <ul className="list-group">
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientAddForm onclientAdd={this.handleAdd} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
