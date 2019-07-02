/**
 * Contact Us Page
 */
/* eslint-disable */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// page title bar
import PageTitle from '../../components/widgets/PageTitle.js';

//component
import GoogleMap from '../../components/widgets/GoogleMap.js';
import ContactForm from '../../components/global/forms/ContactForm.js';


export default class ContactUs extends Component {

   render() {
      return (
         <div>
            <PageTitle
               title="contact us"
               desc="Share your feedback with us."
            />
            <div className="inner-container">
               <div className="iron-contact-page">
                  <div className="iron-contact-map" style={{ height: '400px', width: '100%' }}>
                     <GoogleMap></GoogleMap>
                  </div>
                  <div className="iron-contact-info-wrap section-pad">
                     <div className="container">
                        <Grid container spacing={32}>
                           <Grid item lg={5}>
                              <div className="block-title mb-30">
                                 <h2 className=" mb-60">Contact Info</h2>
                                 <h5 className="font-italic mb-20">If you have any problems,suggestions and feedback
												then please feel free to contact with us. Choose our communication soruces. We
												will love to hear from you.</h5>
                              </div>
                              <div className="mb-25">
                                 <h3>Call</h3>
                                 <a href="tel:+12390394903">+123 90394903</a>
                              </div>
                              <div className="mb-25">
                                 <h3>Mail</h3>
                                 <a href="mailto:support@theironnetwork.org">support@theironnetwork.org</a>
                              </div>
                              <div className="mb-25">
                                 <h3>Address</h3>
                                 <p> 1899 Cemetery Street,MEDFORD - 1452451 New York</p>
                              </div>
                           </Grid>
                           <Grid item lg={7}>
                              <div className="contact-form-inner">
                                 <div className="block-title mb-50">
                                    <h2>Write to us</h2>
                                 </div>
                                 <ContactForm />
                              </div>
                           </Grid>
                        </Grid>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

