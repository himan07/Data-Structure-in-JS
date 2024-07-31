import React from "react";

const MeregeTwoArray = () => {
  let data = [3, 7, 12, 34, 56, 90];
  let data2 = [20, 30, 40, 50, 100, 1000];
  let data3 = [];

  for (let i = 0; i < data.length; i++) {
    data3[i] = data[i];
  }
  for (let i = 0; i < data2.length; i++) {
    data3[data.length + i] = data2[i];
  }
  console.log("this is merged array: ", data3);

  // merge two array using while loop
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  while (d1 < data.length && d2 < data2.length) {
    if (data[d1] < data2[d2]) {
      data3[d3] = data[d1];
      d1++;
    } else {
      data3[d3] = data2[d2];
      d2++;
    }
    d3++;
  }
  while (d1 < data.length) {
    data3[d3] = data[d1];
    d1++;
    d3++;
  }

  console.log("mereged sorted array: ", data3);

  // leetcode problem

  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} 
   */
  var merge = function (nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    console.log("copied elements", nums1Copy);

    let p1 = 0;
    let p2 = 0;
    let p = 0;

    while (p1 < m && p2 < n) {
      if (nums1Copy[p1] < nums2[p2]) {
        nums1[p] = nums1Copy[p1];
        p1++;
      } else {
        nums1[p] = nums2[p2];
        p2++;
      }
      p++;
    }

    while (p1 < m) {
      nums1[p] = nums1Copy[p1];
      p1++;
      p++;
    }

    while (p2 < n) {
      nums1[p] = nums2[p2];
      p2++;
      p++;
    }
  };

  // Example usage:
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;

  merge(nums1, m, nums2, n);
  console.log(nums1); 

  return <div>MeregeTwoArray</div>;
};

export default MeregeTwoArray;
