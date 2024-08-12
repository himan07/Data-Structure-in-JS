import React, { useState } from "react";

const SearchEl = () => {
  /*
Array: [4, 2, 7, 1, 9]
Target Value: 7
Output: The index of the target value in the array.
 */

  function searchTargetEl(arr, target) {
    let index = undefined;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
    console.log("index of the element: ", index);
  }

  let data = [10, 22, 35, 40, 45, 50, 60];
  searchTargetEl(data, 40);

  /*
  Problem 1: Find All Occurrences
  Array: [4, 2, 7, 4, 9, 4, 1]
  Target Value: 4
  Output: An array of all indices where the target value occurs. For example, [0, 3, 5].
  */

  function findOccurances(arr, element) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        indexes.push(i);
      }
    }
    console.log(indexes);
  }

  let array = [4, 2, 7, 4, 9, 4, 1];
  findOccurances(array, 4);

  /*
  Problem 2: Search for First Occurrence

Array: [9, 14, 15, 21, 15, 30, 40]
Target Value: 15
Output: The index of the first occurrence of the target value. If not found, return -1.
  */

  function findFirstIndex(arr, element) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        index = i;
        break;
      }
    }
    console.log("resultedIndex: ", index);
  }
  let arry = [9, 14, 15, 21, 15, 30, 40];
  findFirstIndex(arry, 15);

  /*
Problem 3: Search for Last Occurrence

Array: [9, 14, 15, 21, 15, 30, 15]
Target Value: 15
Output: The index of the last occurrence of the target value. If not found, return -1.
*/

  function findLastOccurances(arr, ele) {
    let index = undefined;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === ele) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
    console.log("lastOccurance", index);
  }

  findLastOccurances([9, 14, 15, 21, 15, 30, 15], 15);

  /*
  Search for Smallest Element Greater than Target

Array: [4, 12, 7, 15, 20]
Target Value: 10
Output: The index of the smallest element in the array that is greater than the target value. If no such element exists, return -1.
  */

  function findSmallest(arr, target) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < target) {
        newArr.push(arr[i]);
      }
    }
    console.log("smallest: ", newArr);
  }

  findSmallest([4, 12, 7, 15, 20], 10);

  /*
  Problem 5: Search for Largest Element Smaller than Target
Array: [5, 3, 7, 2, 6, 9, 4]
Target Value: 6
Output: The index of the largest element in the array that is smaller than the target value. If no such element exists, return -1.
  */

  function findLargest(arr, element) {
    let largest = -1;
    let indexOfLargest = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < element && arr[i] > largest) {
        largest = arr[i];
        indexOfLargest = i;
      }
    }
    console.log("largest: ", indexOfLargest);
    return indexOfLargest;
  }
  findLargest([5, 3, 7, 2, 6, 9, 4], 6);

  /*
  Problem 6: Count Occurrences of Target
  Array: [3, 3, 4, 5, 3, 6, 3]
  Target Value: 3
  Output: The count of occurrences of the target value in the array.
  */

  function countOcc(arr, ele) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ele) {
        count++;
      }
    }
    console.log("count: ", count);
  }

  countOcc([3, 3, 4, 5, 3, 6, 3], 3);

  return <div></div>;
};

export default SearchEl;
