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

  /*
Merge Two Sorted Arrays

Given two sorted arrays, merge them into a single sorted array.
Example:
Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]
*/

  function mergeTwoSortedArr(arr1, arr2) {
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
    console.log("mergedArr: ", arr3);
  }

  mergeTwoSortedArr([1, 3, 5], [2, 4, 6]);

  /*
Merge Two Unsorted Arrays

Given two unsorted arrays, merge them into a single array and then sort the resulting array.
Example:
Input: arr1 = [4, 2, 8], arr2 = [5, 7, 1]
Output: [1, 2, 4, 5, 7, 8]
*/

  function sortArr(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
      arr3[i] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      arr3[arr1.length + i] = arr2[i];
    }
  }

  sortArr([4, 2, 8], [5, 7, 1]);

  /*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

  function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }

    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // Example Usage:
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;

  merge(nums1, m, nums2, n);
  console.log("leetcode problem solution: ", nums1);

  // merge two sorted array

  function twoSortedArray(arr1, arr2) {
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

    console.log("arr3", arr3);
  }

  twoSortedArray([1, 3, 5], [2, 4, 6]);

  return <div>Merge two array with while loop</div>;
};

export default ArrMergeWhile;
