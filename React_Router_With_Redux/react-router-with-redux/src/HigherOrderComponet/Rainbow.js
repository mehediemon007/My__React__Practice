import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "green", "blue", "yellow", "orange"];
  const randomColor = colors[Math.round(Math.random() * 5)];

  const className = randomColor + "-text";

  return (props) => {
    //console.log("This is a", props);
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
