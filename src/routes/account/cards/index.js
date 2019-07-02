/**
 * card detail
 */
import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


export default function UserCards() {

   return (
      <div className="card-wrapper">
         <div className="d-sm-flex justify-content-between align-items-center card-title">
            <h4>Saved Card Infomation</h4>
            <Button
               component={Link}
               to={{ pathname: "edit", search: "?type=add-card" }}
               className="button btn-active mb-sm-0 mb-10"
            >
               add new card
                </Button>
         </div>
         <Grid container spacing={32} className="my-0">
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
               <div className="iron-shadow p-15 rounded">
                  <h5>VISA -- Credit Card</h5>
                  <div className="pt-15">
                     <div className="saved-card-box mb-25">
                        <span>4545 4XXX XXX5 4545</span>
                     </div>
                     <Button
                        component={Link}
                        to={{ pathname: "edit", search: "?type=card" }}
                        className="button btn-active"
                     >
                        edit
                            </Button>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
               <div className="iron-shadow p-15 rounded">
                  <h5>MasterCard -- Debit Card</h5>
                  <div className="pt-15">
                     <div className="saved-card-box mb-25">
                        <span>8585 8XXX XXX5 8585</span>
                     </div>
                     <Button
                        component={Link}
                        to={{ pathname: "edit", search: "?type=card" }}
                        className="button btn-active"
                     >
                        edit
                            </Button>
                  </div>
               </div>
            </Grid>
         </Grid>
      </div>
   )
}