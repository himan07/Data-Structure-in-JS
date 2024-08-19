import React from "react";

const ArrMergeWhile = () => {
  function mergeTwoArrayWhile(arr1, arr2) {
    let arr3 = [];
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;

    while (a1 < arr1.length && a2 < arr2.length) {
      if (arr1[a1] < arr2[a2]) {
        arr3[a3] = arr1[a1];
        a1++;
      } else {
        arr3[a3] = arr2[a2];
        a2++;
      }
      a3++;
    }

    while (a1 < arr1.length) {
      arr3[a3] = arr1[a1];
      a1++;
      a3++;
    }

    while (a2 < arr2.length) {
      arr3[a3] = arr2[a2];
      a2++;
      a3++;
    }

    console.log("arr3", arr3);
  }

  mergeTwoArrayWhile([3, 7, 12, 34, 56, 90], [4, 9, 25, 45]);

  return <div>ArrMergeWhile</div>;
};

export default ArrMergeWhile;
