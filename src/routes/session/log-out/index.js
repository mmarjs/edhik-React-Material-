/**
 * Log Out Page
 */
import React, { Component } from "react";
import * as checkOutAction from "../../../actions/checkoutAction";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class LogOutPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.logOut();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <Link to={"/"}>
          Click here to Redirect to Home Page. You have been Logged Out.
        </Link>
      </div>
    );
  }
}

const mapStatetoProps = state => ({});

export default withRouter(
  connect(
    mapStatetoProps,
    checkOutAction
  )(LogOutPage)
);
