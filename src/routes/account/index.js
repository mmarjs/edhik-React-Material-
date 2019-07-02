/**
 * account detail page
 */
/* eslint-disable */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import './account.scss'

//components
import OrderHistory from './order-history';
import Profile from './profile';
import UserAddress from './address';
import UserCards from './cards';
import EditUser from './edit';
import OrderDetails from './order-history/order-detail';


export default function Account({ match }) {
   const userData = [
      {
         icon: 'history',
         title: 'order history',
         path: "order-history",
      },
      {
         icon: 'account_circle',
         title: 'profile',
         path: "profile",
      },
      {
         icon: 'location_on',
         title: 'address',
         path: "address",
      },
      {
         icon: 'credit_card',
         title: 'saved cards',
         path: "cards",
      }
   ]

   return (
      <div>
         <div className="container">
            
                  <div className="profile_row">
                     <div className="profile_sidebar">
                        <div className="profile_card">
                           <div className="user_profile_thumb">
                              <div className="userThumb_image male"></div>
                              Hi,
                              <div className="user_profile_name"><b>John Doe</b></div>
                           </div>
                        </div>
                        <div className="profile_card profile_menu_container">
                           <ul className="profile_sidebar_menu_list">
                              {userData.map((userdata, index) => (
                                 <li key={index} className="profile_sidebar_meu_item">
                                    <Link
                                       className="d-flex justify-content-start align-items-center"
                                       to={`${match.url}/${userdata.path}`}
                                    >
                                       <i className="material-icons">{userdata.icon}</i>
                                       {userdata.title}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
   
                     <div className="profile_detail_panel">
                        <div className="profile_card">
                           <Switch>
                              <Redirect exact from={`${match.url}`} to={`${match.url}/order-history`} />
                              <Route exact path={`${match.url}/order-history`} component={OrderHistory}/>
                              {/* <Route exact path={`${match.url}/order-history/:id`} component={OrderDetails}/> */}
                              <Route path={`${match.url}/profile`} component={Profile}/>
                              <Route path={`${match.url}/address`} component={UserAddress}/>
                              <Route path={`${match.url}/cards`} component={UserCards}/>
                              <Route path={`${match.url}/edit`} component={EditUser}/>
                           </Switch>
                        </div>
                     </div>
                  </div>
         </div>
      </div>
   )
}
