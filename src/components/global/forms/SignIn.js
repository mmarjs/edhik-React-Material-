/**
 * Sign in form
 */
import React from "react";

// Material ui
import { Button, Grid } from "@material-ui/core";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// import { Link } from "react-router-dom";
import { Done } from "@material-ui/icons";
import { connect } from "react-redux";
import * as checkoutAction from "../../../actions/checkoutAction";
// import { stat } from "fs";

const otpStylehidden = {
  display: "none"
};

const otpStyleshow = {};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      otp: "",
      mobile_status: 0,
      otp_status: 0,
      password: "",
      loading: false,
      state: 0,
      error: false,
      helperText: ""
    };
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.checkMobileStatus = this.checkMobileStatus.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }
  changeNumber() {
    this.setState({
      phone: "",
      otp: "",
      mobile_status: 0,
      otp_status: 0,
      password: "",
      loading: false,
      sign_up_data: {}
    });
  }

  componentDidMount() {
    if (localStorage.token !== undefined && localStorage.token.length > 0) {
      const jwt = require("jsonwebtoken");
      let jwt_decode = jwt.verify(localStorage.token, "info");
      this.props.setData({
        customers_id: jwt_decode.customers_id,
        mobile: jwt_decode.mobile
      });
      console.log(jwt_decode.customers_id);
      this.props.getAddress({
        id: jwt_decode.customers_id
      });
      this.setState({
        loading: false
      });
      this.props.openAddressPane();
    }
  }

  changePassword() {
    this.setState({
      phone: this.state.phone,
      otp: "",
      mobile_status: -1,
      otp_status: 0,
      password: "",
      loading: false,
      sign_up_data: {},
      state: 1
    });
    fetch("https://edhikserver.herokuapp.com/send_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobile: this.state.phone
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false
        });
        console.log(response);
      });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeOtp = event => {
    this.setState({ otp: event.target.value });
    if (event.target.value.length === 4) {
      this.props.checkOtp({
        mobile: this.state.phone,
        otp: event.target.value
      });
    } else {
      this.setState({
        otp_status: 0
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        otp_status:
          nextProps.otp_status === "verified"
            ? 1
            : nextProps.otp_status === "error"
            ? -1
            : 0
      });
      if (
        nextProps.sign_up_data.token !== undefined &&
        nextProps.sign_up_data.token.length > 0
      ) {
        this.setState({
          loading: false
        });
        console.log("Address Pane Open State");
        nextProps.openAddressPane();
        console.log("Address Pane Opened");
      } else if (
        nextProps.log_in_data.token !== undefined &&
        nextProps.log_in_data.token.length > 0
      ) {
        console.log(nextProps.log_in_data.token);
        localStorage.setItem("token", nextProps.log_in_data.token);
        const jwt = require("jsonwebtoken");
        let jwt_decode = jwt.verify(localStorage.token, "info");
        this.props.getAddress({
          id: jwt_decode.customers_id
        });
        this.setState({
          loading: false
        });
        this.props.openAddressPane();
      } else if (
        nextProps.log_in_data !== undefined &&
        nextProps.log_in_data === false
      ) {
        this.setState({
          loading: false
        });
        alert("Please Enter Correct Password");
      }
      if (nextProps.password_changed === true) {
        this.setState({
          loading: false
        });
        this.props.history.push("/check-out");
      }
      if (localStorage.token !== undefined && localStorage.token > 0) {
        const jwt = require("jsonwebtoken");
        let jwt_decode = jwt.verify(localStorage.token, "info");
        this.props.getAddress({
          id: jwt_decode.customers_id
        });
        this.setState({
          loading: false
        });
        this.props.openAddressPane();
      }
    }
  }
  signUp() {
    if (
      this.state.password !== "" &&
      this.state.otp !== "" &&
      this.state.state === 0
    ) {
      this.setState({
        loading: true,
        error: false
      });
      this.setState({
        loading: true,
        error: false
      });
      this.props.signUp({
        mobile: this.state.phone,
        password: this.state.password,
        otp: this.state.otp
      });
    } else if (
      this.state.password !== "" &&
      this.state.otp !== "" &&
      this.state.state === 1
    ) {
      this.setState({
        loading: true,
        error: false
      });
      this.props.changePassword({
        mobile: this.state.phone,
        password: this.state.password,
        otp: this.state.otp
      });
    }
  }

  login() {
    this.setState({
      loading: true,
      error: false
    });
    if (this.state.password !== "") {
      this.props.logIn({
        mobile: this.state.phone,
        password: this.state.password
      });
    }
  }

  handleValidation() {
    let phone = this.state.phone;
    let error = false;
    let formIsValid = true;
    if (phone.length < 10) {
      formIsValid = false;
      error = true;
    }
    this.setState({
      error: error,
      helperText: error === true ? "Please enter a Valid Mobile No." : ""
    });
    return formIsValid;
  }

  checkMobileStatus() {
    if (this.handleValidation()) {
      if (this.state.phone !== "") {
        this.setState({
          loading: true,
          error: false
        });
        if (this.state.phone !== "") {
          fetch("https://edhikserver.herokuapp.com/mobile_status", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              mobile: this.state.phone
            })
          })
            .then(response => response.json())
            .then(response => {
              this.setState({
                loading: false
              });
              if (response.mobile_status === false) {
                this.setState({
                  mobile_status: -1
                });
                response => console.log(`OTP Send ${response.type}`);
              } else if (response.mobile_status) {
                this.setState({
                  mobile_status: 1
                });
              }
            });
          // console.log(this.state.mobile_status)
        }
      }
    } else {
      this.setState({
        helperText: "Please enter a valid mobile no.",
        error: false
      });
    }
  }

  render() {
    return (
      <div>
        <h4>user sign in</h4>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={9} md={9} lg={6}>
            <form className="sign_in_form">
              <div>
                <TextField
                  required
                  id="standard-phone"
                  label="Phone"
                  className="iron-form-input-wrap"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.handleChange("phone")}
                  autoComplete="current-phone"
                  error={this.state.error}
                  helperText={
                    (this.state.error = true ? this.state.helperText : "")
                  }
                  inputProps={{
                    maxLength: 10,
                    readOnly: this.state.mobile_status === 0 ? false : true,
                    pattern: "[0-9]{10}"
                  }}
                  InputProps={{
                    maxLength: 10,
                    readOnly: this.state.mobile_status === 0 ? false : true,
                    pattern: "[0-9]{10}",
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <span
                          onClick={this.changeNumber}
                          style={{
                            color: "#2874F0",
                            cursor: "pointer"
                          }}
                        >
                          {this.state.mobile_status === 0 ? "" : "Change?"}
                        </span>
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <TextField
                required
                id="standard-otp"
                label="OTP"
                className="iron-form-input-wrap"
                type="text"
                value={this.state.otp}
                onChange={this.handleChangeOtp}
                style={
                  this.state.mobile_status === -1
                    ? otpStyleshow
                    : otpStylehidden
                }
                error={
                  this.state.otp.length === 4 && this.state.otp_status === -1
                }
                InputProps={{
                  maxLength: 4,
                  readOnly: this.state.otp_status === 1 ? true : false,
                  endAdornment: (
                    <InputAdornment position="end">
                      {this.state.otp.length === 4 &&
                      this.state.otp_status === 0 ? (
                        <i className="fas fa-spinner fa-spin">{}</i>
                      ) : (
                        ""
                      )}{" "}
                      {this.state.otp_status === 1 ? (
                        <Done style={{ fill: "green" }} />
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  )
                }}
                // autoComplete="current-name"
              />
              <div className="mb-15">
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  className="iron-form-input-wrap"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  style={
                    this.state.mobile_status === -1
                      ? otpStyleshow
                      : otpStylehidden
                  }
                  type="password"
                  //autoComplete="current-password"
                  disabled={this.state.otp_status !== 1}
                />
              </div>
              <div className="mb-15">
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  className="iron-form-input-wrap"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  style={
                    this.state.mobile_status === 1
                      ? otpStyleshow
                      : otpStylehidden
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span
                          onClick={this.changePassword}
                          style={{
                            color: "#2874F0",
                            cursor: "pointer"
                          }}
                        >
                          Forgot?
                        </span>
                      </InputAdornment>
                    )
                  }}
                  type="password"
                  //autoComplete="current-password"
                />
              </div>
              {/* <div className="d-sm-flex justify-content-between align-items-center mb-sm-10 mb-20">
                        <FormGroup >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedA"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                        </FormGroup>
                        <span className="d-inline-block"><Link to="/forget-password">Forgot Password?</Link></span>
                    </div> */}
              {this.state.mobile_status === -1 ? (
                <Button
                  className="button btn-active full_sign_button mb-25"
                  onClick={this.signUp}
                >
                  {this.state.loading ? (
                    <span>
                      <i className="fas fa-spinner fa-spin" />
                      &nbsp;Signup
                    </span>
                  ) : (
                    "Signup"
                  )}
                </Button>
              ) : this.state.mobile_status === 1 ? (
                <Button
                  className="button btn-active full_sign_button mb-25"
                  onClick={this.login}
                >
                  {this.state.loading ? (
                    <span>
                      <i className="fas fa-spinner fa-spin" />
                      &nbsp;Login
                    </span>
                  ) : (
                    "Login"
                  )}
                </Button>
              ) : (
                <Button
                  className="button btn-active full_sign_button mb-25"
                  onClick={this.checkMobileStatus}
                >
                  {this.state.loading ? (
                    <span>
                      <i className="fas fa-spinner fa-spin" />
                      &nbsp;continue checkout
                    </span>
                  ) : (
                    "continue checkout"
                  )}
                </Button>
              )}
              {/* <p className="mb-0">Don't have an account? <Link to="/sign-up">Click here to create one</Link></p> */}
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  otp_status: state.checkout.otp_status,
  sign_up_data: state.checkout.sign_up_data,
  log_in_data: state.checkout.log_in_data,
  password_changed: state.checkout.password_changed
});

export default connect(
  mapStatetoProps,
  checkoutAction
)(SignIn);
