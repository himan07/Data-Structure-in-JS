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
  sortArrAsc([34, 7, 23, 32, 5, 62]);

  // Given two sorted arrays, merge them into one sorted array without using any built-in array merge or sort functions.
  const data1 = [1, 3, 5, 7];
  const data2 = [2, 4, 6, 8];

  const mergeTwoArray = (arr1, arr2) => {
    let arr3 = [];
    let i = 0;
    let j = 0;
    let k = 0;
    

    console.log("mergedArr: ", arr3);
  };

  mergeTwoArray(data1, data2);

  return <div>arraySorting</div>;
};

export default ArraySorting;
