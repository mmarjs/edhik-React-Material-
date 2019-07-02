/**
 * user address component
 */
import React from "react";
import { Grid, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default class UserAddress extends React.Component {
  state = {
    addNewAddress: false
  };

  deleteAddress(id) {}
  render() {
    return (
      <div className="profile_wrapper">
        <h5>Address Information</h5>
        <div className="address_profile_wrapper">
          {this.state.addNewAddress ? (
            <div className="add_new_address_form">
              <Grid container spacing={32}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <form className="add_edit_address_form">
                    <h6 className="add_addr_title">Add New Address</h6>
                    <div className="half_input_wrap">
                      <TextField
                        id="standard-name"
                        label="name"
                        className="iron-form-input-wrap billing_field"
                        ref="name"
                        variant="filled"
                        inputProps={{ className: "address_input" }}
                      />
                      <TextField
                        id="standard-name"
                        label="landmark"
                        className="iron-form-input-wrap billing_field"
                        ref="landmark"
                        variant="filled"
                        inputProps={{ className: "address_input" }}
                      />
                    </div>
                    <div className="full_input_wrap">
                      <TextField
                        id="standard-name"
                        label="mobile"
                        className="iron-form-input-wrap billing_field"
                        ref="mobile"
                        variant="filled"
                        inputProps={{ className: "address_input" }}
                      />
                    </div>
                    <div className="half_input_wrap">
                      <TextField
                        id="standard-disabled"
                        label="state"
                        className="iron-form-input-wrap billing_field"
                        ref="state"
                        variant="filled"
                        inputProps={{ className: "address_input" }}
                      />
                      <TextField
                        id="standard-disabled"
                        label="city"
                        className="iron-form-input-wrap billing_field"
                        ref="city"
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
                        ref="zipCode"
                        variant="filled"
                        inputProps={{ className: "address_input" }}
                        margin="normal"
                      >
                        <MenuItem>10059</MenuItem>
                      </TextField>
                      <TextField
                        id="standard-disabled"
                        label="country"
                        className="iron-form-input-wrap billing_field"
                        ref="country"
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
                      ref="address"
                      variant="filled"
                    />

                    <div className="button_container">
                      <Button
                        type="submit"
                        className="btn-active mb-15 submit_address_button"
                      >
                        Save
                      </Button>
                      <Button
                        type="submit"
                        className="cancel_address_button"
                        onClick={() => {
                          this.setState({ addNewAddress: false });
                        }}
                      >
                        CANCEL
                      </Button>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </div>
          ) : (
            <button
              className="add_address_trigger"
              onClick={() => {
                this.setState({ addNewAddress: !this.state.addNewAddress });
              }}
            >
              <i className="material-icons">add</i> ADD NEW ADDRESS
            </button>
          )}
          <div className="address_list_cont">
            <div className="single_profile_address">
              <div className="address_content">
                <div style={{ marginBottom: 10 }}>
                  <span className="profile_add_name">Ram Pandey</span>
                  <span className="profile_add_phone">8826047538</span>
                  <span className="default_address">DEFAULT</span>
                </div>
                <p>
                  A-283,Bindapur,DDA flats,Uttam Nagar, New Delhi-110059, Near
                  peer baba majan, new delhi, Delhi -{" "}
                  <span className="zip">110059</span>
                </p>
              </div>
              <div className="edit_address_btn">
                <Button className="hover_menu">
                  <i className="material-icons">more_vert</i>
                  <ul className="hover_list_cont">
                    <li className="hover_list">EDIT</li>
                    <li
                      className="hover_list"
                      onClick={this.deleteAddress.bind(this)}
                    >
                      DELETE
                    </li>
                  </ul>
                </Button>
              </div>
            </div>
            <div className="single_profile_address">
              <div className="address_content">
                <div style={{ marginBottom: 10 }}>
                  <span className="profile_add_name">Ram Pandey</span>
                  <span className="profile_add_phone">8826047538</span>
                  <Button className="default_btn_set">Set as Default</Button>
                </div>
                <p>
                  A-283,Bindapur,DDA flats,Uttam Nagar, New Delhi-110059, Near
                  peer baba majan, new delhi, Delhi -{" "}
                  <span className="zip">110059</span>
                </p>
              </div>
              <div className="edit_address_btn">
                <Button className="hover_menu">
                  <i className="material-icons">more_vert</i>
                  <ul className="hover_list_cont">
                    <li className="hover_list">EDIT</li>
                    <li className="hover_list">DELETE</li>
                  </ul>
                </Button>
              </div>
            </div>
            <div className="single_profile_address">
              <div className="address_content">
                <div style={{ marginBottom: 10 }}>
                  <span className="profile_add_name">Ram Pandey</span>
                  <span className="profile_add_phone">8826047538</span>
                  <Button className="default_btn_set">Set as Default</Button>
                </div>
                <p>
                  A-283,Bindapur,DDA flats,Uttam Nagar, New Delhi-110059, Near
                  peer baba majan, new delhi, Delhi -{" "}
                  <span className="zip">110059</span>
                </p>
              </div>
              <div className="edit_address_btn">
                <Button className="hover_menu">
                  <i className="material-icons">more_vert</i>
                  <ul className="hover_list_cont">
                    <li className="hover_list">EDIT</li>
                    <li className="hover_list">DELETE</li>
                  </ul>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
