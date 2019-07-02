/**
 * Sign up Page Page
 */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Done } from '@material-ui/icons';

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

   render() {
      return (
         <div className="iron-sign-up-page-wrap">
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <Grid container spacing={0}>
                     <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                        <Grid container spacing={0} className="d-flex justify-content-center align-items-center">
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="register-image">
                              </div>
                           </Grid>
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="iron-sign-up-form form-margin iron-shadow bg-base p-sm-25 py-20 px-15 rounded">
                                 <h4>Enter your details</h4>
                                 <form>
                                    <TextField
                                       required
                                       id="standard-phone"
                                       label="phone"
                                       className="iron-form-input-wrap"
                                       type="tel"
                                       autoComplete="current-name"
                                       InputProps={{
                                          maxLength: 10,
                                          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                        }}
                                    />
                                    <TextField
                                       required
                                       id="standard-otp"
                                       label="OTP"
                                       className="iron-form-input-wrap"
                                       type="text"
                                       InputProps={{
                                          maxLength: 6,
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              <Done style={{ fill: 'green' }} />
                                            </InputAdornment>
                                          ),
                                        }}
                                       // autoComplete="current-name"
                                    />
                                    <TextField
                                       required
                                       id="standard-password"
                                       label="password"
                                       className="iron-form-input-wrap"
                                       type="password"
                                       // autoComplete="current-email"
                                    />
                                    {/* <TextField
                                       required
                                       id="standard-password-input"
                                       label="Password"
                                       className="iron-form-input-wrap"
                                       type="password"
                                    //autoComplete="current-password"
                                    />
                                    <div className="mb-25">
                                       <TextField
                                          required
                                          id="standard-password-input"
                                          label="retype Password"
                                          className="iron-form-input-wrap"
                                          type="password"
                                          autoComplete="current-password"
                                       />
                                    </div> */}
                                    <Button type="submit" variant="contained" className="button btn-active btn-lg mb-10">
                                       sign up
                                                </Button>
                                 </form>
                                 <span className="text-14 text-capitalize pt-10 d-inline-block">already have an account ? then <Link to="/sign-in">sign in</Link></span>
                              </div>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </div>
            </div>
         </div>
      );
   }
}
