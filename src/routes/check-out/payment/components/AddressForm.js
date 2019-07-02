import React from 'react';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



class AddressForm extends React.Component {

   state = {
      fields: {},
      errors: {}
   };

   //handle form validation
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FName
      if (!fields["fname"]) {
         formIsValid = false;
         errors["fname"] = "Cannot be empty";
      }

      if (typeof fields["fname"] !== "undefined") {
         if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["fname"] = "Only letters";
         }
      }

      //LName
      if (!fields["lname"]) {
         formIsValid = false;
         errors["lname"] = "Cannot be empty";
      }

      if (typeof fields["lname"] !== "undefined") {
         if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["lname"] = "Only letters";
         }
      }

      //street name or num.
      if (!fields["street"]) {
         formIsValid = false;
         errors["street"] = "Cannot be empty";
      }

      if (typeof fields["street"] !== "undefined") {
         if (!fields["street"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["street"] = "Only letters and numbers";
         }
      }

      //apt-building Name
      if (!fields["aptname"]) {
         formIsValid = false;
         errors["aptname"] = "Cannot be empty";
      }

      if (typeof fields["aptname"] !== "undefined") {
         if (!fields["aptname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["aptname"] = "Only letters";
         }
      }
      //zip code
      if (!fields["zipcode"]) {
         formIsValid = false;
         errors["zipcode"] = "Cannot be empty";
      }

      if (typeof fields["zipcode"] !== "undefined") {
         if (!fields["zipcode"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["zipcode"] = "not a valid zip-code";
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

      //mobile num.
      if (!fields["mobile"]) {
         formIsValid = false;
         errors["mobile"] = "Cannot be empty";
      }

      if (typeof fields["mobile"] !== "undefined") {
         if (!fields["mobile"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["mobile"] = "number is not valid";
         }
      }


      //Email
      if (!fields["email"]) {
         formIsValid = false;
         errors["email"] = "Cannot be empty";
      }

      if (typeof fields["email"] !== "undefined") {
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
         }
      }

      this.setState({ errors: errors });
      return formIsValid;
   }

   handleChange(field, e) {

      let fields = this.state.fields;
      fields[field] = e.target.value;
      //console.log(fields);
      this.setState({ fields });

   }

   onAddressFormSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         localStorage.setItem('stepOneFormData', JSON.stringify(this.state.fields));
         

      } else {
         alert("Form has errors.")
      }
   }

   render() {
      return (
         <form onSubmit={this.onAddressFormSubmit.bind(this)}>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="first Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["fname"]}
                     ref="fname"
                     onChange={this.handleChange.bind(this, "fname")}
                     value={this.state.fields["fname"] ? this.state.fields["fname"] : ''}
                  />
                  <span className="error">{this.state.errors["fname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="last Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["lname"]}
                     ref="lname"
                     onChange={this.handleChange.bind(this, "lname")}
                     value={this.state.fields["lname"] ? this.state.fields["lname"] : ''}
                  />
                  <span className="error">{this.state.errors["lname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="Street Name or Number"
                     className="iron-form-input-wrap"
                     error={this.state.errors["street"]}
                     ref="street"
                     onChange={this.handleChange.bind(this, "street")}
                     value={this.state.fields["street"] ? this.state.fields["street"] : ''}
                  />
                  <span className="error">{this.state.errors["street"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="Apt Building Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["aptname"]}
                     ref="aptname"
                     onChange={this.handleChange.bind(this, "aptname")}
                     value={this.state.fields["aptname"] ? this.state.fields["aptname"] : ''}
                  />
                  <span className="error">{this.state.errors["aptname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="zip code"
                     className="iron-form-input-wrap"
                     error={this.state.errors["zipcode"]}
                     ref="zipcode"
                     onChange={this.handleChange.bind(this, "zipcode")}
                     value={this.state.fields["zipcode"] ? this.state.fields["zipcode"] : ''}
                  />
                  <span className="error">{this.state.errors["zipcode"]}</span>
               </Grid>

               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-disabled"
                     label="city and state"
                     className="iron-form-input-wrap"
                     error={this.state.errors["state"]}
                     ref="state"
                     onChange={this.handleChange.bind(this, "state")}
                     value={"JHARKHAND"}
                  />
                  <span className="error">{this.state.errors["state"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-disabled"
                     label="country"
                     className="iron-form-input-wrap"
                     error={this.state.errors["country"]}
                     ref="country"
                     onChange={this.handleChange.bind(this, "country")}

                     value={"INDIA"}
                  />
                  <span className="error">{this.state.errors["country"]}</span>
               </Grid>
            </Grid>
            <h4 className="mb-0 mt-40">enter your contact information</h4>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="mobile no"
                     className="iron-form-input-wrap"
                     error={this.state.errors["mobile"]}
                     ref="mobile"
                     onChange={this.handleChange.bind(this, "mobile")}
                     value={this.state.fields["mobile"] ? this.state.fields["mobile"] : ''}
                  />
                  <span className="error">{this.state.errors["mobile"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-email"
                     label="email"
                     className="iron-form-input-wrap"
                     error={this.state.errors["email"]}
                     refs="email"
                     onChange={this.handleChange.bind(this, "email")}
                     value={this.state.fields["email"] ? this.state.fields["email"] : ''}
                  />
                  <span className="error">{this.state.errors["email"]}</span>
               </Grid>
            </Grid>
            <Grid container spacing={0} className="mt-20">
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h4 className="mb-5">Share with other?</h4>
                  <p className="mb-10">If you want to share order and shipping details with someone else then enter the email of that person. We will send order updates to this email also.</p>
                  <TextField
                     fullWidth
                     id="standard-email"
                     label="email"
                     className="iron-form-input-wrap"
                  />
                  <span className="error">{this.state.errors["refemail"]}</span>
               </Grid>
            </Grid>
            <Button className="button btn-active btn-lg mb-40 mt-15" type="submit">continue to payment</Button>
         </form>
      )
   }
}



export default AddressForm;