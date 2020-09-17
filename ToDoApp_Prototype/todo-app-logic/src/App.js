import React, { Component } from "react";
import { render } from "react-dom";
import Ninja from "./Ninja.js";
import AddNinja from "./AddNinja.js";

class App extends Component {
  state = {
    ninjas: [
      { name: "emon", age: 27, belt: "Black", id: 1 },
      { name: "siam", age: 17, belt: "Silver", id: 2 },
      { name: "sakib", age: 17, belt: "Bronze", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    //this.state.ninjas.push(ninja);
    this.setState({
      // ninjas: this.state.ninjas.push(ninja),

      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({ ninjas: ninjas });
  };
  render() {
    return (
      <div>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
