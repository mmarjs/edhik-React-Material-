/**
 * features component
 */
/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';


function Features(props) {

   const { siteFeatures } = props;
   return (
      <div>
         <Grid container spacing={0} className="iron-features-v1 bg-base">
            {
               siteFeatures.map((siteFeature, index) => {
                  return (
                     <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4} className="iron-col">
                        <div className="iron-features-post p-20 px-sm-30 px-lg-50 pt-sm-30 pb-sm-25 d-md-flex justify-content-start align-items-center text-sm-left text-center ">
                           <div className="iron-features-thumb mr-sm-40 mb-md-0 mb-15">
                              <img src={require(`../../assets/images/${siteFeature.thumb}`)} alt="free-delivery" width="50" height="50" />
                           </div>
                           <div className="iron-features-content">
                              <h5 className="text-uppercase mb-0">
                                 {siteFeature.subtitle}
                              </h5>
                              <h6 className="mb-5">{siteFeature.title}</h6>
                              <span className="text-capitalize mb-0">{siteFeature.desc}</span>
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

export default Features;
