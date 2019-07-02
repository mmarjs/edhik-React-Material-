/**
 * Cart page
 */
/* eslint-disable */
import React, { Fragment } from 'react';

//Material ui
import { Button, Grid, Divider } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

//Page Title
import PageTitle from '../../components/widgets/PageTitle';

//global component
import RctCard from '../../components/global/rct-card';
import CurrencyIcon from '../../components/global/currency/CurrencyIcon';
import ConfirmationPopup from '../../components/global/confirmation-popup';

//action
import { removeProductItem, updateProductQuantity } from '../../actions/action';

// helpers
import { getSubTotalPrice, getTotalPrice } from "../../helpers";
import ContentLoader from '../../components/global/loaders/ContentLoader';

class Cart extends React.Component {

   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
   }

   /**
    * function to change quantity of product
    */
   changeProductQuantity(e, cartItem) {
      let newQuantity = e.target.value;
      this.props.updateProductQuantity({ newQuantity, cartItem })
   }

   /**
    * function to delete product from cart
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
   }

   //get url
   getUrl(url) {
      console.log("url", url.split('/')[0])
      return url.split('/')[0];
   }

   render() {
      const { cart, tax, shipping } = this.props;
      return (
         <Fragment>
            {cart !== null ?
               <div className="iron-cart-wrapper bg-base">
                  {/* <PageTitle
                     title="Here’s what’s in your bag."
                     desc="Our latest news and learning articles."
                  /> */}
                  <div className="inner-container section-pad">
                     <div className="container">
                        {(cart && cart.length > 0) ?
                           (
                              <Fragment>
                                 <RctCard className="cart-shop-list">
                                    <div>
                                       {cart && cart.map((cartItem, index) => {
                                          return (
                                             <Fragment key={index}>
                                                <Grid container spacing={24} className="my-0">
                                                   <Grid
                                                      item xs={12} sm={12} md={2} lg={2}
                                                      className="py-0 d-flex justify-content-md-start justify-content-center align-items-center mb-md-0 mb-20"
                                                   >
                                                      <a href="javascript:void(0);" className="cart-thumb d-inline-block px-10">
                                                         {this.getUrl(cartItem.image) === 'https:' ?
                                                            <img
                                                               src={cartItem.image}
                                                               alt='cart-item'
                                                               width="100"
                                                            />
                                                            :
                                                            <img
                                                               src={require(`../../assets/images/${cartItem.image}`)}
                                                               alt='cart-item'
                                                               width="100"
                                                            />
                                                         }
                                                      </a>
                                                   </Grid>
                                                   <Grid item xs={12} sm={6} md={3} lg={2} className="py-0 d-flex justify-content-center align-items-center mb-md-0 mb-20" >
                                                      <div className="text-center">
                                                         <h5 className="mb-10">{cartItem.name}</h5>
                                                         <p className="mb-0">Delivery in 3-4 days | Free</p>
                                                      </div>
                                                   </Grid>
                                                   <Grid item xs={6} sm={6} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center mb-md-0 mb-20" >
                                                      <CurrencyIcon /> {cartItem.price}
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <FormControl className="mb-20">
                                                         <InputLabel className="text-capitalize dark-color">quantity</InputLabel>
                                                         <Select
                                                            value={cartItem.quantity}
                                                            onChange={(e) => this.changeProductQuantity(e, cartItem)}
                                                            className="iron-select-width1"
                                                         >
                                                            <MenuItem value={1}>1</MenuItem>
                                                            <MenuItem value={2}>2</MenuItem>
                                                            <MenuItem value={3}>3</MenuItem>
                                                            <MenuItem value={4}>4</MenuItem>
                                                            <MenuItem value={5}>5</MenuItem>
                                                            <MenuItem value={6}>6</MenuItem>
                                                         </Select>
                                                      </FormControl>
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <CurrencyIcon /> {cartItem.totalPrice.toFixed(2)}
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={1} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <Button
                                                         className="cart-btn"
                                                         onClick={() => this.onDeleteCartItem(cartItem)}
                                                      >
                                                         <i className="zmdi zmdi-delete"></i>
                                                      </Button>
                                                   </Grid>
                                                </Grid>
                                                <Divider className="my-20" />
                                             </Fragment>
                                          )
                                       })}
                                    </div>
                                 </RctCard>
                                 <Grid container spacing={0} className="cart-total">
                                    <Grid item xs={12} sm={8} md={6} lg={5} className="ml-sm-auto">
                                       <div className="d-flex justify-content-between align-items-center mb-15">
                                          <span className="d-inline-block text-capitalize">subtotal</span>
                                          <span><CurrencyIcon /> {getSubTotalPrice()}</span>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center mb-15">
                                          <span className="d-inline-block text-capitalize">Shipping</span>
                                          <span><CurrencyIcon /> {shipping}</span>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="d-inline-block text-capitalize">Tax(GST)</span>
                                          <span><CurrencyIcon /> {tax}</span>
                                       </div>
                                       <Divider className="my-20"></Divider>
                                       <div className="d-flex justify-content-between align-items-center mb-20">
                                          <h4>Total</h4>
                                          <h4><CurrencyIcon /> {getTotalPrice()}</h4>
                                       </div>
                                       <div className="d-flex justify-content-end align-items-center">
                                          <Button component={Link} to="/check-out" className="button btn-active btn-lg">proceed to checkout</Button>
                                       </div>
                                    </Grid>
                                 </Grid>
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
                  </div>
                  <ConfirmationPopup
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteCartItem(res)}
                  />
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart, tax, shipping } = ecommerce;
   return { cart, tax, shipping };
}

export default connect(mapStateToProps, {
   removeProductItem,
   updateProductQuantity
})(Cart);