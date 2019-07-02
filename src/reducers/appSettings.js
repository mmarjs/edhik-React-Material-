/**
 * App Settings
 */
import { currencies, currencyUnicode } from "../assets/data/currencydata";

//data
import { languages } from "../assets/data/localeData";

//action types
import {
   CHANGE_CURRENCY,
   HIDE_ALERT,
   SET_LANGUAGE,
   SHOW_ALERT
} from "../actions/types";

//app config
import AppConfig from "../constants/AppConfig";

const INITIAL_STATE = {
   currencies,
   selectedCurrency: currencies[0],
   currencyUnicode,
   languages,
   selectedLocale: AppConfig.locale,
   showAlert: false,
   alertType: 'success',
   alertMessage: 'Initial Message',
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CHANGE_CURRENCY:
         return {
            ...state,
            selectedCurrency: action.payload
         }
      case SET_LANGUAGE: {
         return {
            ...state,
            selectedLocale: action.payload
         }
      }
      case SHOW_ALERT:
         return {
            ...state,
            showAlert: true,
            alertMessage: action.payload.message,
            alertType: action.payload.type
         }
      case HIDE_ALERT:
         return {
            ...state,
            showAlert: false
         }
      default:
         return { ...state };
   }
}