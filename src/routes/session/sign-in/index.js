/**
 * Sign In Page
 */
import React, { Component } from 'react';
// import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import './signin.scss'

//component
import SignInTwo from '../../../components/global/forms/SignInTwo';

const DialogContent = withStyles(theme => ({
   root: {
     margin: 0,
     padding: theme.spacing.unit * 2
   }
 }))(MuiDialogContent);
 

export default class SignInPage extends Component {
   state={
      open:true,
   }
   handleClickOpen = () => {
      this.setState({
        open: true
      });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
   render() {
      return (
         <div className="iron-sign-in-page-wrap">
            <div className="inner-container section-pad bg-base">
               <div className="container">
               <Dialog
               classes={{
                  container:"sign_in_modal_container",
                  paper:"sign_in_modal",
                  paperScrollBody:"sign_in_body"
               }}
               disableBackdropClick={true}
               aria-labelledby="customized-dialog-title"
               open={this.state.open}>
                  {this.state.open ? (
                     <IconButton
                     aria-label="Close"
                     className={"closeButton"}
                     onClick={this.handleClose}
                     >
                     <CloseIcon />
                     </IconButton>
                  ) : null}
                  <DialogContent>
                     <div className="image_sign_in"></div>
                     <div className="form_modal">
                        <SignInTwo/>
                     </div>
                  </DialogContent> 
               </Dialog>
               </div>
            </div>
         </div>
      );
   }
}
