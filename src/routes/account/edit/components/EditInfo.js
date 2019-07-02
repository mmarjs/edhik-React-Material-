/**
 * edit info component
 */
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Grid, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';


class EditInfo extends React.Component {

   state = {
      fields: {},
      errors: {},
      value: 'male'
   };

   /**
    * define function for form validation
   */
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
      //mobile
      if (!fields["mobile"]) {
         formIsValid = false;
         errors["mobile"] = "Cannot be empty";
      }

      if (typeof fields["mobile"] !== "undefined") {
         if (!fields["mobile"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["mobile"] = "Only letters";
         }
      }

      //location
      if (!fields["location"]) {
         formIsValid = false;
         errors["location"] = "Cannot be empty";
      }

      if (typeof fields["location"] !== "undefined") {
         if (!fields["location"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["location"] = "Only letters";
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

   genderChange = event => {
      this.setState({ value: event.target.value });
   };

   //define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   //define function for submit form 
   addUserFormSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         this.props.onSubmit();
      } else {
         alert("Form has errors.")
      }
   }

   render() {

      const thumb = require('../../../../assets/images/user-edit.png');

      return (
         <div className="profile-wrapper">
            <h4>Edit Profile Information</h4>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={12} md={6} lg={6}>
                  <form onSubmit={this.addUserFormSubmit.bind(this)}>
                     <div>
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
                        <FormControl component="fieldset" className="mb-20" >
                           <RadioGroup
                              aria-label="Gender"
                              name="gender1"
                              value={this.state.value}
                              onChange={this.genderChange}
                           >
                              <FormControlLabel value="male" control={<Radio />} label="Male" />
                              <FormControlLabel value="female" control={<Radio />} label="Female" />
                           </RadioGroup>
                        </FormControl>
                        <TextField
                           id="date"
                           label="Birth date"
                           type="date"
                           defaultValue="2017-05-24"
                           className="iron-form-input-wrap"
                           InputLabelProps={{
                              shrink: true,
                           }}
                        />
                        <TextField
                           id="standard-name"
                           label="mobile"
                           className="iron-form-input-wrap"
                           error={this.state.errors["mobile"]}
                           ref="mobile"
                           onChange={this.handleChange.bind(this, "mobile")}
                           value={this.state.fields["mobile"]}
                        />
                        <TextField
                           id="standard-name"
                           label="location"
                           className="iron-form-input-wrap"
                           error={this.state.errors["location"]}
                           ref="location"
                           onChange={this.handleChange.bind(this, "location")}
                           value={this.state.fields["location"]}
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
                     </div>
                     <Button type="submit" className="button btn-active mb-15">save</Button>
                  </form>
               </Grid>
               <Grid item md={6} lg={6} className="edit-window-thumb" style={{ backgroundImage: `url(${thumb})` }}>

               </Grid>
            </Grid>
         </div>
      )
   }
}

export default EditInfo;