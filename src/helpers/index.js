/**
 * Helpers Method
 */
import { store } from "../index";

/**
 *  function to check product is exits in cart or not
 */
export function isProductExist(ID) {
   let exists = false
   let cart = store.getState().ecommerce.cart;
   if (cart && cart.length > 0) {
      for (const cartItem of cart) {
         if (cartItem.productID === ID) {
            exists = true
         }
      }
   }
   return exists;
}

/**
 *  function to check product is exits in wishlist or not
 */
export function productExitsInWishlist(ID) {
   let exist = false
   let wishlist = store.getState().ecommerce.wishlist;
   if (wishlist && wishlist.length > 0) {
      for (const item of wishlist) {
         if (item.productID === ID) {
            exist = true
         }
      }
   }
   return exist;
}

/**
 * Get subTotal Price
 */
export function getSubTotalPrice() {
   let subTotalPrice = 0;
   let cart = store.getState().ecommerce.cart;
   if (cart && cart.length > 0) {
      for (const cartItem of cart) {
         subTotalPrice += cartItem.totalPrice;
      }
      return subTotalPrice;
   }
}

/**
 * get Total Price
 */
export function getTotalPrice() {
   const { tax, shipping } = store.getState().ecommerce;
   const totalPrice = getSubTotalPrice() + shipping + tax;
   return totalPrice.toFixed(2);
}
