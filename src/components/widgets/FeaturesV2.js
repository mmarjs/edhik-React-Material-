/**
 * featuresv2 component
 */
/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';

function FeaturesV2(props) {

   const { siteFeatures } = props;
   return (
      <div>
         <Grid container spacing={32} className="iron-features-v2 my-0">
            {
               siteFeatures.map((siteFeature, index) => {
                  return (
                     <Grid key={index} item xs={12} sm={12} md={4} lg={4} xl={4} className="iron-col py-0 mb-25 mb-md-0">
                        <div className="iron-features-post iron-shadow p-15 d-md-flex rounded">
                           <div className="iron-feature-icon py-md-0 py-15 mx-auto">
                              <span className="d-flex justify-content-center align-items-center"><i className="material-icons">{siteFeature.icon}</i></span>
                           </div>
                           <div className="iron-features-content pl-lg-25 pl-md-15 text-md-left text-center">
                              <h4 className="text-capitalization font-bold mb-10">
                                 {siteFeature.title}
                              </h4>
                              <p className="text-capitalize mb-5">{siteFeature.desc}</p>
                           </div>
                        </div>
                     </Grid>
                  )
               })
            }
         </Grid>
      </div>
   )
}

export default FeaturesV2;
