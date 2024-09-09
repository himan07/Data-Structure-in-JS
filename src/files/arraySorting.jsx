import React from "react";

const ArraySorting = () => {
  // Bubble sorting
  const sortedArry = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let value = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = value;
        }
      }
    }
    console.log("sorted value: ", arr);
  };

  sortedArry([40, 30, 12, 25]);
  
  return <div>arraySorting</div>;
};

export default ArraySorting;
