/**
 * header search widget
 */
import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';

class SearchBox extends React.Component {

   state = {
      isSearchFormOpen: false
   };

   /**
    * Method To Handle Search Form 
    */
   handleSearchForm(isOpen) {
      this.setState({ isSearchFormOpen: isOpen });
   };

   render() {
      const { isSearchFormOpen } = this.state;
      return (
         <div className={classNames("iron-search-box ", { 'active-search-form': isSearchFormOpen })}>
            <IconButton
               onClick={() => this.handleSearchForm(true)}
               color="inherit"
               className="search-icon"
            >
               <SearchIcon />
            </IconButton>

            <div className="search-form px-15 justify-content-between align-items-center" >
               <div className="input-wrap">
                  <Input
                     fullWidth
                     placeholder="Search and hit enter"
                     disableUnderline
                  />
               </div>
               <IconButton
                  onClick={() => this.handleSearchForm(false)}
                  className="close-btn"
               >
                  <i className="material-icons">
                     close
                        </i>
               </IconButton>
            </div>

         </div>
      );
   }
}

export default SearchBox;