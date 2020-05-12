import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick= {remove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const  remove = event =>{
  console.log(event.target)
}
export default AddedFeature;
