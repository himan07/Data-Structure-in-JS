import React, { useState } from "react";

const DelElement = () => {
  const [positions, setPositions] = useState();

  let data = [2, 5, 6, 80, 20, 40, 90];

  const handleClick = () => {
    let position = parseInt(positions)
    for (let i = position; i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log("transformed arr; ", data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter the position to remove the element! "
        onChange={(e) => setPositions(e.target.value)}
        style={{width:"300px"}}
      />&nbsp;
      <button onClick={handleClick}> Remove Element</button>
    </div>
  );
};

export default DelElement;
