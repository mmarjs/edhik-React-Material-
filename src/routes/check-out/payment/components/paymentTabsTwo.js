import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
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
import './payment_tabs.scss'
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

export default class PaymentTabstwo extends React.Component {
  state = { 
      activeIndex: 0,
      creditCardInfo: {
        number: "",
        holderName: "",
        expiryDate: "",
        focused: ""
      }
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

  handleChange = (_, activeIndex) => this.setState({ activeIndex });
  render() {
    const { creditCardInfo } = this.state;
    const { activeIndex } = this.state;
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <VerticalTabs className="tabs_custom_width" value={activeIndex} onChange={this.handleChange}>
          <Tab classes={{
              root:"payment_custom_tab",
              selected:"payment_custom_tab active"
          }} label="Order by COD" />
          <Tab classes={{
              root:"payment_custom_tab",
              selected:"payment_custom_tab active"
          }} label="Credit/Debit Card" />
          <Tab classes={{
              root:"payment_custom_tab",
              selected:"payment_custom_tab active"
          }} label="Netbanking" />
        </VerticalTabs>

        {activeIndex === 0 &&
            <div className="tabs_custom_container">
                 <Button
                component={Link}
                to="/"
                className="button btn-active btn-lg"
              >
                ORDER By COD
              </Button>
            </div>
        }
        {activeIndex === 1 &&
            <div className="tabs_custom_container">
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
            </div>
        }
        {activeIndex === 2 && 
            <div className="tabs_custom_container">
                <div className="d-bock">
                <div className="header-mat-tab bg-secondary text-center">
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
            </div>
        } 
      </div>
    );
  }
}
const TextMaskCustom = props => {
    const { inputRef, ...other } = props;
    return <MaskedInput {...other} mask={[/\d/, /\d/, "/", /\d/, /\d/]} />;
  };
  const TextCVC = props => {
    const { inputRef, ...other } = props;
    return <MaskedInput {...other} mask={[/\d/, /\d/, /\d/, /\d/]} />;
  };
  
const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const MyTab = (Tab);


