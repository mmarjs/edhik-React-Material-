/**
 * Sidebar menu component
 */
import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import { Scrollbars } from 'react-custom-scrollbars';
import { List } from '@material-ui/core';

//data
import navLinks from '../../../assets/data/NavLinks.js';

//component
import MenuListItem from './MenuListItem';

class SidebarMenu extends React.Component {

   state = {
      open: false
   };

   /**
    * function for toggle sidebar drawer
    */
   toggleDrawer() {
      this.setState({
         open: !this.state.open
      });
   };

   /**
    * function for close sidebar drawer
    */
   closeDrawer() {
      this.setState({
         open: false
      });
   }

   render() {

      return (
         <div className="py-10 text-left iron-sidebar-nav-wrap">
            <IconButton onClick={this.toggleDrawer.bind(this)} className="nav-menu-icon">
               <i className="material-icons">menu</i>
            </IconButton>
            <SwipeableDrawer
               open={this.state.open}
               onClose={this.toggleDrawer.bind(this)}
               onOpen={this.toggleDrawer.bind(this)}
               className="sidebar-area"
            >
               <Scrollbars
                  autoHide
                  autoHideDuration={100}
                  style={{ width: 280, height: 'calc(100vh - 2rem)' }}
               >
                  <div className="vertical-menu py-40">
                     <List component="nav" className="iron-sidebar-menu">
                        {navLinks.map((NavLink, index) => (
                           <MenuListItem
                              menu={NavLink}
                              key={index}
                              closeDrawer={() => this.closeDrawer()}
                           />
                        ))}
                     </List>
                  </div>
               </Scrollbars>
            </SwipeableDrawer>
         </div>
      );
   }
}

export default SidebarMenu;


