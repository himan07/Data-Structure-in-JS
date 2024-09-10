import React from "react";

const InterviewProblems = () => {
  // Problem: Write a function to check if a string is a palindrome.
  const checkStringIsPalindrome = (str) => {
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, "");
    if (reversedString === str) {
      console.log("string is palindrome!");
    } else {
      console.log("striing is not a palindrome!");
    }
  };

  checkStringIsPalindrome("Himanshu")

  return <div>InterviewProblems</div>;
};

export default InterviewProblems;
