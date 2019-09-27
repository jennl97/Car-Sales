import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from "react-redux";

import 'bulma/css/bulma.css';
import './styles.scss';
import { reducer } from './reducers';

//step 1 - import createStore, and create a store by passing in the reducer
const store = createStore(reducer);

const rootElement = document.getElementById('root');

//step 2 - import Provider, and wrap <App /> in it.
//step 3 -  Pass in the store prop
ReactDOM.render(<Provider store = {store}><App /></Provider>, rootElement);
