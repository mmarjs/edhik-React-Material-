/**
 * reducer 
 */
import { combineReducers } from "redux";
import ecommerceReducer from "./ecommerceReducer";
import appSettings from "./appSettings";
import checkoutReducer from "./checkoutReducer"; 

const reducers = combineReducers({
   ecommerce: ecommerceReducer,
   appSettings,
   checkout: checkoutReducer
})

export default reducers;