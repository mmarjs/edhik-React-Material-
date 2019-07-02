/**
 * View cart sidebar component
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CurrencyIcon from '../global/currency/CurrencyIcon';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

//action
import { removeProductItem } from '../../actions/action';

//global component
import ConfirmationDialog from '../global/confirmation-popup';

// helpers
import { getSubTotalPrice, getTotalPrice } from "../../helpers";

class ViewCartSlide extends React.Component {

   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
      this.state = {
         right: false,
      };
   }
   /**
    * function for toggle sidebar
    */
   toggleDrawer = (side, open) => () => {
      this.setState({
         [side]: open,
      });
   };

   /**
    * function to delete product from cart
    * @param {object} cartItem 
    */
   onDeleteCartItem(cartItem) {
      this.cartItem = cartItem;
      this.confirmationDialog.current.openDialog();
   }

   /**
    * function for delete cart product
    * @param {boolean} popupResponse 
    */
   deleteCartItem(popupResponse) {
      if (popupResponse) {
         this.props.removeProductItem(this.cartItem);
         this.cartItem = ""
      }
      this.setState({
         right: false,
      });
   }

   //get url
   getUrl(url) {
      console.log("url", url.split('/')[0])
      return url.split('/')[0];
   }

   render() {

      const { cart, tax, shipping } = this.props;
      return (
         <div className="iron-view-cart-wrapper">
            <Button
               className="button btn-active"
               onClick={this.toggleDrawer('right', true)}
            >
               Show Order Detail : <span className="pl-5"><CurrencyIcon /> {getTotalPrice()}</span>

            </Button>
            <SwipeableDrawer
               anchor="right"
               open={this.state.right}
               onClose={this.toggleDrawer('right', false)}
               onOpen={this.toggleDrawer('right', true)}
            >
               <div
                  tabIndex={0}
                  role="button"
                  className="iron-overflow-x-hidden"
               //onClick={this.toggleDrawer('right', false)}
               // onKeyDown={this.toggleDrawer('right', false)}
               >
                  <div className="iron-view-cart-sidebar">
                     <div className="side-cart-head text-center py-40 px-30 bg-active">
                        <div className="mb-15"><i className="material-icons"> shopping_cart </i></div>
                        <h5 className="mb-0">You have {cart ? cart.length : 0} items in your cart</h5>
                     </div>
                     <div className="side-cart-wrapper">
                        {(cart && cart.length > 0) ?
                           (
                              <Fragment>
                                 <div>
                                    {cart.map((cartItem, index) => {
                                       return (
                                          <div key={index} className="side-cart-list d-flex justify-content-start align-items-center py-20">
                                             <div className="cart-thumb">
                                                {this.getUrl(cartItem.image) === 'https:' ?
                                                   <img
                                                      src={cartItem.image}
                                                      alt="cart-item"
                                                   />
                                                   :
                                                   <img
                                                      src={require(`../../assets/images/${cartItem.image}`)}
                                                      alt="cart-item"
                                                   />
                                                }
                                             </div>
                                             <div className="cart-content">
                                                <div className="d-flex justify-content-start align-items-start pl-20 pr-5">
                                                   <div className="title">
                                                      <h6 className="mb-5 text-truncate">{cartItem.name}</h6>
                                                      <p className="mb-5"><span>{cartItem.quantity}</span></p>
                                                      <p className="font-bold">
                                                         <CurrencyIcon />
                                                         {cartItem.totalPrice.toFixed(2)}
                                                      </p>
                                                   </div>
                                                   <div className="edit-cart">
                                                      <Button className="p-0"
                                                         onClick={() => this.onDeleteCartItem(cartItem)}
                                                      >
                                                         <i className="material-icons"> remove_shopping_cart </i>
                                                      </Button>
                                                      <Button component={Link} to="/cart" className="p-0">
                                                         <i className="material-icons"> edit </i>
                                                      </Button>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       )
                                    })
                                    }
                                 </div>
                                 <div className="py-20">
                                    <div className="d-flex justify-content-between align-items-center mb-20">
                                       <span>Subtotal</span><span><CurrencyIcon /> {getSubTotalPrice()}</span></div>
                                    <div className="d-flex justify-content-between align-items-center mb-20">
                                       <span>Shipping</span><span><CurrencyIcon /> {shipping}5</span></div>
                                    <div className="d-flex justify-content-between align-items-center mb-20">
                                       <span>Tax(GST)</span><span><CurrencyIcon /> {tax}</span></div>
                                    <Divider className="my-20" />
                                    <div className="mb-25 d-flex justify-content-between align-items-center">
                                       <h4>Total</h4><span></span>
                                       <h4> <CurrencyIcon /> {getTotalPrice()}</h4>
                                    </div>
                                 </div>
                              </Fragment>
                           )
                           :
                           (
                              <div className="section-pad text-center">
                                 <div className="mb-30">
                                    <img src={require("../../assets/images/empty-cart.png")} alt="shop-cart" />
                                 </div>
                                 <h4>Your Shopping Bag is empty.</h4>
                                 <Link to='/shop' className="text-capitalize">go for shopping</Link>
                              </div>
                           )
                        }
                     </div>
                     <ConfirmationDialog
                        ref={this.confirmationDialog}
                        onConfirm={(res) => this.deleteCartItem(res)}
                     />
                  </div>
               </div>
            </SwipeableDrawer>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { cart, tax, shipping } = ecommerce;
   return { cart, tax, shipping };
}

export default connect(mapStateToProps, {
   removeProductItem,
})(ViewCartSlide);