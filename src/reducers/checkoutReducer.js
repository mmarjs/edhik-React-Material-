import {
  CHECK_OTP,
  SIGN_UP,
  LOG_IN,
  OPEN_ACCORDION_PANE,
  ADD_ADDRESS,
  GET_ADDRESS,
  CHANGE_PASSWORD,
  LOG_OUT,
  GET_PROFILE,
  SET_DATA
} from "../actions/types";

const INITIAL_STATE = {
  otp_status: "unchecked",
  sign_up_data: {},
  open_pane: "pane1",
  log_in_data: {},
  get_address: [],
  add_address: "",
  password_changed: false,
  log_out: 0,
  profile_data: {},
  user_data: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_OTP:
      return {
        ...state,
        otp_status: action.payload ? "verified" : "error"
      };
    case SIGN_UP:
      return {
        ...state,
        sign_up_data: action.payload
      };
    case OPEN_ACCORDION_PANE:
      return {
        ...state,
        open_pane: action.payload
      };
    case LOG_IN:
      return {
        ...state,
        log_in_data: action.payload
      };
    case GET_ADDRESS:
      return {
        ...state,
        get_address: action.payload
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password_changed: action.payload === "password changed successfully" ? true : false
      };
    case ADD_ADDRESS:
      return {
        ...state,
        add_address: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        log_out: action.payload === 1
      };
    case GET_PROFILE:
      return {
        ...state,
        profile_data: action.payload
      };
    case SET_DATA:
      return {
        ...state,
        user_data: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
