/**
 * Action Types
 */
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  SHOW_ALERT,
  HIDE_ALERT,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_QUANTITY,
  CHANGE_CURRENCY,
  SET_LANGUAGE,
  FINAL_PAYMENT,
  MOVE_WISHLISTITEM_TO_CART,
  REMOVE_FROM_WISHLIST,
  BUY_NOW
} from "./types";

//add product item
export const addProductItem = (data, alertMessage) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: data
  });
};

export const buyNow = data => dispatch => {
  dispatch({
    type: BUY_NOW,
    payload: data
  });
};

//show alert box
export const showAlert = (message, type) => ({
  type: SHOW_ALERT,
  payload: { message, type }
});

//hide alert box
export const hideAlert = () => ({
  type: HIDE_ALERT
});

// add product to wishlist
export const addToWishlist = (data, alertMessage) => dispatch => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: data
  });
};

//move all wishlist item to cart
export const moveWishlistItemToCart = () => ({
  type: MOVE_WISHLISTITEM_TO_CART
});

//delete wishlist item
export const deleteItemFromWishlist = data => ({
  type: REMOVE_FROM_WISHLIST,
  payload: data
});

//Remove product item
export const removeProductItem = data => ({
  type: REMOVE_FROM_CART,
  payload: data
});

//update product quantity
export const updateProductQuantity = data => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: data
});

// change currency
export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  payload: currency
});

// change language
export const setLanguage = locale => ({
  type: SET_LANGUAGE,
  payload: locale
});

//final payment
export const finalPayment = history => dispatch => {
  history.push("/final-receipt");
  dispatch({ type: FINAL_PAYMENT });
};
