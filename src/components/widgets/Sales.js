/**
 * sale section component
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';

function Sales() {

   return (
      <div>
         <Grid container spacing={0} className="iron-sales-grid-wrap">
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="iron-col">
               <div className="iron-post-item">
                  <Link to="/shop" className="d-block">
                     <CardActionArea>
                        <div className="iron-overlay-wrap">
                           <div className="iron-thumb-wrap">
                              <img src={require("../../assets/images/sale-1.jpg")} width="640" height="430" alt="SaleCallInAction" />
                           </div>
                           <div className="iron-overlay-content primary-rgba d-flex justify-content-center align-items-center">
                              <div className="iron-overlay-holder text-center">
                                 <h2> Sale</h2>
                                 <h5 className="mb-10"> Women's Collection</h5>
                                 <h3> 50% Off</h3>
                              </div>
                           </div>
                        </div>
                     </CardActionArea>
                  </Link>
               </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="iron-col">
               <div className="iron-post-item">
                  <Link to="/shop" className="d-block">
                     <CardActionArea>
                        <div className="iron-overlay-wrap">
                           <div className="iron-thumb-wrap">
                              <img src={require("../../assets/images/sale-2.jpg")} width="640" height="430" alt="SaleCallInAction" />
                           </div>
                           <div className="iron-overlay-content black-rgba d-flex justify-content-center align-items-center">
                              <div className="iron-overlay-holder text-center">
                                 <h6> new Arrival</h6>
                                 <h2>flat 50</h2>
                                 <h5> Discount</h5>
                              </div>
                           </div>
                        </div>
                     </CardActionArea>
                  </Link>

               </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="iron-col">
               <div className="iron-post-item">
                  <Link to="/shop" className="d-block">
                     <CardActionArea>
                        <div className="iron-overlay-wrap">
                           <div className="iron-thumb-wrap">
                              <img src={require("../../assets/images/sale-3.jpg")} width="640" height="430" alt="SaleCallInAction" />
                           </div>
                           <div className="iron-overlay-content pink-rgba d-flex justify-content-center align-items-center">
                              <div className="iron-overlay-holder text-center">
                                 <h2> Sale</h2>
                                 <h5 className="mb-10"> Men's Collection</h5>
                                 <h3> 50% Off</h3>
                              </div>
                           </div>
                        </div>
                     </CardActionArea>
                  </Link>
               </div>
            </Grid>
         </Grid>
      </div>
   )
}

export default Sales;