import React from "react";

const InsertElArr = () => {
  function InsertElement(arr) {
    let newEl = 5;
    let poisition = 3;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i >= poisition) {
        arr[i + 1] = arr[i];
        if (i === poisition) {
          arr[i] = newEl;
        }
      }
    }
    // console.log(arr);
  }
  let arr = [10, 30, 20, 50, 60, 90];
  InsertElement(arr);

  // Problem: Given an array [2, 4, 6, 8], insert the element 10 at the end of the array.
  function InsertElAtEnd(array) {
    let lastIndex = array.length;
    let newNo = 10;
    array[lastIndex] = newNo;
    // console.log(array);
  }
  let data = [2, 4, 6, 8];
  InsertElAtEnd(data);

  // Problem: Given a sorted array [1, 3, 5, 7], insert the element 4 so that the array remains sorted.

  function InserElSorted(array) {
    let element = 4;
    let position = 2;
    for (let i = array.length - 1; i >= 0; i--) {
      if (i >= position) {
        array[i + 1] = array[i];
        if (i == position) {
          array[i] = element;
        }
      }
    }
    // console.log("inserted element in the sorted array: ",array);
  }
  let newarr = [1, 3, 5, 7];
  InserElSorted(newarr);

  // Problem: Given an array [10, 20, 30, 50], insert the elements [35, 40, 45] at index 3.

  const InsertMultipleEl = (arr) => {
    let position = 3;
    let elements = [35, 40, 45];
    for (let i = arr.length - 1; i >= position; i--) {
      arr[i + elements.length] = arr[i];
    }
    for (let j = 0; j < elements.length; j++) {
      arr[position + j] = elements[j];
    }
    console.log("multiple elements :", arr);
  };

  let datas = [10, 20, 30, 50];
  InsertMultipleEl(datas);

  return <div>InsertElArr</div>;
};

export default InsertElArr;
