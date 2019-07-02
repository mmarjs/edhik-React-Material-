/**
 * site footer one component
 */
/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';

// intl message
import IntlMessages from '../../../util/IntlMessages';

//App Config
import AppConfig from '../../../constants/AppConfig';

export default function FooterOne(props) {

   const { social, session, categories, about } = props.data;
   return (
      <footer className="iron-footer-v1">
         <div className="iron-footer-top ">
            <div className="container" >
               <Grid container spacing={24} >
                  <Grid item xs={12} md={12} lg={4} xl={4} >
                     <div>
                        <div className="footer-widget-title mb-30">
                           <h6>about company</h6>
                        </div>
                        <div className="footer-content">
                           <p>{AppConfig.AboutUs}</p>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                     <div>
                        <div className="footer-widget-title mb-30">
                           <h6>about</h6>
                        </div>
                        <List component="nav" className="iron-footer-menu-list">
                           {
                              about.map((aboutdata, key) => {
                                 return (
                                    <li key={key} className="list-item">
                                       <Link to={aboutdata.path} >
                                          <IntlMessages id={aboutdata.menu_title} />
                                       </Link>
                                    </li>
                                 )
                              })
                           }
                        </List>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                     <div>
                        <div className="footer-widget-title mb-30">
                           <h6>session</h6>
                        </div>
                        <List component="nav" className="iron-footer-menu-list">
                           {
                              session.map((session, key) => {
                                 return (
                                    <li key={key} className="list-item">
                                       <Link to={session.path}>
                                          <IntlMessages id={session.menu_title} />
                                       </Link>
                                    </li>
                                 )
                              })
                           }
                        </List>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                     <div>
                        <div className="footer-widget-title mb-30">
                           <h6> categories</h6>
                        </div>
                        <List component="nav" className="iron-footer-menu-list">
                           {
                              categories.map((category, key) => {
                                 return (
                                    <li key={key} className="list-item">
                                       <Link to={category.path}>
                                          <IntlMessages id={category.menu_title} />
                                       </Link>
                                    </li>
                                 )
                              })
                           }
                        </List>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                     <div>
                        <div className="footer-widget-title mb-30">
                           <h6>social</h6>
                        </div>
                        <List component="nav" className="iron-footer-menu-list">
                           {
                              social.map((social, key) => {
                                 return (
                                    <li key={key} className="list-item">
                                       <Link to={social.path}>
                                          <IntlMessages id={social.menu_title} />
                                       </Link>
                                    </li>
                                 )
                              })
                           }
                        </List>
                     </div>
                  </Grid>
               </Grid>
               <hr className="footer-hr mt-50" />
            </div>
         </div>
         <div className="iron-footer-bottom">
            <div className="container">
               <Grid container >
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="text-center text-lg-left mb-30 mb-lg-0">
                     <div>
                        <img src={require('../../../assets/images/payment-method.png')} alt='payment-method' />
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                     <div className="iron-copyright text-lg-right text-center">
                        <p className="mb-0">{AppConfig.CopyrightText}</p>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>
      </footer>
   )
}
