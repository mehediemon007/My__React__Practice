import React from "react";

const Todo = ({ todos, handleDelete }) => {
  const todoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              {todo.content}
            </span>
          </div>
        );
      })
    ) : (
      <p className="center">You have no Todo List</p>
    );
  return <div className="todo collection">{todoList}</div>;
};

export default Todo;
