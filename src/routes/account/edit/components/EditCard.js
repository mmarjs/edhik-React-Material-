/**
 * edit card component
 */
import React, { Fragment } from 'react';
import { Grid, Button } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ContentLoader from '../../../../components/global/loaders/ContentLoader';


export default class EditCard extends React.Component {

   state = {
      fields: {},
      errors: {},
      variations: {
         month: '',
         year: ''
      }
   };

   /**
    * function for card validity
    */
   cardExpiryDate(type, e) {
      this.setState({
         variations: {
            ...this.state.variations,
            [type]: e.target.value
         }
      })
   }

   /**
    * define function for form validation
    */
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //card No
      if (!fields["cardNo"]) {
         formIsValid = false;
         errors["cardNo"] = "Cannot be empty";
      }

      if (typeof fields["cardNo"] !== "undefined") {
         if (!fields["cardNo"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["cardNo"] = "Only letters";
         }
      }

      //cvv
      if (!fields["cvv"]) {
         formIsValid = false;
         errors["cvv"] = "Cannot be empty";
      }

      if (typeof fields["cvv"] !== "undefined") {
         if (!fields["cvv"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["cvv"] = "Only letters";
         }
      }

      //name on card
      if (!fields["cardName"]) {
         formIsValid = false;
         errors["cardName"] = "Cannot be empty";
      }

      if (typeof fields["cardName"] !== "undefined") {
         if (!fields["cardName"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["cardName"] = "Only letters";
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
   onCardSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         this.props.onSubmit();
      } else {
         alert("Form has errors.")
      }
   }

   render() {

      const thumb = require('../../../../assets/images/card-edit.png');
      const { type } = this.props;

      return (
         <Fragment>
            {type !== null ?
               <div className="card-wrapper">
                  {type && type === '?type=card' ?
                     <h4>Edit card Information</h4>
                     :
                     <h4>add card Information</h4>
                  }
                  <Grid container spacing={32}>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                        <form onSubmit={this.onCardSubmit.bind(this)}>
                           <Grid container spacing={32}>
                              <Grid item xs={12} sm={6} md={6} lg={6}>
                                 <TextField
                                    id="standard-name"
                                    label="card number"
                                    className="iron-form-input-wrap"
                                    error={this.state.errors["cardNo"]}
                                    ref="cardNo"
                                    onChange={this.handleChange.bind(this, "cardNo")}
                                    value={this.state.fields["cardNo"]}
                                 />
                              </Grid>
                              <Grid item xs={12} sm={6} md={6} lg={6}>
                                 <TextField
                                    id="standard-name"
                                    label="CVV"
                                    className="iron-form-input-wrap"
                                    error={this.state.errors["cvv"]}
                                    ref="cvv"
                                    onChange={this.handleChange.bind(this, "cvv")}
                                    value={this.state.fields["cvv"]}
                                 />
                              </Grid>
                              <Grid item xs={12} sm={12} md={12} lg={12} className="pb-0">
                                 <TextField
                                    id="standard-name"
                                    label="name on card"
                                    className="iron-form-input-wrap"
                                    error={this.state.errors["cardName"]}
                                    ref="cardName"
                                    onChange={this.handleChange.bind(this, "cardName")}
                                    value={this.state.fields["cardName"]}
                                 />
                              </Grid>
                              <Grid item xs={12} sm={12} md={12} lg={12} className="mb-30">
                                 <span className="mb-15 d-block secondary-color text-14 font-normal text-capitalize">expiry date</span>
                                 <div className="d-lg-flex d-md-block d-sm-flex justify-content-start align-items-center mb-5">
                                    <div className="mr-15">
                                       <FormControl className="iron-select-width2">
                                          <InputLabel htmlFor="age-simple">month</InputLabel>
                                          <Select
                                             value={this.state.variations.month}
                                             onChange={(e) => this.cardExpiryDate('month', e)}
                                             inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                             }}
                                          >
                                             <MenuItem className="selector-link" value={'January'}>January</MenuItem>
                                             <MenuItem className="selector-link" value={'february'}>february</MenuItem>
                                             <MenuItem className="selector-link" value={'march'}>march</MenuItem>
                                             <MenuItem className="selector-link" value={'april'}>april</MenuItem>
                                             <MenuItem className="selector-link" value={'may'}>may</MenuItem>
                                             <MenuItem className="selector-link" value={'june'}>june</MenuItem>
                                             <MenuItem className="selector-link" value={'July'}>July</MenuItem>
                                             <MenuItem className="selector-link" value={'august'}>august</MenuItem>
                                             <MenuItem className="selector-link" value={'september'}>september</MenuItem>
                                             <MenuItem className="selector-link" value={'october'}>october</MenuItem>
                                             <MenuItem className="selector-link" value={'november'}>november</MenuItem>
                                             <MenuItem className="selector-link" value={'december'}>december</MenuItem>
                                          </Select>
                                       </FormControl>
                                    </div>
                                    <div>
                                       <FormControl className="iron-select-width2" >
                                          <InputLabel htmlFor="age-simple">year</InputLabel>
                                          <Select
                                             value={this.state.variations.year}
                                             onChange={(e) => this.cardExpiryDate('year', e)}
                                             inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                             }}
                                          >
                                             <MenuItem className="selector-link" value={'2019'}>2019</MenuItem>
                                             <MenuItem className="selector-link" value={'2020'}>2020</MenuItem>
                                             <MenuItem className="selector-link" value={'2021'}>2021</MenuItem>
                                             <MenuItem className="selector-link" value={'2023'}>2023</MenuItem>
                                             <MenuItem className="selector-link" value={'2024'}>2024</MenuItem>
                                             <MenuItem className="selector-link" value={'2025'}>2025</MenuItem>
                                             <MenuItem className="selector-link" value={'2026'}>2026</MenuItem>
                                             <MenuItem className="selector-link" value={'2027'}>2027</MenuItem>
                                             <MenuItem className="selector-link" value={'2028'}>2028</MenuItem>
                                             <MenuItem className="selector-link" value={'2029'}>2029</MenuItem>
                                             <MenuItem className="selector-link" value={'2030'}>2030</MenuItem>
                                          </Select>
                                       </FormControl>
                                    </div>
                                 </div>
                              </Grid>
                           </Grid>
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