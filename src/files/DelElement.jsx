import React from "react";

const DelElement = () => {
  function deleteEl(arr) {
    let position = 3;
    for (let i = position; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    // console.log("Deleted Element", arr);
  }

  let data = [20, 30, 40, 50, 76, 90];
  deleteEl(data);

  // Given an array [1, 2, 3, 4, 5], delete the last element of the array.
  function delLastEl(arr) {
    let position = arr.length - 1;
    for (let i = position; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log("modified array: ", arr);
  }

  let newData = [1, 2, 3, 4, 5];
  delLastEl(newData);

  // Problem: Given an array [6, 7, 8, 9], delete the first element of the array.
  function delFirstEl(array) {
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    console.log("removed first element: ", array);
  }

  delFirstEl([6, 7, 8, 9]);

  // Problem: Given an array [10, 20, 30, 40, 50], delete the element at index 2.
  const delIndexEl = (arr) => {
    let index = 2;
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log("updated array: ", arr);
  };

  delIndexEl([10, 20, 30, 40, 50]);

  // Problem: Given an array [3, 5, 7, 3, 9, 3], delete all occurrences of the element 3.
  function DelOcuurancesEl(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 3) {
        newArr.push(arr[i]);
      }
      console.log("remove occurances", newArr);
    }
  }

  DelOcuurancesEl([3, 5, 7, 3, 9, 3]);

  // Problem: Given an array [1, 3, 5, 3, 7, 3], delete the first occurrence of the element 3.
  const removeFirstEl = (arr, value) => {
    let position = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        position = i;
        break;
      }
    }
    if (position !== -1) {
      for (let i = position; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr.length = arr.length - 1;
    }

    console.log("Updated array:", arr);
  };

  removeFirstEl([1, 3, 5, 3, 7, 3], 3);

  // Problem: Given an array [10, 20, 30, 40, 50], delete the elements from index 1 to 3 (inclusive).

  function delElementToRange(arr) {
    let startIndex = 1;
    let endIndex = 3;
    let removeIndex = endIndex - startIndex + 1;

    for (let i = startIndex; i < arr.length - removeIndex; i++) {
      arr[i] = arr[i + removeIndex];
    }

    arr.length = arr.length - removeIndex;
    console.log("Array: ", arr);
  }

  delElementToRange([10, 20, 30, 40, 50]);

  return <div>DelElement</div>;
};

export default DelElement;
