/* eslint-disable */
/**
 * Currency Select NavLinks
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';

//connect to store
import { connect } from "react-redux";

// action
import { changeCurrency } from '../../../actions/action';

class CurrencyProvider extends React.Component {

   state = {
      anchorEl: null,
   };

   //Function to toggle dropdown menu
   toggleDropdown = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   //Define function for change currency icon
   onChangeCurrency(currency) {
      this.setState({ anchorEl: null });
      this.props.changeCurrency(currency);
   }

   render() {

      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      return (
         <div className="iron-currency-provider d-none d-md-inline-block">
            <Button
               aria-owns={open ? 'fade-menu' : null}
               aria-haspopup="true"
               onClick={this.toggleDropdown}
               className="base-text"
            >
               {this.props.selectedCurrency.name}
               <i className="material-icons">arrow_drop_down</i>
            </Button>
            <Menu
               id="fade-menu"
               anchorEl={anchorEl}
               open={open}
               onClose={() => this.setState({ anchorEl: null })}
               TransitionComponent={Fade}
               className="iron-dropdown"
            >
               {
                  this.props.currencies.map((currency, index) => {
                     return (
                        <MenuItem
                           key={index}
                           onClick={() => this.onChangeCurrency(currency)}
                        >
                           <Avatar
                              className="mr-10 img-wrap"
                              src={currency.icon}
                              alt="currency-icon"
                           >
                           </Avatar>
                           {currency.name}
                        </MenuItem>
                     )
                  })
               }
            </Menu>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   const { currencies, selectedCurrency } = appSettings;
   return {
      currencies,
      selectedCurrency
   }
}

export default connect(mapStateToProps, {
   changeCurrency
})(CurrencyProvider);