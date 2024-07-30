import React, { useState } from "react";

const DelElement = () => {
  const [positions, setPositions] = useState();

  let data = [2, 5, 6, 80, 20, 40, 90];

  const handleClick = () => {
    let position = parseInt(positions);
    for (let i = position; i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log("transformed arr; ", data);
  };

  function removeEle(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }

    nums.length = nums.length - 1;
    console.log(nums);
    return k;
  }

  let arr = [1, 2, 3, 5, 8, 7, 9];
  removeEle(arr, 7);

  // or another approach to solve this problem

  function removeElement(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[index] = nums[i];
        index++;
      }
      nums.length = index;
      return nums;
    }
    console.log(nums)
  }

  removeElement(arr, 9);

  return (
    <div>
      <input
        type="text"
        placeholder="enter the position to remove the element! "
        onChange={(e) => setPositions(e.target.value)}
        style={{ width: "300px" }}
      />
      &nbsp;
      <button onClick={handleClick}> Remove Element</button>
    </div>
  );
};

export default DelElement;
