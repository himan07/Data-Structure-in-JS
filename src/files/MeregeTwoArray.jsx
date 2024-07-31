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

  return <div>MeregeTwoArray</div>;
};

export default MeregeTwoArray;
