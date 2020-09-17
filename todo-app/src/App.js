import React, { Component } from "react";
import Todo from "./To-do";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buying Milk" },
      { id: 2, content: "Reading Compiler Design" },
    ],
  };

  handleDelete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos });
  };
  handleTodo = (todo) => {
    todo.id = Math.round(Math.random());
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">TO_DO List</h1>
        <Todo todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddForm addTodo={this.handleTodo} />
      </div>
    );
  }
}

export default App;
