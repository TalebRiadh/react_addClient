import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Taleb Riadh" },
      { id: 2, nom: "Mehrez Riyad" },
      { id: 3, nom: "Cristiano ronaldo" }
    ]
  };

  handleDelete = id => {
    console.log(id);
  };

  render() {
    const title = "list des clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
