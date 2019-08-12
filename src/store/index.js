import 'dotenv/config';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducers from '../reducers';
import apiMiddleware from '../middlewares/apiMiddlewares';

const middlewares = [thunk, apiMiddleware];

export default createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
