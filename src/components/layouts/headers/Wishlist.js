/**
 * Wishlist NavLinks
 */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

//connect to store
import { connect } from "react-redux";

//action
import { moveWishlistItemToCart, deleteItemFromWishlist } from '../../../actions/action'

// global components
import ConfirmationPopup from '../../global/confirmation-popup';
import CurrencyIcon from '../../global/currency/CurrencyIcon';

class Wishlist extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         anchorEl: null,
      };
      this.confirmationDialog = React.createRef();
   }


   /**
    * define function for open wishlist dropdown
    */
   handleClick = event => {
      this.setState({
         anchorEl: event.currentTarget,
      });
   };

   /**
    * define function for close wishlist dropdown
    */
   handleClose = () => {
      this.setState({
         anchorEl: null,
      });
   };

   /**
    * function to delete product from wishlist
    */
   onDeleteCartItem(wishlistItem) {
      this.wishlistItem = wishlistItem;
      this.confirmationDialog.current.openDialog();
   }

   /**
    * function for delete wishlist product
    * @param {boolean} popupResponse 
    */
   deleteCartItem(popupResponse) {
      if (popupResponse) {
         this.props.deleteItemFromWishlist(this.wishlistItem);
         this.wishlistItem = ""
      }
      this.setState({
         anchorEl: null,
      })
   }

   moveWishlistItemToCart() {
      this.setState({
         anchorEl: null,
      })
      this.props.moveWishlistItemToCart();
   }

   //get url
   getUrl(url) {
      //console.log("url", url.split('/')[0])
      return url.split('/')[0];
   }

   render() {

      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const { wishlist } = this.props;
      return (
         <div className="iron-whislist-wrap">
            <IconButton
               color="inherit"
               aria-label="whislist"
               aria-owns={open ? 'simple-popper' : null}
               aria-haspopup="true"
               variant="contained"
               onClick={this.handleClick}
               className="icon-btn mr-10"
            >

               {wishlist && wishlist.length > 0 ?
                  (
                     <Badge
                        badgeContent={wishlist.length}
                        color="secondary"
                        className="badge-active"
                     >
                        <i className="material-icons">favorite</i>
                     </Badge>
                  )
                  :
                  (
                     <i className="material-icons">favorite</i>
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
                  {(wishlist && wishlist.length > 0) ?
                     (
                        <Fragment>
                           <ul className="iron-wish-list-wrap mb-0">
                              {wishlist.map((wishlistItem, index) => {
                                 return (
                                    <li key={index} className="cart-menu-item p-10 mb-0">
                                       <div className="d-flex iron-cart-post">
                                          <div className="cart-thumb">
                                             {this.getUrl(wishlistItem.image) === 'https:' ?
                                                <img
                                                   src={wishlistItem.image}
                                                   alt='wish-item'
                                                />
                                                :
                                                <img
                                                   src={require(`../../../assets/images/${wishlistItem.image}`)}
                                                   alt='wish-item'
                                                />
                                             }
                                          </div>
                                          <div className=" cart-content-wrap d-flex justify-content-start align-items-center">
                                             <div className="cart-content" >
                                                <h6 className="mb-5 text-truncate">{wishlistItem.name}</h6>
                                                <span><CurrencyIcon /> {wishlistItem.price}</span>
                                             </div>
                                             <div className="cart-edit-action d-flex justify-content-end align-items-center">
                                                <Button
                                                   onClick={() => this.onDeleteCartItem(wishlistItem)}
                                                   className="icon-btn button mr-5"
                                                >
                                                   <i className="material-icons">remove</i>
                                                </Button>
                                                {/* <Button
                                                                    onClick={() => this.moveWishlistItemToCart()}
                                                                    className="icon-btn button"
                                                                >
                                                                    <i className="material-icons">add_shopping_cart</i>
                                                                </Button> */}
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 )
                              })
                              }
                           </ul>
                           <div className="py-15 px-10">
                              <Button onClick={() => this.moveWishlistItemToCart()} className=" button btn-active d-block w-100" >
                                 add all to cart
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
            </Popover>
            <ConfirmationPopup
               ref={this.confirmationDialog}
               onConfirm={(res) => this.deleteCartItem(res)}
            />
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { wishlist } = ecommerce;
   return { wishlist };
}

export default connect(mapStateToProps, {
   moveWishlistItemToCart,
   deleteItemFromWishlist
})(Wishlist);

