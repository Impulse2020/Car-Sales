import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick= {add} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const add = event =>{
  console.log(event.target)
}
export default AdditionalFeature;
