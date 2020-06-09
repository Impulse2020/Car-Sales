import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';





console.log(AdditionalFeatures)
const App = (props) => {
  //removed state object, and moved it up to reducer

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} carprice={props.car.price} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  return{
    car: state.car,
    additionalFeatures:state.additionalFeatures,
    additionalPrice:state.additionalPrice


  }
}



export default connect(mapStateToProps, {})(App);
