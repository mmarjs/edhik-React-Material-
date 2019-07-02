/**
 * payment tab component
 */
/* eslint-disable */
import React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Divider, Radio } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import { Link, withRouter } from "react-router-dom";
import Cards from "react-credit-cards";

//connect to store
import { connect } from "react-redux";

// action
import { finalPayment } from "../../../../actions/action";

//bank card content
let bankOptions = [
  {
    image: require("../../../../assets/images/client-logo-1.png"),
    cardValue: "a",
    bankLabel: "A"
  },
  {
    image: require("../../../../assets/images/client-logo-3.png"),
    cardValue: "b",
    bankLabel: "B"
  },
  {
    image: require("../../../../assets/images/client-logo-4.png"),
    cardValue: "c",
    bankLabel: "C"
  },
  {
    image: require("../../../../assets/images/client-logo-1.png"),
    cardValue: "d",
    bankLabel: "D"
  },
  {
    image: require("../../../../assets/images/client-logo-3.png"),
    cardValue: "e",
    bankLabel: "E"
  }
];

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;
  return <MaskedInput {...other} mask={[/\d/, /\d/, "/", /\d/, /\d/]} />;
};
const TextCVC = props => {
  const { inputRef, ...other } = props;
  return <MaskedInput {...other} mask={[/\d/, /\d/, /\d/, /\d/]} />;
};

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

class PaymentTabs extends React.Component {
  state = {
    value: 0,
    selected: "a",
    age: "",
    creditCardInfo: {
      number: "",
      holderName: "",
      expiryDate: "",
      focused: ""
    }
  };

  componentDidUpdate() {
    this.swipeableActions.updateHeight();
  }

  optionChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  onRadioChange = event => {
    this.setState({ selected: event.target.value });
  };

  onCreditCardValueChange(key, e) {
    this.setState({
      creditCardInfo: {
        ...this.state.creditCardInfo,
        [key]: e.target.value
      }
    });
  }

  onFocusTextFields(key) {
    this.setState({
      creditCardInfo: {
        ...this.state.creditCardInfo,
        focused: key
      }
    });
  }

  render() {
    const { creditCardInfo } = this.state;
    return (
      <div>
        <AppBar
          position="static"
          color="default"
          className="bg-base box-shadow-none iron-tab-bar"
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            className="bg-base color-grey button-scroll-hide"
          >
            <Tab label="cash on delivery" />
            <Tab label="card info" />
            <Tab label="credit/debit/netBanking" />
            <Tab label="paypal" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={"x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          animateHeight
          action={actions => {
            this.swipeableActions = actions;
          }}
        >
          <TabContainer>
            <Grid container spacing={0}>
              <Button
                component={Link}
                to="/"
                className="button btn-active btn-lg"
              >
                ORDER By COD
              </Button>
            </Grid>
          </TabContainer>
          <TabContainer>
            <div className="d-block pb-40">
              <div className="header-mat-tab bg-secondary text-center p-15 pt-50">
                <div className="mb-25">
                  <img
                    alt="card"
                    src={require("../../../../assets/images/card.png")}
                  />
                </div>
                <h4 className="mb-50">enter card detail</h4>
              </div>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={6} className="pr-md-15">
                  <form noValidate autoComplete="off" className="my-20">
                    <TextField
                      required
                      //autoComplete="true"
                      id="credit-card-number"
                      label="Number"
                      value={creditCardInfo.number}
                      onChange={e => this.onCreditCardValueChange("number", e)}
                      variant="outlined"
                      className="iron-form-input-wrap"
                      onFocus={() => this.onFocusTextFields("number")}
                    />
                    <TextField
                      id="Holder Name"
                      label="Name"
                      required
                      //autoComplete
                      value={creditCardInfo.holderName}
                      onChange={e =>
                        this.onCreditCardValueChange("holderName", e)
                      }
                      variant="outlined"
                      className="iron-form-input-wrap"
                      onFocus={() => this.onFocusTextFields("name")}
                    />
                    <div className="d-md-flex">
                      <FormControl className="mr-md-30 mb-30 mb-md-0 iron-form-input-wrap">
                        <InputLabel htmlFor="formatted-text-mask-input">
                          expiry date (MM/YY)
                        </InputLabel>
                        <Input
                          required
                          //autoComplete
                          value={creditCardInfo.expiryDate}
                          onChange={e =>
                            this.onCreditCardValueChange("expiryDate", e)
                          }
                          id="formatted-text-mask-input"
                          onFocus={() => this.onFocusTextFields("expiry")}
                          inputComponent={TextMaskCustom}
                        />
                      </FormControl>
                      <FormControl className="iron-form-input-wrap">
                        <InputLabel htmlFor="formatted-text-mask-input">
                          CVC
                        </InputLabel>
                        <Input
                          required
                          //autoComplete
                          value={creditCardInfo.cvc ? creditCardInfo.cvc : ""}
                          onChange={e => this.onCreditCardValueChange("cvc", e)}
                          id="formatted-text-mask-input"
                          onFocus={() => this.onFocusTextFields("cvc")}
                          inputComponent={TextCVC}
                        />
                      </FormControl>
                    </div>
                    <div className="d-flex pt-30">
                      <Button
                        onClick={() =>
                          this.props.finalPayment(this.props.history)
                        }
                        className="button btn-active mr-20"
                      >
                        submit
                      </Button>
                      <Button className="button">clear</Button>
                    </div>
                  </form>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="pl-md-15">
                  <div className="d-md-flex justify-content-center align-items-center pt-md-60 pt-30">
                    <Cards
                      number={creditCardInfo.number}
                      name={creditCardInfo.holderName}
                      expiry={creditCardInfo.expiryDate}
                      cvc={creditCardInfo.cvc ? creditCardInfo.cvc : ""}
                      focused={creditCardInfo.focused}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </TabContainer>
          <TabContainer>
            <div className="d-bock">
              <div className="header-mat-tab bg-secondary text-center p-15 py-50">
                <div className="mb-25">
                  <img
                    alt="card"
                    src={require("../../../../assets/images/online-shop.png")}
                  />
                </div>
                <h4>Select Bank for NetBanking</h4>
              </div>
              <Divider />
              <div className="py-60 iron-card-radio text-center">
                {bankOptions.map((bankOption, key) => {
                  return (
                    <div key={key} className="card-list pr-15 py-20  m-15">
                      <div className="d-flex justify-content-start align-items-center">
                        <Radio
                          checked={this.state.selected === bankOption.cardValue}
                          onChange={this.onRadioChange}
                          value={bankOption.cardValue}
                          name="radio-button-demo"
                          aria-label={bankOption.bankLabel}
                          color="secondary"
                        />
                        <div className="text-center">
                          <a href="javascript:void(0);">
                            <img
                              src={bankOption.image}
                              alt="bank"
                              width="250"
                              height="49"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <Grid container spacing={0}>
                  <Grid item lg={5} className="mb-15">
                    <h6 className="mb-0">all banks</h6>
                    <div className="d-block">
                      <FormControl className="iron-select-width">
                        <InputLabel htmlFor="age-simple">
                          select option
                        </InputLabel>
                        <Select
                          required
                          autoComplete="current-value"
                          value={this.state.age}
                          onChange={this.optionChange}
                          inputProps={{
                            name: "age",
                            id: "age-simple"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>option 1</MenuItem>
                          <MenuItem value={20}>option 2</MenuItem>
                          <MenuItem value={30}>option 3</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <Button
                      onClick={() =>
                        this.props.finalPayment(this.props.history)
                      }
                      className="button btn-active my-20"
                    >
                      make payment
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabContainer>
          <TabContainer>
            <div className="d-bock">
              <div className="bg-secondary m-sm-20 p-sm-30 p-15">
                <div className="paypal-desc mb-20">
                  <span className="mr-10">PayPal</span>
                  <img
                    src={require("../../../../assets/images/paypal.png")}
                    alt="paypal"
                    height="52"
                    width="150"
                  />
                  <a href="https://www.paypal.com/in/home" className="ml-5">
                    What is PayPal ?
                  </a>
                </div>
                <div className="p-20 iron-payment-box bg-">
                  <p className="mb-0">
                    Pay via PayPal; you can pay with your credit card if you
                    don’t have a PayPal account. SANDBOX ENABLED. You can use
                    sandbox testing accounts only. See the{" "}
                    <a href="https://developer.paypal.com/docs/classic/lifecycle/ug_sandbox/">
                      PayPal Sandbox Testing Guide
                    </a>{" "}
                    for more details.
                  </p>
                </div>
                <Divider className="my-20" />
                <div className="text-right">
                  <Button
                    component={Link}
                    to="https://www.paypal.com/in/signin"
                    className="button btn-active btn-lg"
                  >
                    proceed to PayPal
                  </Button>
                </div>
              </div>
            </div>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = ({ ecommerce }) => {
  const { cart } = ecommerce;
  return { cart };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      finalPayment
    }
  )(PaymentTabs)
);
