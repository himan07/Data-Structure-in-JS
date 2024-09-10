import React from "react";

const InterviewProblems = () => {
  // Problem: Write a function to check if a string is a palindrome.
  const checkStringIsPalindrome = (str) => {
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
    if (reversedString === str) {
      console.log("string is palindrome!");
    } else {
      console.log("striing is not a palindrome!");
    }
  };

  checkStringIsPalindrome("Himanshu");

  //   Problem: Write a function to find the largest number in an array.
  const findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    console.log("Largest No: ", largest); 
  };

  findLargest([1, 3, 4, 9, 8, 12, 2, 50]);

  return <div>InterviewProblems</div>;
};

export default InterviewProblems;
