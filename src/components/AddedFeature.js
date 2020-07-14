import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick= {remove} className="button"><h1>REMOVE</h1></button>
      {props.feature.name}
    </li>
  );
};
const  remove = event =>{
  console.log(event)
}
export default AddedFeature;
