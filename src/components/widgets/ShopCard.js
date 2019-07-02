/**
 * lightening deals component
 */
/* eslint-disable */
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function ShopCard(props) {

   const { deals } = props;
   return (
      <div className="shop-card-gap px-25">
         <Grid container spacing={32}>
            {deals.map((deal, index) => (
               < Grid item key={index} xs={12} sm={6} md={3} lg={3} >
                  <Card className="p-25 iron-shop-item iron-shadow hover-box-shadow">
                     <Link to={deal.path} className='d-block'>
                        <CardMedia
                           height="140"
                           component="img"
                           image={deal.thumb}
                        />
                     </Link>
                     <CardContent className="iron-product-content pt-20 p-0 border">
                        <h5 className="text-truncate mb-10"><Link to={deal.path}>{deal.title}</Link></h5>
                        <p className="mb-15"><Link to={deal.path} className="secondary-color">{deal.subtitle}</Link></p>
                        <p className="mb-0 active-color">{deal.offer}</p>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </div>
   )
}