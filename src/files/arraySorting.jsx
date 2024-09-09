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

  // sort this array in ascending order const arr = [34, 7, 23, 32, 5, 62];
  const sortArrAsc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log("sorted asc value: ", arr);
  };

  sortArrAsc([34, 7, 23, 32, 5, 62])


  return <div>arraySorting</div>;
};

export default ArraySorting;
