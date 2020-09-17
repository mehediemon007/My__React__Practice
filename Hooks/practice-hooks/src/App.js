import React, { useState } from "react";
import UseEffect from "./UseEffect";

function App() {
  //const [count, setCount] = useState(4); //direct use of useState call everytime we render components

  //const [count, setCount] = useState(() => 4);

  // const [state, setState] = useState({ count: 5, toys: "Balls" });
  // const count = state.count;
  // const toys = state.toys;

  const [count, setCount] = useState(4);
  const [toys, setToys] = useState("Balls");

  function decrementCount() {
    // setCount(count - 1);
    // setCount(count - 1);

    //setCount((prevCount) => prevCount - 1);
    // setCount((prevCount) => prevCount - 1); //Track the prevCount
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="App center">
      <button className="btn-large red" onClick={decrementCount}>
        -
      </button>
      <span className="p-3" style={{ padding: "20px" }}>
        {count}
      </span>
      <span className="p-3" style={{ padding: "20px" }}>
        {toys}
      </span>
      <button className="btn-large blue">+</button>

      <UseEffect />
    </div>
  );
}

export default App;
