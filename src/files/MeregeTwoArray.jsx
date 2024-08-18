import React from "react";

const MeregeTwoArray = () => {
  /*
  Given two sorted arrays, merge them into a single sorted array.
  Example:
  Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
  Output: [1, 2, 3, 4, 5, 6]
  */

  const mergeSortedArray = (arr1, arr2) => {
    let arr3 = [];
      for (let i = 0; i < arr1.length; i++) {
      arr3[i] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      arr3[arr1.length + i] = arr2[i];
    }
      for (let i = 0; i < arr3.length - 1; i++) {
      for (let j = 0; j < arr3.length - i - 1; j++) {
        if (arr3[j] > arr3[j + 1]) {
          // Swap arr3[j] and arr3[j + 1]
          let temp = arr3[j];
          arr3[j] = arr3[j + 1];
          arr3[j + 1] = temp;
        }
      }
    }
  
    console.log("Merged and sorted array:", arr3);
  };
  
  mergeSortedArray([1, 3, 5], [2, 4, 6]);


  return <div>MeregeTwoArray</div>;
};

export default MeregeTwoArray;
