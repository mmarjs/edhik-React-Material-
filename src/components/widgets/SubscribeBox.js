/**
 * Subscribe us component
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";

function SubscribeBox() {

   return (
      <div>
         <Grid container spacing={0} className="iron-subscribebox-wrap">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
               <div>
                  <h3 className="base-color">Subscribe our Newsletter</h3>
                  <p className="base-color mb-0">Stay up to date with our latest new and products</p>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
               <div>
                  <form>
                     <div className="subscribe-form d-flex justify-content-between align-items-end">
                        <TextField
                           id="standard-name"
                           label="enter email address"
                           margin="normal"
                           className="subscribe-input"
                        />
                        <IconButton className="icon-btn">
                           <i className="material-icons">send</i>
                        </IconButton>
                     </div>
                  </form>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}

export default SubscribeBox;