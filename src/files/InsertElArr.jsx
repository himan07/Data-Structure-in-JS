import React, { useState } from "react";

const InsertElArr = () => {
  const [positions, setPositions] = useState();
  const [elements, setElements] = useState();

  let data = [60, 30, 10, 67, 40];

  // const handleClick = () => {
  //   for (let i = data.length - 1; i >= 0; i--) {
  //     if (i >= positions) {
  //       data[i + 1] = data[i];
  //       if (i == positions) {
  //         data[i] = parseInt(elements);
  //       }
  //     }
  //   }
  //   console.log("dynamic data: ", data);
  // };

  const handleClick = () => {
    for (let i = data.length - 1; i >= 0; i--) {
      if (i >= positions) {
        data[i + 1] = data[i];
        if (i == positions) {
          data[i] = parseInt(elements);
        }
      }
    }
    console.log("modified array: ", data);
  };

  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Position"
        onChange={(e) => setPositions(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter New Element"
        onChange={(e) => setElements(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleClick}>Insert</button>
    </div>
  );
};

export default InsertElArr;
