/**
 * Checkout Page
 */
/* eslint-disable */
import React, { Fragment } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./checkout.scss";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import PaymentTabs from "../../routes/check-out/payment/components/PaymentTabs";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

//Page Title
import PageTitle from "../../components/widgets/PageTitle";

//component
import RctCard from "../../components/global/rct-card";
import SignIn from "../../components/global/forms/SignIn";
import ViewCartSlide from "../../components/widgets/ViewCartSlide";
import EditAddressTwo from "../../routes/account/edit/components/EditAddressTwo";
import CurrencyIcon from "../../components/global/currency/CurrencyIcon";
//global component
import ConfirmationDialog from "../../components/global/confirmation-popup";
import ConfirmationPopup from "../../components/global/confirmation-popup";
import { withRouter } from "react-router";

// helpers
import { getSubTotalPrice, getTotalPrice } from "../../helpers";
import {
  openAddressPane,
  openPaymentPane,
  openLoginPane,
  openCartPane
} from "../../actions/checkoutAction";
import { removeProductItem, updateProductQuantity } from "../../actions/action";
import AddressList from "./payment/components/AddressList";

//connect to store
import { connect } from "react-redux";
import PaymentTabstwo from "./payment/components/paymentTabsTwo";

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.confirmationDialog = React.createRef();
    this.state = {
      expanded: "pane1",
      get_address: [],
      selectedValue: "a"
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  deleteToken() {
    localStorage.removeItem("token");
    this.props.openLoginPane();
    this.props.history.push("/check-out");
  }

  componentDidMount() {
    if (localStorage.token !== undefined && localStorage.token.length > 0) {
      this.props.openAddressPane();
    }
  }

  startPayment() {
    this.props.openPaymentPane();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        expanded: nextProps.open_pane
      });
      if (nextProps.get_address.length > 0) {
        this.setState({
          get_address: nextProps.get_address
        });
      }
    }
    if (
      nextProps.add_address !== undefined &&
      nextProps.add_address === "sucess"
    ) {
      console.log("Cart open start");
      nextProps.openCartPane();
      console.log("Cart opened");
    }
  }

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
      this.cartItem = "";
    }
    this.setState({
      right: false
    });
  }

  changeProductQuantity(e, cartItem) {
    let newQuantity = e.target.value;
    this.props.updateProductQuantity({ newQuantity, cartItem });
  }

  //get url
  getUrl(url) {
    console.log("url", url.split("/")[0]);
    return url.split("/")[0];
  }

  render() {
    const { expanded } = this.state;
    const { cart, tax, shipping } = this.props;
    return (
      <div className="checkout-wrapper">
        {/* <PageTitle
               title="checkout"
            /> */}
        {cart && cart.length > 0 ? (
          <Fragment>
            <div className="inner-container section-pad">
              <div className="container">
                {/* <div className="view-cart text-right mb-60">
                              <ViewCartSlide />
                           </div> */}
                <Grid container spacing={32}>
                  <Grid item xs={12} sm={12} md={9} lg={9}>
                    <div>
                      <ExpansionPanel
                        classes={{
                          root: "iron-payment-accordion", // class name, e.g. `root-x`
                          expanded: "iron-payment-accordion expanded", // class name, e.g. `disabled-x`
                          disabled: "iron-payment-accordion disabled" // class name, e.g. `disabled-x`
                        }}
                        expanded={this.state.expanded === "pane1"}
                        disabled={expanded !== "pane1"}
                      >
                        <ExpansionPanelSummary
                          classes={{
                            root: "panel_title", // class name, e.g. `root-x`
                            expanded: "panel_title expanded", // class name, e.g. `disabled-x`
                            disabled: "panel_title disabled" // class name, e.g. `disabled-x`
                          }}
                        >
                          <h4>
                            {" "}
                            <span className="title_number">1</span>
                            <label className="done">Login or Signup</label>{" "}
                            <button
                              className="change_step_button"
                              style={
                                expanded === "pane1" ? { display: "none" } : {}
                              }
                              onClick={this.deleteToken.bind(this)}
                            >
                              CHANGE
                            </button>
                          </h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="payment-detail">
                          <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                              <SignIn />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                              <div className="benefits_of_secure_login">
                                <h5>Advantages of our secure login</h5>
                                <ul className="secure_list_cont">
                                  <li className="secure_list_item">
                                    <img src="/images/truck.svg" alt="" />
                                    Easily Track Orders, Hassle free Returns
                                  </li>
                                  <li className="secure_list_item">
                                    <img src="/images/bell.svg" alt="" />
                                    Get Relevant Alerts and Recommendation
                                  </li>
                                  <li className="secure_list_item">
                                    <img src="/images/star.svg" alt="" />
                                    Wishlist, Reviews, Ratings and more.
                                  </li>
                                </ul>
                              </div>
                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel
                        classes={{
                          root: "iron-payment-accordion", // class name, e.g. `root-x`
                          expanded: "iron-payment-accordion expanded", // class name, e.g. `disabled-x`
                          disabled: "iron-payment-accordion disabled" // class name, e.g. `disabled-x`
                        }}
                        expanded={this.state.expanded === "pane2"}
                        // onChange={this.handleChange('pane2')}
                        disabled={this.state.expanded !== "pane2"}
                      >
                        <ExpansionPanelSummary
                          classes={{
                            root: "panel_title root", // class name, e.g. `root-x`
                            expanded: "panel_title expanded", // class name, e.g. `disabled-x`
                            disabled: "panel_title disabled" // class name, e.g. `disabled-x`
                          }}
                        >
                          <h4>
                            <span className="title_number">2</span>
                            <label className="incomplete">Address</label>
                            <button
                              className="change_step_button"
                              style={
                                expanded === "pane2" ? { display: "none" } : {}
                              }
                              onClick={this.props.openAddressPane}
                            >
                              CHANGE
                            </button>
                          </h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="payment-detail">
                          <div className="py-15 w-100">
                            {this.state.get_address.length === 0 ? (
                              <EditAddressTwo type={"?type=address"} />
                            ) : (
                              <AddressList addresses={this.state.get_address} />
                            )}
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel
                        classes={{
                          root: "iron-payment-accordion", // class name, e.g. `root-x`
                          expanded: "iron-payment-accordion expanded", // class name, e.g. `disabled-x`
                          disabled: "iron-payment-accordion disabled" // class name, e.g. `disabled-x`
                        }}
                        expanded={expanded === "pane3"}
                        disabled={expanded !== "pane3"}
                      >
                        <ExpansionPanelSummary
                          classes={{
                            root: "panel_title", // class name, e.g. `root-x`
                            expanded: "panel_title expanded", // class name, e.g. `disabled-x`
                            disabled: "panel_title disabled" // class name, e.g. `disabled-x`
                          }}
                        >
                          <h4>
                            <span className="title_number">3</span>{" "}
                            <label className="incomplete">Cart</label>
                            <button
                              className="change_step_button"
                              style={
                                expanded === "pane3" ? { display: "none" } : {}
                              }
                              onClick={this.props.openCartPane}
                            >
                              CHANGE
                            </button>
                          </h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="payment-detail review_cart_cont">
                          <div className="py-15 w-100">
                            <Fragment>
                              {cart !== null ? (
                                <div className="iron-cart-wrapper bg-base">
                                  {/* <PageTitle
                                                         title="Here’s what’s in your bag."
                                                         desc="Our latest news and learning articles."
                                                      /> */}

                                  {cart && cart.length > 0 ? (
                                    <Fragment>
                                      <div className="review_cart_checkout">
                                        <div className="">
                                          {cart &&
                                            cart.map((cartItem, index) => {
                                              return (
                                                <div className="each_cart_item">
                                                  <div
                                                    className="each_cart_item_container"
                                                    key={index}
                                                  >
                                                    <div className="cart_image">
                                                      {this.getUrl(
                                                        cartItem.image
                                                      ) === "https:" ? (
                                                        <img
                                                          src={cartItem.image}
                                                          alt="cart-item"
                                                          width="100"
                                                        />
                                                      ) : (
                                                        <img
                                                          src={require(`../../assets/images/${
                                                            cartItem.image
                                                          }`)}
                                                          alt="cart-item"
                                                          width="100"
                                                        />
                                                      )}
                                                    </div>

                                                    <div className="cart_item_description">
                                                      <div className="car_item_name">
                                                        {cartItem.name}
                                                      </div>
                                                      <div className="cart_item_price">
                                                        <CurrencyIcon />{" "}
                                                        {cartItem.totalPrice.toFixed(
                                                          2
                                                        )}
                                                      </div>

                                                      {/* Flipkart has shown only total price for each item */}
                                                      {/* <CurrencyIcon /> {cartItem.price}   */}
                                                      <div className="item_quantity">
                                                        <div className="number_stepper_custom">
                                                          <button className="number_spinner">
                                                            -
                                                          </button>
                                                          <input
                                                            value={
                                                              cartItem.quantity
                                                            }
                                                            onChange={e =>
                                                              this.changeProductQuantity(
                                                                e,
                                                                cartItem
                                                              )
                                                            }
                                                            className="custom_stepper_input"
                                                          />

                                                          <button className="number_spinner">
                                                            +
                                                          </button>
                                                        </div>
                                                      </div>
                                                      <button
                                                        className="remove_from_cart"
                                                        onClick={() =>
                                                          this.onDeleteCartItem(
                                                            cartItem
                                                          )
                                                        }
                                                      >
                                                        REMOVE
                                                      </button>
                                                    </div>

                                                    <div className="delivery_details_cart">
                                                      <p>
                                                        Delivery in 3-4 days |
                                                        Free
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          <div className="proceed_to_payment">
                                            <div className="email_cart_highlight">
                                              Order confirmation email will be
                                              sent to{" "}
                                              <span>
                                                ram.pandey@buzzerlabs.com
                                              </span>
                                            </div>
                                            <Button
                                              className="btn-active continue_to_payment"
                                              onClick={this.startPayment.bind(
                                                this
                                              )}
                                            >
                                              CONTINUE
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </Fragment>
                                  ) : (
                                    <div className="section-pad text-center">
                                      <div className="mb-30">
                                        <img
                                          src={require("../../assets/images/empty-cart.png")}
                                          alt="shop-cart"
                                        />
                                      </div>
                                      <h4>Your Shopping Bag is empty.</h4>
                                      <Link
                                        to="/shop"
                                        className="text-capitalize"
                                      >
                                        go for shopping
                                      </Link>
                                    </div>
                                  )}
                                  <ConfirmationPopup
                                    ref={this.confirmationDialog}
                                    onConfirm={res => this.deleteCartItem(res)}
                                  />
                                </div>
                              ) : (
                                <ContentLoader />
                              )}
                            </Fragment>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel
                        classes={{
                          root: "iron-payment-accordion", // class name, e.g. `root-x`
                          expanded: "iron-payment-accordion expanded", // class name, e.g. `disabled-x`
                          disabled: "iron-payment-accordion disabled" // class name, e.g. `disabled-x`
                        }}
                        expanded={expanded === "pane4"}
                        disabled={expanded !== "pane4"}
                      >
                        <ExpansionPanelSummary
                          classes={{
                            root: "panel_title", // class name, e.g. `root-x`
                            expanded: "panel_title expanded", // class name, e.g. `disabled-x`
                            disabled: "panel_title disabled" // class name, e.g. `disabled-x`
                          }}
                        >
                          <h4>
                            <span className="title_number">4</span>
                            <label className="incomplete">Payment</label>
                            <button
                              className="change_step_button"
                              style={
                                expanded === "pane4" ? { display: "none" } : {}
                              }
                              onClick={this.props.openPaymentPane}
                            >
                              CHANGE
                            </button>
                          </h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="payment-detail no_padding">
                          <div className="w-100">
                            {/* <PaymentTabs /> */}
                            <PaymentTabstwo />
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Fragment>
                      {/* <div className="iron-view-cart-sidebar">
                                       <div className="side-cart-head text-center py-5 px-5 bg-active">
                                          <div className="mb-15"><i className="material-icons"> shopping_cart </i></div>
                                          <h5 className="mb-0">You have {cart ? cart.length : 0} items in your cart</h5>
                                       </div>
                                       <div className="side-cart-wrapper px-15">
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
                                    </div> */}
                    </Fragment>

                    <div className="cart_summary">
                      <div className="cart_summary_heading">PRICE DETAILS</div>
                      <div className="car_summary_body">
                        <div className="cart_summary_item">
                          <div>
                            Price <span>(3 items)</span>
                          </div>
                          <div>
                            <CurrencyIcon />
                            545
                          </div>
                        </div>
                        <div className="cart_summary_item">
                          <div>Delivery Charges</div>
                          <div>
                            <CurrencyIcon />
                            55
                          </div>
                        </div>
                        <div className="summary_total">
                          <div className="cart_summary_item">
                            <div>Amount Payable</div>
                            <div>
                              <CurrencyIcon />
                              655
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart_summary_footer">
                        Your Total Savings on this order{" "}
                        <span>
                          <CurrencyIcon />
                          45
                        </span>
                      </div>
                    </div>
                    <div className="secure_message_with_shield">
                      <img src="/images/secure.svg" alt="" />
                      Safe and Secure Payments. Easy returns. 100% Authentic
                      products.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="section-pad text-center">
            <div className="mb-30">
              <img
                src={require("../../assets/images/empty-cart.png")}
                alt="shop-cart"
              />
            </div>
            <h4>Your Shopping Bag is empty.</h4>
            <Link to="/shop" className="text-capitalize">
              go for shopping
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.ecommerce.cart,
  open_pane: state.checkout.open_pane,
  get_address: state.checkout.get_address,
  add_address: state.checkout.add_address
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      openAddressPane,
      openPaymentPane,
      openCartPane,
      removeProductItem,
      openLoginPane,
      updateProductQuantity
    }
  )(CheckOut)
);
