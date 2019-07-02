/**
 * Action Types
 */
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
} from "./types";

import axios from "axios";

//check otp
export const checkOtp = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/verify_otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === "success") {
        return dispatch({
          type: CHECK_OTP,
          payload: true
        });
      } else if (response.status === "error") {
        return dispatch({
          type: CHECK_OTP,
          payload: false
        });
      }
    })
    .catch(err => console.log(err));
};

// signup
export const signUp = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (response.token !== undefined && response.token.length > 0) {
        dispatch({
          type: SIGN_UP,
          payload: response
        });
      }
    })
    .catch(err => console.log(err));
};


// @ram this is the login action from where the token is dispatched
export const logIn = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (response.token !== undefined && response.token.length > 0) {
        return dispatch({
          type: LOG_IN,
          payload: response
        });
      } else if (response.token === undefined) {
        return dispatch({
          type: LOG_IN,
          payload: false
        });
      }
    })
    .catch(err => console.log(err));
};

//  add address
export const addAddress = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/add_address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: ADD_ADDRESS,
        payload: response
      });
    })
    .catch(err => console.log(err));
};

//  edit address
export const editAddress = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/edit_address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: ADD_ADDRESS,
        payload: response
      });
    })
    .catch(err => console.log(err));
};

//  add address
export const getAddress = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/get_address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: GET_ADDRESS,
        payload: response
      });
    })
    .catch(err => console.log(err));
};

export const openLoginPane = () => dispatch => {
  return dispatch({
    type: OPEN_ACCORDION_PANE,
    payload: "pane1"
  });
};

export const openAddressPane = () => dispatch => {
  return dispatch({
    type: OPEN_ACCORDION_PANE,
    payload: "pane2"
  });
};

export const openPaymentPane = () => dispatch => {
  return dispatch({
    type: OPEN_ACCORDION_PANE,
    payload: "pane4"
  });
};

export const openCartPane = () => dispatch => {
  return dispatch({
    type: OPEN_ACCORDION_PANE,
    payload: "pane3"
  });
};

export const changePassword = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/forget_password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return dispatch({
        type: CHANGE_PASSWORD,
        payload: response
      });
    })
    .catch(err => console.log(err));
};

export const logOut = () => dispatch =>
  dispatch({
    type: LOG_OUT,
    payload: 1
  });

export const getProfile = data => dispatch => {
  fetch("https://backend.edhik.com/admin/api/get/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === "success") {
        dispatch({
          type: GET_PROFILE,
          payload: response.data
        });
      }
      console.log(response);
    })
    .catch(err => console.log(err));
};

export const setData = data => dispatch => {
  return dispatch({
    type: SET_DATA,
    payload: data
  });
};

export const editProfile = data => dispatch => {
  fetch("https://edhikserver.herokuapp.com/edit_profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => console.log(response));
};
