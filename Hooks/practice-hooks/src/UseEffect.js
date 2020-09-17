import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [resourceType, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Resouce Changes");

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("Remove Effect");
    };
  }, [resourceType]);
  return (
    <div className="center">
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      <button onClick={() => setResource("todos")}>Todos</button>

      <h1>{resourceType}</h1>
      <h2>{windowWidth}</h2>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <pre>{JSON.stringify(item)}</pre>
          </div>
        );
      })}
    </div>
  );
}
