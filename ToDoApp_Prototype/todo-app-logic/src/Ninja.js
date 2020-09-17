import React, { Component } from "react";

const Ninja = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    // if (ninja.age < 20) {
    //   return (
    //     <div className="ninja" key={ninja.id}>
    //       <h1>{ninja.name}</h1>
    //       <h3>{ninja.age}</h3>
    //       <p>{ninja.belt}</p>
    //     </div>
    //   );
    // } else {
    //   return null;
    // }

    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <h1>{ninja.name}</h1>
        <h3>{ninja.age}</h3>
        <p>{ninja.belt}</p>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null;
  });
  return <div>{ninjaList}</div>;
};

// class Ninja extends Component {
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map((ninja) => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <h1>{ninja.name}</h1>
//           <h3>{ninja.age}</h3>
//           <p>{ninja.belt}</p>
//         </div>
//       );
//     });
//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }

export default Ninja;
