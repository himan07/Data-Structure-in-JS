import React from "react";

const ArrayTraverse = () => {
  let data = [1, 5, 9, 23, 45, 76, 98, 45, 2, 3, 4];

  for (let i = 0; i < data.length; i++) {
    console.log("traversedArray: ", data[i]);
  }

  const handleClick = () => {
    let el = document.getElementById("element").value;
    alert(`This is the ${el} element of arr: ${data[el]}`);
  };

  return (
    <div className="container">
      <input type="text" id="element" />
      &nbsp;
      <button onClick={handleClick}>Get Element</button>
    </div>
  );
};

export default ArrayTraverse;
