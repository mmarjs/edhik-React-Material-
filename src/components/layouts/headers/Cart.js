/**
 * cart list item
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from "react-redux";

// global component
import CurrencyIcon from '../../global/currency/CurrencyIcon';
import ConfirmationDialog from '../../global/confirmation-popup';

//action
import { removeProductItem } from '../../../actions/action';

class Cart extends React.Component {

   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
      this.state = {
         anchorEl: null,
      };
   }

   //Define function for open dropdown
   handleClick = event => {
      this.setState({
         anchorEl: event.currentTarget,
      });
   };

   //Define function for close dropdown
   handleClose = () => {
      this.setState({
         anchorEl: null,
      });
   };

   //Function to delete product from cart
   onDeleteCartItem(cartItem) {
      this.cartItem = cartItem;
      this.confirmationDialog.current.openDialog();
   }

   //Function for delete cart product
   deleteCartItem(popupResponse) {
      if (popupResponse) {
         this.props.removeProductItem(this.cartItem);
         this.cartItem = ""
      }
      this.setState(
         {
            anchorEl: null,
         }
      )
   }

   //get url
   getUrl(url) {
      //console.log("url", url.split('/')[0])
      return url.split('/')[0];
   }

   render() {

      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const { cart } = this.props;

      return (
         <div className="iron-cart-wrap">
            <IconButton
               color="primary"
               aria-owns={open ? 'simple-popper' : null}
               aria-haspopup="true"
               variant="contained"
               onClick={this.handleClick}
               className="icon-btn mr-10"
               aria-label="Cart"
            >
               {cart && cart.length > 0 ?
                  (
                     <Badge
                        badgeContent={cart.length}
                        color="secondary"
                        className="badge-active"
                     >
                        <i className="material-icons">shopping_cart</i>
                     </Badge>
                  )
                  :
                  (
                     <i className="material-icons">shopping_cart</i>
                  )
               }
            </IconButton>
            <Popover
               id="simple-popper"
               open={open}
               anchorEl={anchorEl}
               onClose={this.handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
            >
               <div>
                  {(cart && cart.length > 0) ?
                     (
                        <Fragment>
                           <ul className="iron-cart-list-wrap mb-0">
                              {cart && cart.map((cartItem, index) => {
                                 return (
                                    <li key={index} className="cart-menu-item p-10 mb-0">
                                       <div className="d-flex iron-cart-post">
                                          <div className="cart-thumb">
                                             {this.getUrl(cartItem.image) === 'https:' ?
                                                <img
                                                   src={cartItem.image}
                                                   alt='product-thumbnail'
                                                />
                                                :
                                                <img
                                                   src={require(`../../../assets/images/${cartItem.image}`)}
                                                   alt='product-thumbnail'
                                                />
                                             }
                                          </div>
                                          <div className=" cart-content-wrap d-flex justify-content-start align-items-center">
                                             <div className="cart-content" >
                                                <h6 className="mb-5 text-truncate">{cartItem.name}</h6>
                                                <span><CurrencyIcon /> {cartItem.totalPrice}</span>
                                             </div>
                                             <div className="cart-edit-action d-flex justify-content-end align-items-center">
                                                <Button
                                                   className="icon-btn button mr-5"
                                                   onClick={() => this.onDeleteCartItem(cartItem)}
                                                >
                                                   <i className="material-icons">remove_shopping_cart</i>
                                                </Button>
                                                <Button component={Link} to="/cart" className="icon-btn button" onClick={this.handleClose} >
                                                   <i className="material-icons">edit</i>
                                                </Button>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 )
                              })
                              }
                           </ul>
                           <div className=" py-15 px-10">
                              <Button onClick={this.handleClose} component={Link} to="/check-out" className="button btn-active w-100">
                                 checkout
                              </Button>
                           </div>
                        </Fragment>
                     )
                     :
                     (
                        <div>
                           <span className="text-capitalize text-14 dark-color d-block px-40 py-15">no product found</span>
                        </div>
                     )
                  }
               </div>
               <ConfirmationDialog
                  ref={this.confirmationDialog}
                  onConfirm={(res) => this.deleteCartItem(res)}
               />
            </Popover>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { cart } = ecommerce;
   return { cart };
}

export default connect(mapStateToProps, {
   removeProductItem
})(Cart);

