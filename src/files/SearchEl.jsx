import React, { useState } from "react";

const SearchEl = () => {
  const [item, setItem] = useState();

  let arr = [20, 40, 60, 5, 10, 70, 99, 70];
  let index;

  const handleSearch = () => {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === parseInt(item)) {
        index = i;
      }
    }
    console.log(index);
  };

  const searchElement = (arr, X) => {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === "X") {
        console.log("Element is found in the arry! ");
      } else {
        console.log("Element is not found in the array! ");
      }
    }
  };

  let array= ["A", "B", "C" ,"X"]

  searchElement(array);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the value to be searched"
        onChange={(e) => setItem(e.target.value)}
        style={{ width: "200px" }}
      />
      <button onClick={handleSearch}>Search Element</button>
    </div>
  );
};

export default SearchEl;
