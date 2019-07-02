/* eslint-disable */
/**
 * Header menu component
 */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// nav links
import navLinks from '../../../assets/data/NavLinks.js';

class HeaderMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         megaMenudata: []
      }
   }

   componentWillMount() {
     fetch("http://api.edhik.com/megamenu/api/getMegamenu",{
      method: "POST"}).then(
          response => response.json()
      )
      .then(response => {
         if(response.code === "SUCCESS") {
            this.setState({
               megaMenudata: response.data
            })
         }
      })
   }
   
   render() {
      const { megaMenudata } = this.state;
   return (
      <div className="horizontal-menu">
         <ul className="d-inline-block iron-header-menu mb-0">
            {navLinks.map((navLink, index) => {
               if (navLink.child_routes && navLink.child_routes != null) {
                  return (
                     <li key={index} className={classnames({ 'mega-menu': navLink.mega })}>
                        <a href="javascript:void(0)">
                           <IntlMessages id={navLink.menu_title} />
                        </a>
                        {(navLink.type && navLink.type === 'subMenu') ?
                           <Fragment>
                              {navLink.child_routes !== null &&
                                 <ul className="sub-menu mb-0">
                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                       <li key={index}>
                                          <Link to={subNavLink.path}>
                                             <IntlMessages id={subNavLink.menu_title} />
                                          </Link>
                                       </li>
                                    ))}
                                 </ul>
                              }
                           </Fragment>
                           :
                           <Fragment>
                              { megaMenudata !== null >  0 &&
                                 <ul className="sub-menu mb-0 d-flex">
                                    {megaMenudata && megaMenudata.map((item, index) => (
                                       <li key={index}>
                                          <a href="javascript:void(0)">{item.categories_name}</a>
                                          <ul className="sub-menu mb-0">
                                             {item.children !=null && item.children.map((item_child, index) => (
                                                <li key={index}>
                                                   <a href="javascript:void(0)">
                                                      {item_child.categories_name}
                                                   </a>
                                                </li>
                                             ))}
                                          </ul>
                                       </li>
                                    ))}
                                 </ul>
                              }
                        </Fragment>
                        }
                     </li>
                  )
               }
               return (
                  <li key={index}>
                     <Link to={navLink.path}><IntlMessages id={navLink.menu_title} /></Link>
                  </li>
               )
            })}
         </ul>
      </div>
   );
         }
      }

export default HeaderMenu;
