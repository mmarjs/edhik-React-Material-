/**
 * edit address component
 */
import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ContentLoader from "../../../../components/global/loaders/ContentLoader";
import { connect } from "react-redux";
import * as checkoutAction from "../../../../actions/checkoutAction";

const jwt = require("jsonwebtoken");

const styles = theme => ({
  menu: {
    width: 200
  }
});

const zipCode = [
  {
    value: "",
    label: "Select"
  },
  {
    value: "834001",
    label: "834001"
  },
  {
    value: "834002",
    label: "834002"
  },
  {
    value: "834003",
    label: "834003"
  },
  {
    value: "834004",
    label: "834004"
  },
  {
    value: "834005",
    label: "834005"
  },
  {
    value: "834006",
    label: "834006"
  },
  {
    value: "834007",
    label: "834007"
  },
  {
    value: "834008",
    label: "834008"
  },
  {
    value: "834009",
    label: "834009"
  },
  {
    value: "834010",
    label: "834010"
  },
  {
    value: "834217",
    label: "834217"
  },
  {
    value: "835215",
    label: "835215"
  },
  {
    value: "835217",
    label: "835217"
  },
  {
    value: "835221",
    label: "835221"
  },
  {
    value: "835222",
    label: "835222"
  },
  {
    value: "835303",
    label: "835303"
  }
];

class EditAddressTwo extends React.Component {
  state = {
    fields: {
      country: "INDIA",
      state: "JHARKHAND",
      city: "RANCHI",
      zipCode: "Pincode"
    },
    errors: {},
    token: "",
    phone: ""
  };

  componentDidMount() {
    let fields = this.state.fields;
    fields = {
      country: this.props.address.entry_country.toUpperCase(),
      state: this.props.address.entry_state,
      city: this.props.address.entry_city,
      zipCode: this.props.address.entry_postcode,
      landmark: this.props.address.entry_landmark,
      name: this.props.address.entry_name,
      mobile: this.props.address.entry_mobile,
      address: this.props.address.entry_address
    };
    this.setState({
      fields
    });
  }
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

    //building name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    //street
    if (!fields["landmark"]) {
      formIsValid = false;
      errors["landmark"] = "Cannot be empty";
    }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "Cannot be empty";
    }

    //zip code
    if (!fields["zipCode"]) {
      formIsValid = false;
      errors["zipCode"] = "Cannot be empty";
    }

    //country

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

      let decoded_jwt = jwt.verify(localStorage.token, "info");
      console.log("Address aDDED");
      if (this.props.address.address_book_id !== undefined) {
        this.props.editAddress({
          id: decoded_jwt.customers_id,
          name: this.state.fields["name"],
          address: this.state.fields["address"],
          landmark: this.state.fields["landmark"],
          pinCode: this.state.fields["zipCode"],
          city: this.state.fields["city"],
          mobile: this.state.fields["mobile"],
          state: this.state.fields["state"],
          company: "",
          zoneId: "",
          addressId: this.props.address.address_book_id
        });
      } else {
        this.props.addAddress({
          id: decoded_jwt.customers_id,
          name: this.state.fields["name"],
          address: this.state.fields["address"],
          landmark: this.state.fields["landmark"],
          pinCode: this.state.fields["zipCode"],
          city: this.state.fields["city"],
          mobile: this.state.fields["mobile"],
          state: this.state.fields["state"],
          company: "",
          zoneId: ""
        });
      }
    } else {
      alert("Form Fields can't be empty");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (
        nextProps.sign_up_data.token !== undefined &&
        nextProps.sign_up_data.length > 0
      ) {
        this.setState({
          token: nextProps.sign_up_data.token
        });
      } else if (
        nextProps.log_in_data.token !== undefined &&
        nextProps.log_in_data.token.length > 0
      ) {
        this.setState({
          token: localStorage.token
        });
      }
    }
  }

  render() {
    const { type, classes } = this.props;

    return (
      <Fragment>
        {type !== null ? (
          <div className="add_address_component">
            {type && type === "?type=address" ? (
              <h4>Add billing Information</h4>
            ) : (
              <h4>Edit shipping Information</h4>
            )}
            <Grid container spacing={32}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <form
                  className="add_edit_address_form"
                  onSubmit={this.onAddressSubmit.bind(this)}
                >
                  <div className="half_input_wrap">
                    <TextField
                      id="standard-name"
                      label="name"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["name"]}
                      ref="name"
                      onChange={this.handleChange.bind(this, "name")}
                      value={this.state.fields["name"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                    <TextField
                      id="standard-name"
                      label="landmark"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["landmark"]}
                      ref="landmark"
                      onChange={this.handleChange.bind(this, "landmark")}
                      value={this.state.fields["landmark"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                  </div>
                  <div className="full_input_wrap">
                    <TextField
                      id="standard-name"
                      label="mobile"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["mobile"]}
                      ref="mobile"
                      onChange={this.handleChange.bind(this, "mobile")}
                      value={this.state.fields["mobile"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                  </div>
                  <div className="half_input_wrap">
                    <TextField
                      id="standard-disabled"
                      label="state"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["state"]}
                      ref="state"
                      value={this.state.fields["state"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                    <TextField
                      id="standard-disabled"
                      label="city"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["city"]}
                      ref="city"
                      value={this.state.fields["city"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                  </div>
                  <div className="half_input_wrap">
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["zipCode"]}
                      ref="zipCode"
                      onChange={this.handleChange.bind(this, "zipCode")}
                      value={this.state.fields["zipCode"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="normal"
                    >
                      {zipCode.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-disabled"
                      label="country"
                      className="iron-form-input-wrap billing_field"
                      error={this.state.errors["country"]}
                      ref="country"
                      value={this.state.fields["country"]}
                      variant="filled"
                      inputProps={{ className: "address_input" }}
                    />
                  </div>
                  <TextField
                    id="standard-name"
                    label="address"
                    multiline
                    fullWidth
                    className="iron-form-input-wrap billing_field textarea"
                    error={this.state.errors["address"]}
                    ref="address"
                    onChange={this.handleChange.bind(this, "address")}
                    value={this.state.fields["address"]}
                    variant="filled"
                    inputProps={{ className: "address_input_textarea" }}
                  />

                  <Button
                    type="submit"
                    className="btn-active mb-15 submit_address_button"
                  >
                    Save and Deliver Here
                  </Button>
                </form>
              </Grid>
            </Grid>
          </div>
        ) : (
          <ContentLoader />
        )}
      </Fragment>
    );
  }
}

EditAddressTwo.defaultProps = {
  address: {
    entry_country: "INDIA",
    entry_state: "JHARKHAND",
    entry_city: "RANCHI",
    entry_postcode: "Pincode",
    entry_landmark: "",
    entry_name: "",
    entry_mobile: "",
    entry_address: ""
  }
};

const mapStateToProps = state => ({
  sign_up_data: state.checkout.sign_up_data,
  log_in_data: state.checkout.log_in_data
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    checkoutAction
  )(EditAddressTwo)
);
