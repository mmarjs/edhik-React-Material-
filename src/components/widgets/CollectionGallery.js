/**
 * collection gallery component
 */
/* eslint-disable */
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CollectionGallery(props) {

   const { popular, gallery } = props.collectionData;
   return (
      <div>
         <Grid container spacing={32}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
               <div
                  className="iron-gallery-item popular-item overlay-section-overlay position-relative"
                  style={{ backgroundImage: 'url(' + require(`../../assets/images/${popular.thumb}`) + ')' }}
               >
                  <div className="end-left">
                     <div className="overlay-section-content">
                        <h4 className="mb-0 font-bold base-color">{popular.title}</h4>
                        <h4 className="font-normal base-color">{popular.offer}</h4>
                        <Button component={Link} to={popular.path} className="button btn-base">shop now</Button>
                     </div>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} >
               <Grid container spacing={32}>
                  {gallery.map((collection, index) => (
                     <Grid item xs={12} sm={6} md={6} lg={6} key={index} >
                        <div
                           className="iron-gallery-item overlay-section-overlay position-relative"
                           style={{ backgroundImage: 'url(' + require(`../../assets/images/${collection.thumb}`) + ')' }}
                        >
                           <div className={collection.alignContent}>
                              <div className="overlay-section-content">
                                 <h4 className="mb-0 font-bold base-color">{collection.title}</h4>
                                 <h4 className="font-normal base-color">{collection.offer}</h4>
                                 <Button component={Link} to={collection.path} className="button btn-base">shop now</Button>
                              </div>
                           </div>
                        </div>
                     </Grid>
                  ))
                  }
               </Grid>
            </Grid>
         </Grid>
      </div>
   )
}