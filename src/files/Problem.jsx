import React from "react";

const Problem = () => {
  // Problem: Given the array  [[1, 2], [3, 4]], find the sum of all the numbers.
  let array = [
    [1, 2],
    [3, 4],
  ];
  function sumOfTwoArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log("result", arr[i]);
    }
  }
  sumOfTwoArray(array);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      JavaScript Problem Solving Pratcice..
    </div>
  );
};

export default Problem;
