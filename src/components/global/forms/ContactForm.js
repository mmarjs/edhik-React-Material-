/**
 * contact us form component
 */
/* eslint-disable */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ContactForm extends React.Component {
   state = {
      fields: {},
      errors: {}
   };

   //define function for form validation
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FirstName
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

      //LastName
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

      //subject
      if (!fields["subject"]) {
         formIsValid = false;
         errors["subject"] = "Cannot be empty";
      }

      if (typeof fields["subject"] !== "undefined") {
         if (!fields["subject"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["subject"] = "Only letters";
         }
      }

      //message
      if (!fields["message"]) {
         formIsValid = false;
         errors["message"] = "Cannot be empty";
      }

      if (typeof fields["message"] !== "undefined") {
         if (!fields["message"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["message"] = "Only letters";
         }
      }


      this.setState({ errors: errors });
      return formIsValid;
   }

   //Define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   //Define function for submit form 
   onAddressFormSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         this.props.onSubmit();
      } else {
         alert("Form has errors.")
      }
   }

   render() {
      return (
         <form onSubmit={this.onAddressFormSubmit.bind(this)}>
            <TextField
               id="standard-name"
               label="first Name"
               className="iron-form-input-wrap"
               error={this.state.errors["fname"]}
               ref="fname"
               onChange={this.handleChange.bind(this, "fname")}
               value={this.state.fields["fname"]}
            />
            <TextField
               id="standard-name"
               label="last Name"
               className="iron-form-input-wrap"
               error={this.state.errors["lname"]}
               ref="lname"
               onChange={this.handleChange.bind(this, "lname")}
               value={this.state.fields["lname"]}
            />
            <TextField
               id="standard-email"
               label="email"
               className="iron-form-input-wrap"
               error={this.state.errors["email"]}
               refs="email"
               onChange={this.handleChange.bind(this, "email")}
               value={this.state.fields["email"]}
            />
            <TextField
               id="standard-name"
               label="subject"
               className="iron-form-input-wrap"
               error={this.state.errors["subject"]}
               ref="subject"
               onChange={this.handleChange.bind(this, "subject")}
               value={this.state.fields["subject"]}
            />
            <TextField
               id="standard-multiline-static"
               label="leave a message"
               multiline
               rows="3"
               className="iron-form-input-wrap"
               error={this.state.errors["message"]}
               ref="message"
               onChange={this.handleChange.bind(this, "message")}
               value={this.state.fields["message"]}
            />
            <Button type="submit" variant="contained" className="button btn-active btn-lg mt-25">
               send message
                </Button>
         </form>
      )
   }
}