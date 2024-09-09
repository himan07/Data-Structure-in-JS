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

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i];
        i++;
      } else {
        arr3[k] = arr2[j];
        j++;
      }
      k++;
    }

    while (i < arr1.length) {
      arr3[k] = arr1[i];
      i++;
      k++;
    }
    while (j < arr2.length) {
      arr3[k] = arr2[j];
      j++;
      k++;
    }

    console.log("mergedArr: ", arr3);
  };

  mergeTwoArray(data1, data2);

  // Problem:Given an array of integers, search for a specific element in the array without using JavaScript's
  // built-in indexOf() or includes() functions. Return the index of the element if found, otherwise return -1.

  function findIndexOfElement(arr, ele) {
    let index = undefined;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ele) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
    console.log("element index: ", index);
  }

  findIndexOfElement([5, 10, 15, 20, 25], 20);


  // Sort the given array in descending order without using any built-in functions.

  const sortDescOrder = (arr) => {
    for(let i = 0; i< arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[j] < arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp;
        }
      }
    }
    console.log("array in descending order: ", arr)
  }

  sortDescOrder([12, 45, 2, 67, 21])

  return <div>arraySorting</div>;
};

export default ArraySorting;
