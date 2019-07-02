/**
 * user profile page
 */
import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { Link } from "react-router-dom";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import * as checkOutActions from "../../../actions/checkoutAction";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
// import firebase from "../../../firebase";
// import ContentLoader from "../../../components/global/loaders/ContentLoader";

const jwt = require("jsonwebtoken");
//firebase

//component

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className="verify_otp_title">
      <h6>{children}</h6>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);
class Profile extends React.Component {
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  state = {
    infoData: null,
    open: false,
    edit: {
      "First Name": "edit",
      "Last Name": "edit",
      Gender: "edit",
      "Date Of Birth": "edit",
      "Mobile Number": "edit",
      Location: "edit",
      "E-Mail Id": "edit"
    },
    fields: {
      "First Name": "Customer-firstname",
      "Last Name": "Customer-lastname",
      Gender: "Male",
      "Date Of Birth": new Date("1997-08-18T21:11:54"),
      "Mobile Number": "999999999",
      Location: "Ranchi",
      "E-Mail Id": "help@edhik.com"
    },
    disabled: {
      "First Name": true,
      "Last Name": true,
      Gender: true,
      "Date Of Birth": true,
      "Mobile Number": true,
      Location: true,
      "E-Mail Id": true
    }
  };

  componentDidMount() {
    // @ram this is where the token is converted using JWT to get essential details
    if (localStorage.token !== undefined && localStorage.token.length > 0) {
      let decoded_jwt = jwt.verify(localStorage.token, "info");
      console.log(decoded_jwt);
      let fields = this.state.fields;
      fields = {
        "First Name": decoded_jwt.customers_firstname,
        "Last Name": decoded_jwt.customers_lastname,
        Gender: decoded_jwt.customers_gender === 0 ? "Male" : "Female",
        "Date Of Birth": new Date(decoded_jwt.customers_dob),
        "Mobile Number": decoded_jwt.mobile,
        Location: "Ranchi",
        "E-Mail Id": decoded_jwt.email
      };
      this.setState({
        fields
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.profile_data.customers_default_address !== undefined) {
        if (
          nextProps.profile_data.customers_default_address.ship_mobile !==
          undefined
        ) {
          let fields = this.state.fields;
          fields["Mobile Number"] =
            nextProps.profile_data.customers_default_address.ship_mobile;
          this.setState({
            fields
          });
        }
      }
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleDateChange(date) {
    let jwt_decode = jwt.verify(localStorage.token, "info");
    let fields = this.state.fields;
    fields["Date Of Birth"] = date;
    console.log(fields);
    this.setState({ fields });
    this.props.editProfile({
      id: jwt_decode.customers_id,
      email: this.state.fields["E-Mail Id"],
      gender: this.state.fields["Gender"],
      firstName: this.state.fields["First Name"],
      lastName: this.state.fields["Last Name"],
      dob: this.state.fields["Date Of Birth"],
      userName: "",
      telephone: "",
      fax: "",
      picture: "",
      mobile: this.state.fields["Mobile Number"]
    });
  }

  enableField(value) {
    let jwt_decode = jwt.verify(localStorage.token, "info");
    if (this.state.edit[value] === "edit") {
      let edit = this.state.edit;
      edit[value] = "save";
      let disabled = this.state.disabled;
      disabled[value] = false;
      this.setState({
        edit,
        disabled
      });
    } else if (this.state.edit[value] === "save") {
      let edit = this.state.edit;
      edit[value] = "edit";
      let disabled = this.state.disabled;
      disabled[value] = true;
      switch (value) {
        case "E-Mail Id": {
          this.props.editProfile({
            id: jwt_decode.customers_id,
            email: this.state.fields[value],
            gender: this.state.fields["Gender"],
            firstName: this.state.fields["First Name"],
            lastName: this.state.fields["Last Name"],
            dob: this.state.fields["Date Of Birth"],
            userName: "",
            telephone: "",
            fax: "",
            picture: "",
            mobile: this.state.fields["Mobile Number"]
          });
          break;
        }
        case "Gender": {
          this.props.editProfile({
            id: jwt_decode.customers_id,
            email: this.state.fields["E-Mail Id"],
            gender: this.state.fields[value],
            firstName: this.state.fields["First Name"],
            lastName: this.state.fields["Last Name"],
            dob: this.state.fields["Date Of Birth"],
            userName: "",
            telephone: "",
            fax: "",
            picture: "",
            mobile: this.state.fields["Mobile Number"]
          });
          break;
        }
        case "First Name": {
          this.props.editProfile({
            id: jwt_decode.customers_id,
            email: this.state.fields["E-Mail Id"],
            gender: this.state.fields["Gender"],
            firstName: this.state.fields[value],
            lastName: this.state.fields["Last Name"],
            dob: this.state.fields["Date Of Birth"],
            userName: "",
            telephone: "",
            fax: "",
            picture: "",
            mobile: this.state.fields["Mobile Number"]
          });
          break;
        }
        case "Last Name": {
          this.props.editProfile({
            id: jwt_decode.customers_id,
            email: this.state.fields["E-Mail Id"],
            gender: this.state.fields["Gender"],
            firstName: this.state.fields["First Name"],
            lastName: this.state.fields[value],
            dob: this.state.fields["Date Of Birth"],
            userName: "",
            telephone: "",
            fax: "",
            picture: "",
            mobile: this.state.fields["Mobile Number"]
          });
          break;
        }
        case "Date Of Birth": {
          this.props.editProfile({
            id: jwt_decode.customers_id,
            email: this.state.fields["E-Mail Id"],
            gender: this.state.fields["Gender"],
            firstName: this.state.fields["First Name"],
            lastName: this.state.fields["Last Name"],
            dob: this.state.fields[value],
            userName: "",
            telephone: "",
            fax: "",
            picture: "",
            mobile: this.state.fields["Mobile Number"]
          });
          break;
        }
        default:
          console.log("Default Case");
      }
      this.setState({
        edit,
        disabled
      });
    }
  }

  render() {
    //  const { infoData } = this.state;

    return (
      <Fragment>
        <div className="profile_wrapper">
          <div>
            <div className="user-basic-info">
              <div className="custom_group">
                <h5>Personal Information</h5>
                <div className="prof_form_group">
                  <div className="half_inputs">
                    <TextField
                      id="standard-name"
                      label={"First Name"}
                      // error={this.state.errors["fname"]}
                      ref="fname"
                      className="iron-form-input-wrap"
                      onChange={this.handleChange.bind(this, "First Name")}
                      value={this.state.fields["First Name"]}
                      disabled={this.state.disabled["First Name"]}
                      variant="filled"
                      InputLabelProps={{
                        classes: {
                          input: "customized_label",
                          root: "customized_label",
                          disabled: "customized_label disabled"
                        }
                      }}
                      InputProps={{
                        classes: {
                          input: "customized_profile_input",
                          root: "customized_profile_input",
                          disabled: "disabled"
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <span
                              onClick={this.enableField.bind(
                                this,
                                "First Name"
                              )}
                              className="custom_edit_btn"
                              style={{
                                color: "#2874F0",
                                cursor: "pointer"
                              }}
                            >
                              {this.state.edit["First Name"]}
                            </span>
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                  <div className="half_inputs">
                    <TextField
                      id="standard-name"
                      label={"Last Name"}
                      // error={this.state.errors["fname"]}
                      ref="lname"
                      className="iron-form-input-wrap"
                      onChange={this.handleChange.bind(this, "Last Name")}
                      value={this.state.fields["Last Name"]}
                      variant="filled"
                      InputLabelProps={{
                        classes: {
                          input: "customized_label",
                          root: "customized_label",
                          disabled: "customized_label disabled"
                        }
                      }}
                      InputProps={{
                        classes: {
                          input: "customized_profile_input",
                          root: "customized_profile_input",
                          disabled: "disabled"
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <span
                              onClick={this.enableField.bind(this, "Last Name")}
                              className="custom_edit_btn"
                              style={{
                                color: "#2874F0",
                                cursor: "pointer"
                              }}
                            >
                              {this.state.edit["Last Name"]}
                            </span>
                          </InputAdornment>
                        )
                      }}
                      disabled={this.state.disabled["Last Name"]}
                    />
                  </div>
                  <div className="full_inputs">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        id="standard-name"
                        label={"Date Of Birth"}
                        className="iron-form-input-wrap"
                        disableFuture
                        onChange={this.handleDateChange.bind(this)}
                        value={this.state.fields["Date Of Birth"]}
                        variant="filled"
                        InputLabelProps={{
                          classes: {
                            input: "customized_label",
                            root: "customized_label",
                            disabled: "customized_label disabled"
                          }
                        }}
                        InputProps={{
                          classes: {
                            input: "customized_profile_input",
                            root: "customized_profile_input",
                            disabled: "disabled"
                          }
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>

                <h5>Mobile Number</h5>
                <div className="prof_form_group">
                  <div className="full_inputs">
                    <TextField
                      id="standard-name"
                      type="tel"
                      label={"Mobile Number"}
                      className="iron-form-input-wrap"
                      // error={this.state.errors["fname"]}
                      ref="lname"
                      onChange={this.handleChange.bind(this, "Mobile Number")}
                      value={this.state.fields["Mobile Number"]}
                      disabled={this.state.disabled["Mobile Number"]}
                      variant="filled"
                      InputLabelProps={{
                        classes: {
                          input: "customized_label",
                          root: "customized_label",
                          disabled: "customized_label disabled"
                        }
                      }}
                      InputProps={{
                        maxLength: 10,
                        pattern: "[0-9]{10}",
                        classes: {
                          input: "customized_profile_input",
                          root: "customized_profile_input",
                          disabled: "disabled"
                        },
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <span
                              onClick={this.handleClickOpen}
                              className="custom_edit_btn"
                              style={{
                                color: "#2874F0",
                                cursor: "pointer"
                              }}
                            >
                              {this.state.edit["Mobile Number"]}
                            </span>
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                </div>
                <h5>Location</h5>
                <div className="prof_form_group">
                  <div className="full_inputs">
                    <TextField
                      id="standard-name"
                      label={"Location"}
                      className="iron-form-input-wrap"
                      // error={this.state.errors["fname"]}
                      ref="lname"
                      onChange={this.handleChange.bind(this, "Location")}
                      value={this.state.fields["Location"]}
                      disabled={this.state.disabled["Location"]}
                      variant="filled"
                      InputLabelProps={{
                        classes: {
                          input: "customized_label",
                          root: "customized_label",
                          disabled: "customized_label disabled"
                        }
                      }}
                      InputProps={{
                        classes: {
                          input: "customized_profile_input",
                          root: "customized_profile_input",
                          disabled: "disabled"
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <span
                              onClick={this.enableField.bind(this, "Location")}
                              className="custom_edit_btn"
                              style={{
                                color: "#2874F0",
                                cursor: "pointer"
                              }}
                            >
                              {this.state.edit["Location"]}
                            </span>
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                </div>
                <h5>Email Address</h5>
                <div className="prof_form_group">
                  <div className="full_inputs">
                    <TextField
                      id="standard-name"
                      label={"E-Mail Id"}
                      className="iron-form-input-wrap"
                      // error={this.state.errors["fname"]}
                      ref="lname"
                      type="email"
                      onChange={this.handleChange.bind(this, "E-Mail Id")}
                      value={this.state.fields["E-Mail Id"]}
                      disabled={this.state.disabled["E-Mail Id"]}
                      variant="filled"
                      InputLabelProps={{
                        classes: {
                          input: "customized_label",
                          root: "customized_label",
                          disabled: "customized_label disabled"
                        }
                      }}
                      InputProps={{
                        classes: {
                          input: "customized_profile_input",
                          root: "customized_profile_input",
                          disabled: "disabled"
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <span
                              onClick={this.enableField.bind(this, "E-Mail Id")}
                              className="custom_edit_btn"
                              style={{
                                color: "#2874F0",
                                cursor: "pointer"
                              }}
                            >
                              {this.state.edit["E-Mail Id"]}
                            </span>
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          classes={{
            paper: "verify_otp_modal"
          }}
          disableBackdropClick={true}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Verify OTP
          </DialogTitle>
          <DialogContent>
            <div className="prof_form_group">
              <div className="full_inputs">
                <TextField
                  id="standard-name"
                  type="tel"
                  label={"Mobile Number"}
                  className="iron-form-input-wrap"
                  // error={this.state.errors["fname"]}
                  ref="lname"
                  onChange={this.handleChange.bind(this, "Mobile Number")}
                  value={this.state.fields["Mobile Number"]}
                  variant="filled"
                  InputLabelProps={{
                    classes: {
                      input: "customized_label",
                      root: "customized_label",
                      disabled: "customized_label disabled"
                    }
                  }}
                  InputProps={{
                    maxLength: 10,
                    pattern: "[0-9]{10}",
                    classes: {
                      input: "customized_profile_input",
                      root: "customized_profile_input",
                      disabled: "disabled"
                    }
                  }}
                />
              </div>
            </div>
            <div className="prof_form_group">
              <div className="full_inputs">
                <TextField
                  id="standard-name"
                  type="tel"
                  label={"Enter otp sent"}
                  className="iron-form-input-wrap"
                  // error={this.state.errors["fname"]}
                  ref="lname"
                  variant="filled"
                  InputLabelProps={{
                    classes: {
                      input: "customized_label",
                      root: "customized_label",
                      disabled: "customized_label disabled"
                    }
                  }}
                  InputProps={{
                    maxLength: 10,
                    pattern: "[0-9]{10}",
                    classes: {
                      input: "customized_profile_input",
                      root: "customized_profile_input",
                      disabled: "disabled"
                    }
                  }}
                />
              </div>
            </div>
            <div className="prof_form_group">
              <div className="full_inputs">
                <TextField
                  id="standard-name"
                  type="password"
                  label={"Enter Password"}
                  className="iron-form-input-wrap"
                  // error={this.state.errors["fname"]}
                  ref="lname"
                  variant="filled"
                  InputLabelProps={{
                    classes: {
                      input: "customized_label",
                      root: "customized_label",
                      disabled: "customized_label disabled"
                    }
                  }}
                  InputProps={{
                    classes: {
                      input: "customized_profile_input",
                      root: "customized_profile_input",
                      disabled: "disabled"
                    }
                  }}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className="submit_otp_form">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile_data: state.checkout.profile_data
});

export default connect(
  mapStateToProps,
  checkOutActions
)(Profile);
