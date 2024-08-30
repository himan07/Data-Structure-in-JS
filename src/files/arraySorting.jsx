import React from "react";

const ArraySorting = () => {
  // destructuring the elements from arrays

  const arr = [2, 3, 4];
  const [x, y, z] = arr;
  console.log("destructured elements: ", x, y, z);
  const restaurent = {
    name: "Classino Italino",
    location: "India, France, China, Itally",
    categories: ["Itallian", "Pizzaria", "Vegetarian", "Organic"],
    starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
  };

  let [main, secondary] = restaurent.categories;

 [main, secondary] = [secondary, main]

  // switching the elements

  // const temp = main;
  // main = secondary;
  // secondary = temp;
  console.log("switched element: ",main, secondary)

  return <div>arraySorting</div>;
};

export default ArraySorting;
