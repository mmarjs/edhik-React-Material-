/**
 * forget password Page 
 */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default class ForgetPassword extends Component {

   render() {
      return (
         <div className="iron-forgot-pwd-page">
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <Grid container spacing={0}>
                     <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                        <Grid container spacing={0} className="d-flex justify-content-center align-items-center">
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="forgot-password-image">
                              </div>
                           </Grid>
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="iron-forgot-pwd-form form-margin iron-shadow bg-base p-sm-25 py-20 px-15 rounded">
                                 <h3 className="active-color">Forgot Password?</h3>
                                 <h4 className="mb-5">No Problem</h4>
                                 <form>
                                    <div className="mb-30">
                                       <TextField
                                          required
                                          id="standard-email"
                                          label="enter your email"
                                          className="iron-form-input-wrap"
                                          type="email"
                                          autoComplete="current-email"
                                       />
                                    </div>
                                    <div className="mb-30">
                                       <TextField
                                          required
                                          id="standard-email"
                                          label="retype your email"
                                          className="iron-form-input-wrap"
                                          type="email"
                                          autoComplete="current-email"
                                       />
                                    </div>
                                    <Button type="submit" variant="contained" className="button btn-active btn-lg mb-15">
                                       submit
                                                </Button>
                                 </form>
                                 <span className="d-block text-14">
                                    If have an account then
                                                 <Link to="/sign-in"> Sign In</Link>
                                 </span>
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
