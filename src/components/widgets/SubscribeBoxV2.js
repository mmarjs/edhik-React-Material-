/**
 * subscribe box 2 component
 */
import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";/*  */

export default function SubscribeBoxV2() {
   return (
      <Fragment>
         <div className="center-icon">
            <i className="material-icons">check_box</i>
         </div>
         <div className="center-content px-sm-0 px-25">
            <div>
               <div>
                  <h3 className="base-color">Subscribe our Newsletter</h3>
                  <p className="base-color mb-0">Stay up to date with our latest new and products</p>
               </div>
               <div>
                  <form>
                     <div className="subscribe-form-v2 d-flex justify-content-between align-items-end">
                        <TextField
                           id="standard-name"
                           label="your email address"
                           margin="normal"
                           className="subscribe-input"
                        />
                        <IconButton className="icon-btn">
                           <i className="material-icons">send</i>
                        </IconButton>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </Fragment>
   )
}