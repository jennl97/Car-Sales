import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addFeature, removeFeature } from './actions/index'

//passed in props to pass down state info from index.js/reducer
//also - make sure to pass props down into individual items - see line 41 for reference
const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP: ', state);
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(mapStateToProps, {addFeature, removeFeature})(App); //function currying

//step 4 - connecting components
//call the connect function twice (currying). and pass in the component to the second call
//the first call takes two arguments: 
// 1- mapStateToProps() -> a function you build
// 2- an object that takes in action creatores, and wraps them in the dispatch function and passes them to props.
