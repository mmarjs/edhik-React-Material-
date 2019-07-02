/**
 * final receipt (invoice) page
 */
import React, { Fragment } from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

//add jquery
import $ from 'jquery';

//connect to store
import { connect } from 'react-redux';

// rct card
import RctCard from '../../../components/global/rct-card';
import CurrencyIcon from '../../../components/global/currency/CurrencyIcon';

//page title
import PageTitle from '../../../components/widgets/PageTitle';
import ContentLoader from '../../../components/global/loaders/ContentLoader';


class Invoice extends React.Component {

   constructor(props) {
      super(props);
      this.userInformation = JSON.parse(localStorage.getItem('stepOneFormData'));
   }

   /**
    * define function for print invoice
    */
   printInvoice() {
      let printContents = $($('#payment-receipt').html());
      let originalContents = $('body > *').hide();
      $('body').append(printContents);
      window.print();
      printContents.remove();
      originalContents.show();
   }


   /**
    * Get subTotal Price
    */
   getSubTotalPrice() {
      let subTotalPrice = 0;
      let cart = this.props.receiptProducts;
      if (cart && cart.length > 0) {
         for (const iterator of cart) {
            subTotalPrice += iterator.totalPrice;
         }
         return subTotalPrice;
      }
   }

   /**
    * get total price
    */
   getTotalPrice() {
      let totalPrice = 0;
      let subTotal = this.getSubTotalPrice();
      const { tax, shipping } = this.props;
      totalPrice = subTotal + shipping + tax;
      return totalPrice.toFixed(2);
   }

   //get url
   getUrl(url) {
      //console.log("url", url.split('/')[0])
      return url.split('/')[0];
   }

   render() {

      const { receiptProducts, tax, shipping } = this.props;
      return (
         <Fragment>
            {receiptProducts !== null ?
               <div className="iron-invoice-wrap bg-base">
                  <PageTitle
                     title="Payment Confirmation"
                     desc="Our latest news and learning articles."
                  />
                  <Fragment>
                     {(receiptProducts && receiptProducts.length > 0) ?
                        <div className="inner-container section-pad" >
                           <div className="container" >
                              <Grid container spacing={32} >
                                 <Grid item xs={12} sm={12} md={10} lg={7} className="mx-auto">
                                    <RctCard >
                                       <div id="payment-receipt">
                                          <div className="text-center bg-secondary px-sm-50 px-15 py-50">
                                             <h1 className="mb-20">thank you</h1>
                                             <h5 className="mb-25">Payment is successfully processsed and your order is on the way</h5>
                                             <h6 className="mb-25">Transaction ID:267676GHERT105467</h6>
                                             <img
                                                src={require("../../../assets/images/checked.png")} alt="success"
                                             />
                                          </div>
                                          <div className="p-sm-30 p-15">
                                             <div className="pt-20 pb-40">
                                                <Grid container spacing={0}>
                                                   <Grid item xs={12} sm={12} md={6} lg={6} >
                                                      <div className="mb-md-0 mb-20">
                                                         <h6>Summary</h6>
                                                         <p className="mb-5">Order ID: 2563883628932</p>
                                                         <p className="mb-5">Order Date: October 26, 2018 </p>
                                                         <p className="mb-5">Order Total: <CurrencyIcon /> {this.getTotalPrice()}</p>
                                                      </div>
                                                   </Grid>
                                                   <Grid item xs={12} sm={12} md={6} lg={6} >
                                                      <div className="text-md-right">
                                                         <h6>Ship To</h6>
                                                         <p className="mb-5 text-capitalize">
                                                            {this.userInformation.fname}
                                                            {this.userInformation.lname}
                                                         </p>
                                                         <p className="mb-5 text-capitalize">{this.userInformation.aptname}</p>
                                                         <p className="mb-5 text-capitalize">{this.userInformation.state}</p>
                                                         <p className="mb-5 text-capitalize">{this.userInformation.country} , Zipcode - {this.userInformation.zipcode}</p>
                                                         <p className="mb-5 text-capitalize">Contact No.{this.userInformation.mobile}</p>
                                                      </div>
                                                   </Grid>
                                                </Grid>
                                             </div>
                                             <div className="py-25 px-15  text-center bg-secondary mb-50">
                                                <h4>Expected Date of Delivery</h4>
                                                <h3>October 30, 2018</h3>
                                             </div>
                                             <div>
                                                <h4 className="pt-5">Your Ordered Details</h4>
                                                <Fragment>
                                                   {receiptProducts && receiptProducts.map((cartItem, index) => {
                                                      return (
                                                         <Fragment key={index}>
                                                            <Grid container spacing={24} className="my-0">
                                                               <Grid item xs={12} sm={12} md={3} lg={3} className="py-0  d-flex justify-content-center align-items-center mb-md-0 mb-20">
                                                                  {this.getUrl(cartItem.image) === 'https:' ?
                                                                     <img
                                                                        src={cartItem.image}
                                                                        alt='cart-item'
                                                                        width="100"
                                                                     />
                                                                     :
                                                                     <img
                                                                        src={require(`../../../assets/images/${cartItem.image}`)}
                                                                        alt='cart-item'
                                                                        width="100"
                                                                     />
                                                                  }
                                                               </Grid>
                                                               <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                                                  <div className="text-center">
                                                                     <h6 className="mb-5">Product Name</h6>
                                                                     <p className="mb-sm-0 mb-15 font-bold text-capitalize">{cartItem.name}</p>
                                                                  </div>
                                                               </Grid>
                                                               <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                                                  <div className="text-center">
                                                                     <h6 className="mb-5">Quantity</h6>
                                                                     <p className="mb-0">{cartItem.quantity}</p>
                                                                  </div>
                                                               </Grid>
                                                               <Grid item xs={12} sm={12} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                                                  <div className="text-center">
                                                                     <h6 className="mb-5">price</h6>
                                                                     <p className="mb-0"><CurrencyIcon /> {cartItem.price.toFixed(2)}</p>
                                                                  </div>
                                                               </Grid>
                                                            </Grid>
                                                            <Divider className="my-20" />
                                                         </Fragment>
                                                      )
                                                   })}
                                                </Fragment>
                                             </div>
                                             <div>
                                                <Grid container spacing={0}>
                                                   <Grid item xs={12} sm={12} md={12} lg={12} className="pt-10" >
                                                      <div className="d-flex justify-content-between align-items-center mb-15">
                                                         <span className="d-inline-block text-capitalize text-14">subtotal
                                                        </span>
                                                         <span className=" text-14"><CurrencyIcon /> {this.getSubTotalPrice()}</span>
                                                      </div>
                                                      <div className="d-flex justify-content-between align-items-center mb-15">
                                                         <span className="d-inline-block text-capitalize text-14">Shipping
                                                        </span>
                                                         <span className=" text-14"><CurrencyIcon /> {shipping}5</span>
                                                      </div>
                                                      <div className="d-flex justify-content-between align-items-center">
                                                         <span className="d-inline-block text-capitalize text-14">Tax(GST)
                                                        </span>
                                                         <span className=" text-14"><CurrencyIcon /> {tax}</span>
                                                      </div>
                                                      <Divider className="my-30"></Divider>
                                                      <div className="d-flex justify-content-between align-items-center mb-50">
                                                         <h4>Total</h4>
                                                         <h4><CurrencyIcon /> {this.getTotalPrice()}</h4>
                                                      </div>
                                                   </Grid>
                                                </Grid>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="p-sm-30 p-15 d-sm-flex justify-content-between align-items-center">
                                          <Button onClick={() => this.printInvoice(this)} className="button btn-active btn-lg mr-sm-0 mr-20 mb-20 mb-sm-0">download PDF</Button>
                                          <Button component={Link} to="/" className="button btn-active btn-lg  mb-20  mb-sm-0">go to home</Button>
                                       </div>
                                    </RctCard>
                                 </Grid>
                              </Grid>
                           </div>
                        </div>
                        :
                        <div className="section-pad text-center">
                           <div className="mb-30">
                              <img src={require("../../../assets/images/empty-cart.png")} alt="shop-cart" />
                           </div>
                           <h4>Your Shopping Bag is empty.</h4>
                           <Link to='/shop' className="text-capitalize">go for shopping</Link>
                        </div>
                     }
                  </Fragment>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { receiptProducts, tax, shipping } = ecommerce;
   return { receiptProducts, tax, shipping };
}

export default connect(mapStateToProps)(Invoice);

