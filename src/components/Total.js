import React from 'react';

const Total = props => {
  return (
    <div className="content">
      {console.log(props)}
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
