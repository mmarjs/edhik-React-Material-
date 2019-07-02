/**
 * product review component
 */
/* eslint-disable */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Divider, TextField } from '@material-ui/core';

//components
import RatingStar from '../../widgets/RatingStar';

class ProductReview extends React.Component {
   state = {
      open: false,
   };

   //Define function for open review dialog box
   open = () => {
      this.setState({ open: true });
   };

   //Define function for close review dialog box
   close = () => {
      this.setState({ open: false });
   };

   render() {

      return (
         <Dialog
            open={this.state.open}
            onClose={this.close}
            aria-labelledby="responsive-dialog-title"
            className="iron-review-dialog"
         >
            <DialogContent>
               <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={7} lg={6}>
                     <div>
                        <h4 className="primary-color mb-10">Blue Jean</h4>
                        <p className="mb-30"> Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!</p>
                        <RatingStar />
                        <h5>3 Reviews</h5>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={6} className="text-right">
                     <Button onClick={this.close} className="button btn-active btn-lg">
                        add later
                        </Button>
                  </Grid>
               </Grid>
               <Divider className="my-20" />
               <Grid container spacing={32} className="my-0 mt-40">
                  <Grid item xs={12} sm={12} md={7} lg={6} className="py-0">
                     <div>
                        <ul className="iron-user-list-wrap">
                           <li className="user-list-item d-block">
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={2} lg={2} >
                                    <img src={require("../../../assets/images/user-1.jpg")} width="90" alt="Review user" />
                                 </Grid>
                                 <Grid item xs={12} sm={12} md={10} lg={10} className="pl-md-30">
                                    <div>
                                       <h6 className="mb-10">James Hann</h6>
                                       <div className="star"></div><span>a Month Ago</span>
                                       <p className="mb-0">I love the way it has delivered to me and after using ,i just wanna say one word that is awesome</p>
                                    </div>
                                 </Grid>
                              </Grid>
                           </li>
                           <li className="user-list-item d-block">
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={2} lg={2} >
                                    <img src={require("../../../assets/images/user-3.jpg")} width="90" alt="Review user" />
                                 </Grid>
                                 <Grid item xs={12} sm={12} md={10} lg={10} className="pl-md-30">
                                    <div>
                                       <h6 className="mb-10">rose johnson</h6>
                                       <div className="star"></div><span>a Month Ago</span>
                                       <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</p>
                                    </div>
                                 </Grid>
                              </Grid>
                           </li>
                           <li className="user-list-item d-block">
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={2} lg={2}>
                                    <img src={require("../../../assets/images/user-2.jpg")} width="90" alt="Review user" />
                                 </Grid>
                                 <Grid item xs={12} sm={12} md={10} lg={10} className="pl-md-30">
                                    <div>
                                       <h6 className="mb-10">peter </h6>
                                       <div className="star"></div><span>a Month Ago</span>
                                       <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</p>
                                    </div>
                                 </Grid>
                              </Grid>
                           </li>
                        </ul>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={6} className="py-0">
                     <div className="pb-md-0 pb-30">
                        <h4 className="mb-0">rate and review</h4>
                        <form autoComplete="off">
                           <TextField
                              id="standard-name"
                              label="your name"
                              className="iron-form-input-wrap mb-15"
                           />
                           <TextField
                              id="standard-multiline-flexible"
                              label="write review"
                              multiline
                              rowsMax="4"
                              className="iron-form-input-wrap"
                           />
                           <Button type="submit" className="button btn-active btn-lg mt-10">post review</Button>
                        </form>
                     </div>
                  </Grid>
               </Grid>
            </DialogContent>
         </Dialog>
      );
   }
}

export default ProductReview;