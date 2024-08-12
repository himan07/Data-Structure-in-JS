import React from "react";

const CircleInCircle = () => {
  const outerCircleStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const innerCircleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "red",
  };

  const delay = (callback, ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, ms);
    });
  };

  // console.log(1);
  // delay(() => {
  //   console.log(3);
  // }, 5000).then(() => {
  //   console.log(2);
  // });

  return (
    <div style={outerCircleStyle}>
      <div style={innerCircleStyle}></div>
    </div>
  );
};

export default CircleInCircle;
