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

  // map and filter function

  const data = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
    { id: 4, title: "fourth" },
  ];

  data.map((item, id) => {
    console.log(item.title);
  });

  let moduleData = data.filter((el) => el.id % 2 === 0);
  console.log("filtered Data :", moduleData);

  const jedi = {
    id: 1,
    name: "Luke Skywalker",
    Lightsaber: true,
    species: "Human",
  };

  const { name: jediName, species, ...rest } = jedi;
  console.log("destructured object values: ", jediName, species);
  console.log("rest: ", rest);

  function a(x) {
    return function b(y) {
      return function c(z) {
        let result = x + y + z;
        console.log("result: ", result);
      };
    };
  }
  a(10)(20)(30);
  return <div>InterviewProblems</div>;
};

export default InterviewProblems;
