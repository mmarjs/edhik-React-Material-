/**
 * edit address component
 */
import React, { Fragment } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import ContentLoader from '../../../../components/global/loaders/ContentLoader';


export default class EditAddress extends React.Component {

   state = {
      fields: {},
      errors: {}
   };

   /**
    * define function for form validation
    */
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //address
      if (!fields["address"]) {
         formIsValid = false;
         errors["address"] = "Cannot be empty";
      }

      if (typeof fields["address"] !== "undefined") {
         if (!fields["address"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["address"] = "Only letters";
         }
      }

      //building name
      if (!fields["bname"]) {
         formIsValid = false;
         errors["bname"] = "Cannot be empty";
      }

      if (typeof fields["bname"] !== "undefined") {
         if (!fields["bname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["bname"] = "Only letters";
         }
      }

      //street
      if (!fields["street"]) {
         formIsValid = false;
         errors["street"] = "Cannot be empty";
      }

      if (typeof fields["street"] !== "undefined") {
         if (!fields["street"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["street"] = "Only letters";
         }
      }

      //state
      if (!fields["state"]) {
         formIsValid = false;
         errors["state"] = "Cannot be empty";
      }

      if (typeof fields["state"] !== "undefined") {
         if (!fields["state"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["state"] = "Only letters";
         }
      }

      //zip code
      if (!fields["zipCode"]) {
         formIsValid = false;
         errors["zipCode"] = "Cannot be empty";
      }

      if (typeof fields["zipCode"] !== "undefined") {
         if (!fields["zipCode"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["zipCode"] = "Only letters";
         }
      }

      //country
      if (!fields["country"]) {
         formIsValid = false;
         errors["country"] = "Cannot be empty";
      }

      if (typeof fields["country"] !== "undefined") {
         if (!fields["country"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["country"] = "Only letters";
         }
      }

      this.setState({ errors: errors });
      return formIsValid;
   }

   //define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   //define function for submit form 
   onAddressSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         this.props.onSubmit();
      } else {
         alert("Form has errors.")
      }
   }

   render() {

      const thumb = require('../../../../assets/images/billing-edit.png');
      const { type } = this.props;

      return (
         <Fragment>
            {type !== null ?
               <div className="profile-wrapper">
                  {type && type === '?type=address' ?
                     <h4>Edit billing Information</h4>
                     :
                     <h4>Edit shipping Information</h4>
                  }
                  <Grid container spacing={32}>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                        <form onSubmit={this.onAddressSubmit.bind(this)}>
                           <div>
                              <TextField
                                 id="standard-name"
                                 label="address"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["address"]}
                                 ref="address"
                                 onChange={this.handleChange.bind(this, "address")}
                                 value={this.state.fields["address"]}
                              />
                              <TextField
                                 id="standard-name"
                                 label="building name"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["bname"]}
                                 ref="bname"
                                 onChange={this.handleChange.bind(this, "bname")}
                                 value={this.state.fields["bname"]}
                              />
                              <TextField
                                 id="standard-name"
                                 label="street no"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["street"]}
                                 ref="street"
                                 onChange={this.handleChange.bind(this, "street")}
                                 value={this.state.fields["street"]}
                              />
                              <TextField
                                 id="standard-disabled"
                                 label="state"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["state"]}
                                 ref="state"
                                 onChange={this.handleChange.bind(this, "state")}
                                 value={"JHARKHAND"}
                              />
                              <TextField
                                 id="standard-name"
                                 label="zip code/pin code"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["zipCode"]}
                                 ref="zipCode"
                                 onChange={this.handleChange.bind(this, "zipCode")}
                                 value={this.state.fields["zipCode"]}
                              />
                              <TextField
                                 id="standard-disabled"
                                 label="country"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["country"]}
                                 ref="country"
                                 onChange={this.handleChange.bind(this, "country")}
                                 value={"INDIA"}
                              />
                           </div>
                           <Button type="submit" className="button btn-active mb-15">save</Button>
                        </form>
                     </Grid>
                     <Grid item md={6} lg={6} className="edit-window-thumb" style={{ backgroundImage: `url(${thumb})` }}>
                     </Grid>
                  </Grid>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}