import React from "react";

const ArrayTraverse = () => {
  let data = [1, 5, 9, 23, 45, 76, 98, 45, 2, 3, 4];

  console.log("_____First method to traverse an array_____")
  for (let i = 0; i < data.length; i++) {
    console.log("traversedArray: ", data[i]);
  }


// another method
console.log("_____Second method to traverse an array_____")
  for (const arr in data) {
    console.log("another method: ", data[arr]);
  }

// Another method
console.log("_____Third method to traverse an array_____")
for(const i in data){
  console.log("third method: ", data[i])
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
