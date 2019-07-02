/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Divider, Radio } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//offer card content
let offerCoupons = [
   {
      couponName: 'Visa Mega Shopping Offer',
      cardType: 'Debit Card',
      cardValue: 'a',
      offerLabel: 'A'
   },
   {
      couponName: 'American Express 20% Flat',
      cardType: 'Credit Card',
      cardValue: 'b',
      offerLabel: 'B'
   },
   {
      couponName: 'BOA Buy 1 Get One Offer',
      cardType: 'Debit Card',
      cardValue: 'c',
      offerLabel: 'C'
   },
   {
      couponName: 'Mastercard Elite Card',
      cardType: 'Master Card',
      cardValue: 'd',
      offerLabel: 'D'
   },
   {
      couponName: 'Visa Mega Shopping Offer',
      cardType: 'Debit Card',
      cardValue: 'e',
      offerLabel: 'E'
   }
]

function TabContainer({ children, dir }) {
   return (
      <Typography component="div" dir={dir} >
         {children}
      </Typography>
   );
}

class OffersCode extends React.Component {

   state = {
      value: 0,
      selected: 'a',
      age: ''
   };

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

   render() {

      return (
         <div>
            <AppBar position="static" color="default" className="bg-base box-shadow-none iron-tab-bar">
               <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  className="bg-base color-grey button-scroll-hide"
               >
                  <Tab label="offer code" />
                  <Tab label="credit/debit/netBanking" />
               </Tabs>
            </AppBar>
            <SwipeableViews
               axis={'x'}
               index={this.state.value}
               onChangeIndex={this.handleChangeIndex}
               animateHeight
            >
               <TabContainer>
                  <div>
                     <div className="header-mat-tab bg-secondary text-center p-15 pt-50">
                        <div className="mb-25">
                           <img alt="discount" src={require("../../../../assets/images/discount.png")} />
                        </div>
                        <h4 className="mb-50">Apply for embryo offer/Discount</h4>
                     </div>
                     <form>
                        <div>
                           <Grid container spacing={0}>
                              <Grid item xs={12} sm={12} md={5} lg={4} className="mx-auto text-center">
                                 <div className="pt-60 pb-20">
                                    <div className="mb-20 iron-coupon-form d-flex justify-content-center align-items-center">
                                       <TextField
                                          id="standard-name"
                                          placeholder="enter code"
                                       />
                                       <Button className="button p-0" onClick={this.props.open}>
                                          <i className="material-icons">send</i>
                                       </Button>
                                    </div>
                                    <p className="mb-0">*Only Valid coupon or offer code is acceptable.</p>
                                    <p className="mb-0">To know your coupon valid or not click
                                                <a href="javascript:void()"> here</a>
                                    </p>
                                 </div>
                              </Grid>
                           </Grid>
                        </div>
                     </form>
                  </div>
               </TabContainer>
               <TabContainer>
                  <div>
                     <div className="header-mat-tab bg-secondary text-center p-15 py-50">
                        <div className="mb-25">
                           <img alt="card" src={require("../../../../assets/images/card.png")} />
                        </div>
                        <h4>Apply for card offers</h4>
                     </div>
                     <Divider />
                     <div className="py-60 iron-card-radio text-center">
                        {offerCoupons.map((offerCoupon, key) => {
                           return (
                              <div key={key} className="card-list pr-15 py-20 m-15">
                                 <div className="d-flex justify-content-start align-items-center">
                                    <Radio
                                       checked={this.state.selected === offerCoupon.cardValue}
                                       onChange={this.onRadioChange}
                                       value={offerCoupon.cardValue}
                                       name="radio-button-demo"
                                       aria-label={offerCoupon.offerLabel}
                                       color="secondary"
                                    />
                                    <div className="text-center">
                                       <span className="font-bold"> {offerCoupon.couponName}</span>
                                       <p className="mb-0">{offerCoupon.cardType}</p>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                     <Divider />
                     <div className="text-center">
                        <Grid container spacing={0}>
                           <Grid item xs={12} sm={12} md={5} lg={3} className="mx-auto mb-15">
                              <h4 className="pt-40">select offer name</h4>
                              <form autoComplete="off">
                                 <FormControl className="iron-select-width">
                                    <InputLabel htmlFor="age-simple">select option</InputLabel>
                                    <Select
                                       value={this.state.age}
                                       onChange={this.optionChange}
                                       inputProps={{
                                          name: 'age',
                                          id: 'age-simple',
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
                              </form>
                           </Grid>
                        </Grid>
                     </div>
                  </div>
               </TabContainer>
            </SwipeableViews>
         </div>
      );
   }
}


export default OffersCode;