/**
 * Fixed header component
 */
/* eslint-disable */
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

// components
import HeaderMenuTwo from "./HeaderMenuTwo";
import SidebarMenu from "../sidebar";
import AppConfig from "../../../constants/AppConfig";
import { Link } from "react-router-dom";

class FixedHeader extends Component {
  render() {
    return (
      <div className="iron-fixed-header bg-primary">
        <div className="container">
          <Grid container spacing={0}>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              className="d-flex justify-content-start align-items-center"
            >
              <div className="iron-app-logo text-md-center">
                <Link to="/">
                  <img src={AppConfig.AppLogo} alt="header-logo" />{" "}
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default FixedHeader;
