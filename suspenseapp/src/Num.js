import React from 'react';

const Num = ({ resource }) => {
  const num = resource.num.read();
  return <div>your random number is: {num}</div>;
};

export default Num;
