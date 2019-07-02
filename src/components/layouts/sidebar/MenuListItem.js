/**
 * Menu List Item
 */
import React, { Fragment, Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

//Intl message
import IntlMessages from '../../../util/IntlMessages';

class MenuListItem extends Component {

   state = {
      menuOpen: false,
      subMenuOpen: ''
   }

   /**
   * On Toggle  Menu
   */
   onToggleMenu() {
      this.setState({ menuOpen: !this.state.menuOpen });
   }

   /**
   * On Toggle Collapse Menu
   */
   onToggleCollapseMenu(key) {
      if (this.state.subMenuOpen === '') {
         this.setState({ subMenuOpen: key });
      } else {
         this.setState({ subMenuOpen: '' });
      }
   }

   render() {

      const { subMenuOpen, menuOpen } = this.state;
      const { menu } = this.props;
      if (menu.child_routes != null) {
         return (
            <Fragment>
               <ListItem button component="li" onClick={this.onToggleMenu.bind(this)} className={`list-item ${classNames({ 'item-active': menuOpen })}`}>
                  <span className="d-flex justify-content-start align-items-center">
                     <ListItemIcon>
                        <i className="material-icons">{menu.icon}</i>
                     </ListItemIcon>
                     <IntlMessages id={menu.menu_title} />
                  </span>
               </ListItem>
               <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                  {(menu.type && menu.type === 'subMenu') ?
                     <List component="ul" className="sub-menu">
                        {menu.child_routes.map((subMenu, index) => {
                           return (
                              <ListItem key={index} button component="li">
                                 <Button
                                    to={subMenu.path}
                                    component={Link}
                                    className="tab-element"
                                    onClick={this.props.closeDrawer}
                                 >
                                    <ListItemIcon>
                                       <i className="material-icons">{subMenu.icon}</i>
                                    </ListItemIcon>
                                    <IntlMessages id={subMenu.menu_title} />
                                 </Button>
                                 {/* <Link
                                                to={subMenu.path}
                                                className="d-flex justify-content-start align-items-center"
                                                onClick=""
                                            >
                                                <ListItemIcon>
                                                    <i className="material-icons">{subMenu.icon}</i>
                                                </ListItemIcon>
                                                <IntlMessages id={subMenu.menu_title} />
                                            </Link> */}
                              </ListItem>
                           )
                        })}
                     </List>
                     :
                     <List component="ul" className="sub-menu2">
                        {menu.child_routes && Object.keys(menu.child_routes).map((subMenu, index) => {
                           return (
                              <Fragment key={index}>
                                 <ListItem
                                    className={`object-list ${classNames({ 'item-active': subMenuOpen === subMenu })}`}
                                    button
                                    component="li"
                                    onClick={() => this.onToggleCollapseMenu(subMenu)}
                                 >
                                    <span>
                                       <IntlMessages id={subMenu} />
                                    </span>
                                 </ListItem>
                                 <Collapse in={subMenuOpen === subMenu} timeout="auto" unmountOnExit>
                                    <List component="ul" className="sub-menu">
                                       {menu.child_routes[subMenu].map((nestedMenu, nestedKey) => (
                                          <ListItem button component="li" key={nestedKey}>
                                             <Button
                                                to={nestedMenu.path}
                                                component={Link}
                                                className="tab-element"
                                                onClick={this.props.closeDrawer}
                                             >
                                                <ListItemIcon>
                                                   <i className="material-icons">{nestedMenu.icon}</i>
                                                </ListItemIcon>
                                                <IntlMessages id={nestedMenu.menu_title} />
                                             </Button>
                                             {/* <Link to={nestedMenu.path} className="d-flex justify-content-start align-items-center">
                                                                <ListItemIcon>
                                                                    <i className="material-icons">{nestedMenu.icon}</i>
                                                                </ListItemIcon>
                                                                <IntlMessages id={nestedMenu.menu_title} />
                                                            </Link> */}
                                          </ListItem>
                                       ))}
                                    </List>
                                 </Collapse>
                              </Fragment>
                           )
                        })}
                     </List>
                  }
               </Collapse>
            </Fragment>
         )
      }
      return (
         <ListItem button component="li">
            <Button
               to={menu.path}
               component={Link}
               className="tab-element"
               onClick={this.props.closeDrawer}
            >
               <ListItemIcon>
                  <i className="material-icons">{menu.icon}</i>
               </ListItemIcon>
               <IntlMessages id={menu.menu_title} />
            </Button>
            {/* <Link to={menu.path} className="d-flex justify-content-start align-items-center">
                    <ListItemIcon>
                        <i className="material-icons">{menu.icon}</i>
                    </ListItemIcon>
                    <IntlMessages id={menu.menu_title} />

                </Link> */}
         </ListItem>
      );
   }
}

export default MenuListItem;
