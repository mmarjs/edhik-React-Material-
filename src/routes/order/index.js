import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class OrderDetail extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h2>My Account > My Orders</h2>
          </Grid>
          <Grid container spacing={32}>
            <Grid>
              <Grid item xs={12} md={3}>
                OD167676878789798798
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item xs={12} md={6}>
                  Need Help
                </Grid>
                <Grid item xs={12} md={6}>
                  Track
                </Grid>
              </Grid>
              <Grid />
              <Grid />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OrderDetail;
