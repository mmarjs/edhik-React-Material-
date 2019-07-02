/**
 * store
 */

import { createStore, compose, applyMiddleware } from 'redux';
import Thunk from "redux-thunk";
import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
   const store = createStore(
      reducers,
      composeEnhancer(applyMiddleware(Thunk))
   )
   return store;
}