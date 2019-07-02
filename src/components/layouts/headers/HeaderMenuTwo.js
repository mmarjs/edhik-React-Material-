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

class HeaderMenuTwo extends Component {
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
            {megaMenudata.map((megaMenuItem, index) => {
               if (megaMenuItem && megaMenuItem.megamenu != null) {
                  return (
                     <li key={index} className="mega-menu">
                        <a className="each_category_name" href="javascript:void(0)">
                           <IntlMessages id={megaMenuItem.categories_name} />
                        </a>
                              {megaMenuItem.children.length !== 0 &&
                           <Fragment>
                                 <ul className="sub-menu mb-0 d-flex">
                                 {megaMenuItem.children && megaMenuItem.children.map((item, index) => (
                                    <li className="category_blocks" key={index}>
                                       <a className="category_block_header" href="javascript:void(0)">{item.categories_name}</a>
                                       <ul className="category_item_container mb-0">
                                          {item.children !=null && item.children.map((item_child, index) => (
                                             <li className="category_items" key={index}>
                                                <a className="category_item_links" href="javascript:void(0)">
                                                   {item_child.categories_name}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </li>
                                 ))}
                              </ul>
                              <div className="menu_overlay"></div>
                           </Fragment>
                              }
                     </li>
                  )
               }
               return (
                  <li key={index}>
                     <Link to={megaMenuItem.url}><IntlMessages id={megaMenuItem.categories_name} /></Link>
                  </li>
               )
            })}
         </ul>
      </div>
   );
         }
      }

export default HeaderMenuTwo;
