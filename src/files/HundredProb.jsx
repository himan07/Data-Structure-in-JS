import React from "react";

const HundredProb = () => {
  // 1. **Remove Duplicates from a Sorted Array**
  //  - **Question:** Given a sorted array `nums`, remove duplicates in-place so that each unique
  //  element appears only once. Return the new length of the array.
  function removeDuplicates(nums) {
    if (nums.length === 0) return [];
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[uniqueIndex]) {
        uniqueIndex++;
        nums[uniqueIndex] = nums[i];
      }
    }
    return nums.slice(0, uniqueIndex + 1);
  }

  let result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  console.log("removed duplicates from sorted array: ", result);

  new Promise((resolve, reject) => {
    console.log("async task is completed! ");
    resolve();
  }).then(() => {
    console.log("promise is resolved! ");
  });

  return <div>HundredProb</div>;
};

export default HundredProb;
