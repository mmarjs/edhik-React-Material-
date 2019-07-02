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

export default function FooterTwo(props) {

   const { social, session, categories, about } = props.data;
   return (
      <footer className="iron-footer-v2">
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
