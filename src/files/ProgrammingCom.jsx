import React from 'react';

const CircleInCircle = () => {
  const outerCircleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const innerCircleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'red',
  };

  return (
    <div style={outerCircleStyle}>
      <div style={innerCircleStyle}></div>
    </div>
  );
};

export default CircleInCircle;
