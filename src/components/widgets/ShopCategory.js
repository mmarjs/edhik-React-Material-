/**
 * shop category component
 */
/* eslint-disable */
import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

export default function ShopCategory(props) {

   const { shopCategory } = props
   return (
      <Grid container spacing={32} className="iron-post-grid-wrap my-0">
         {shopCategory.map((category, index) => (
            <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={3} className="py-0 mb-md-0 mb-25">
               <Card className="iron-post-item iron-overlay-wrap overflow-hidden ">
                  <Link to={category.path} className="iron-post-thumb">
                     <CardMedia
                        image={category.thumb}
                        component="img"
                     />
                  </Link>
                  <div className="iron-overlay-content d-flex align-items-end">
                     <div className="iron-overlay-holder">
                        <h4 className="mb-10"><Link to={category.path} className="base-color">{category.title}</Link></h4>
                        <p className="mb-0 base-color">{category.total}</p>
                     </div>
                  </div>
               </Card>
            </Grid>
         ))}
      </Grid>
   )
}