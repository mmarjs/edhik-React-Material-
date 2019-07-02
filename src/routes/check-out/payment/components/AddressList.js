import React, { Component } from "react";
import { Button } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Menu from "@material-ui/core/Menu";
import Radio from "@material-ui/core/Radio";
// import MenuItem from "@material-ui/core/MenuItem";
import EditAddressTwo from "../../../account/edit/components/EditAddressTwo";
import "../../../account/account.scss";
import * as checkOutAction from "../../../../actions/checkoutAction";
import { connect } from "react-redux";

class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.addresses[0].address_book_id,
      expanded: false,
      addNewAddress: false,
      editAddress: null
    };
    this.openAddAddress = this.openAddAddress.bind(this);
  }
  handleAddress(data) {
    this.setState({
      selectedValue: data
    });
  }
  openAddAddress() {
    this.setState({
      expanded: true
    });
  }

  editAddress(address) {
    this.setState({
      addNewAddress: true,
      editAddress: address
    });
  }
  render() {
    return (
      <div className={!this.state.addNewAddress ? "profile_wrapper" : ""}>
        {!this.state.addNewAddress ? <h5>Address Information</h5> : null}
        <div className="address_profile_wrapper">
          {this.state.addNewAddress ? (
            <div style={{ position: "relative" }}>
              <EditAddressTwo
                type={"?type=address"}
                address={this.state.editAddress}
              />
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
          ) : (
            <button
              className="add_address_trigger"
              onClick={() => {
                this.setState({
                  addNewAddress: !this.state.addNewAddress,
                  editAddress: undefined
                });
              }}
            >
              <i className="material-icons">add</i> ADD NEW ADDRESS
            </button>
          )}
          <div className="address_list_cont">
            {this.props.addresses.map(address => {
              return (
                <React.Fragment key={address.address_book_id}>
                  <div
                    className="existing_addresses"
                    onClick={() => {
                      this.setState({ selectedValue: address.address_book_id });
                    }}
                  >
                    {/* Check radio upon clicking on this address and add a class with name selected_address on outer dic of that address.
                      Deliver here button with appear itself after checking radio button,you don't need to put logic for showing and hiding them
                    */}
                    <div
                      className={
                        this.state.selectedValue === address.address_book_id
                          ? "single_address selected_address"
                          : "single_address"
                      }
                    >
                      <Radio
                        checked={
                          this.state.selectedValue === address.address_book_id
                        }
                        onChange={this.handleAddress.bind(
                          this,
                          address.address_book_id
                        )}
                        value="a"
                        name="select_address_radio"
                        aria-label="A"
                        classes={{
                          root: "brand_radio",
                          checked: "brand_radio checked"
                        }}
                      />
                      <div className="address_detail">
                        <p className="addressee">
                          <b>{address.entry_name}</b>{" "}
                          <span>{address.entry_mobile}</span>
                        </p>
                        <p>
                          {`Near ${address.entry_landmark}, ${
                            address.entry_address
                          }, ${address.entry_city}, ${address.entry_state}`}
                          - {address.entry_postcode}
                        </p>
                        <button
                          className="select_address"
                          onClick={this.props.openCartPane}
                        >
                          Deliver Here
                        </button>
                      </div>
                      <button
                        className="edit_address_button"
                        onClick={this.editAddress.bind(this, address)}
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  checkOutAction
)(AddressList);
