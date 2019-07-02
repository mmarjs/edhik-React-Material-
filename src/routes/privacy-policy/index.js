/**
 * Privacy Policy Page
 */
import React, { Component } from 'react';

// page title bar
import PageTitle from '../../components/widgets/PageTitle.js';

//component
import RctCard from '../../components/global/rct-card';

export default class PrivacyPolicy extends Component {

   render() {
      return (
         <div className="iron-privacy-policy-page-wrap">
            <PageTitle
               title="privacy policy"
               desc="Your information is fully secure with us."
            />
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <div className="iron-privacy-policy">
                     <RctCard>
                        <h4>What type of information we gathered on our site</h4>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit,temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.
                                </p>
                     </RctCard>
                     <RctCard>
                        <h4>Are our payments and cards information secured?</h4>
                        <p className="mb-0">
                           Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde
                           necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur,adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet
                           consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.
                                </p>
                     </RctCard>
                     <RctCard>
                        <h4>Are we give information of user to ad agenices?</h4>
                        <p className="mb-0">
                           Rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.
                                </p>
                     </RctCard>
                     <RctCard>
                        <h4 className="mb-3">If you have any Legal issue or dispute then contact the following:</h4>
                        <h5>Address:</h5>
                        <p>
                           103,Grand Ways Road <br />
                           Necholim City <br />
                           New York
                                </p>

                        <h5>Email:</h5>
                        <p>email@emaillorem.com</p>

                        <h5>Contact No.</h5>
                        <div>
                           <p>123789-839 00</p>
                           <p className="mb-0">123789-839 00</p>
                        </div>
                     </RctCard>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

