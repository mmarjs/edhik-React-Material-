/**
 * thankyou Page Page
 */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

//component
import SocialIcons from '../../../components/widgets/SocialIcons';

export default class ThankYou extends Component {
   render() {
      return (
         <div className="iron-thank-you-page-wrap">
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <Grid container spacing={0}>
                     <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                        <div className="thank-you-image text-center">
                           <h2 className="base-color">Thank You</h2>
                        </div>
                        <Grid container spacing={0}>
                           <Grid item xs={12} sm={12} md={6} lg={6} className="mx-auto">
                              <div className="iron-shadow bg-base text-center rounded p-sm-25 py-20 px-15 thank-you-card">
                                 <h4 className="px-15 mb-25">For every thing you had done with embryo</h4>
                                 <Divider />
                                 <p className="pt-25">Spread The Word</p>
                                 <div className="mb-25">
                                    <SocialIcons></SocialIcons>
                                 </div>
                                 <Button variant="contained" className="button btn-active btn-lg mb-15">
                                    Buy embryo Now
                                            </Button>
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
