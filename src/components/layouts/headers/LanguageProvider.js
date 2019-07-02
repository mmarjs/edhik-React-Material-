/**
 * Language Select NavLinks
 */
/* eslint-disable */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//connect to store
import { connect } from "react-redux";

// actions
import { setLanguage } from '../../../actions/action';

class LanguageProvider extends React.Component {

   state = {
      anchorEl: null,
   };

   // function to toggle dropdown menu
   toggleDropdown = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   //define function to change locale 
   onChangeLocale(language) {
      this.setState({ anchorEl: null });
      this.props.setLanguage(language);
   }

   render() {

      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      return (
         <div className="iron-language-provider d-none d-md-inline-block">
            <Button
               aria-owns={open ? 'fade-menu' : null}
               aria-haspopup="true"
               onClick={this.toggleDropdown}
               className="base-text pl-0"
            >
               {this.props.selectedLocale.name}
               <i className="material-icons">arrow_drop_down</i>
            </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={() => this.setState({ anchorEl: null })}
               className="iron-dropdown"
            >
               {this.props.languages.map((language, index) => {
                  return (
                     <MenuItem
                        key={index}
                        onClick={() => this.onChangeLocale(language)}
                     >
                        {language.name}
                     </MenuItem>
                  )
               })}
            </Menu>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   const { languages, selectedLocale } = appSettings;
   return {
      languages,
      selectedLocale
   }
}

export default connect(mapStateToProps, {
   setLanguage
})(LanguageProvider);
