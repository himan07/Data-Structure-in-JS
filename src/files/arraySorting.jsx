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
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log("array in descending order: ", arr);
  };

  sortDescOrder([12, 45, 2, 67, 21]);

  // Given two arrays (not necessarily sorted), merge them and remove any duplicate values. Return the new array.
  const arr1 = [1, 3, 5, 7];
  const arr2 = [3, 6, 8, 1];

  const removeDuplicates = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let arr3 = [];
    let result = [];

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
    while (j < arr2[j]) {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
    arr3.map((x) => (!result.includes(x) ? result.push(x) : ""));
    console.log("final result: ", result);
  };
  removeDuplicates(arr1, arr2);

  // Problem:
  // Delete all occurrences of a specified element from an array without using filter() or splice().
  const arr = [2, 4, 2, 6, 2, 8];
  const elementToRemove = 2;
  let res = [];

  const removeFirstEl = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        res[i] = arr[i];
      }
    }
    console.log("Updated array:", res);
  };
  removeFirstEl(arr, elementToRemove);

  const searchElement = (arr, elem) => {
    let index = undefined;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == elem) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
    console.log("index of the element: ", index);
  };

  searchElement([2, 4, 6, 8, 10, 12], 8);

  // remove the last element from array
  let array = [1, 2, 3, 4, 5];
  const removeLastElement = (arr) => {
    arr.length = arr.length - 1;
    console.log("removed last element: ", arr);
  };

  removeLastElement(array);

  return <div>arraySorting</div>;
};

export default ArraySorting;
