/**
 * site header three component
 */
/* eslint-disable */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

// components
import LanguageProvider from "./LanguageProvider";
import HeaderMenu from "./HeaderMenu";
import CurrencyProvider from "./CurrencyProvider";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logout from "./Logout";
import SearchBoxV3 from './SearchBoxV3';
import SidebarMenu from '../sidebar';
import FixedHeader from '../headers/FixedHeader';
import SearchBox from './SearchBox';

class HeaderThree extends React.Component {
   state = {
      fixedHeader: false
   }

   componentWillMount() {
      window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.hideBar);
   }

   //Function to show and hide fixed header
   hideBar = () => {
      const { fixedHeader } = this.state;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.scrollTop >= 200 ?
         !fixedHeader && this.setState({ fixedHeader: true })
         :
         fixedHeader && this.setState({ fixedHeader: false });
   }

   render() {
      return (
         <div>
            <AppBar position="static"
               className={`iron-header-wrapper bg-primary iron-header-v3 ${(this.state.fixedHeader) ? 'header-fixed' : ''}`}
            >
               <div className="iron-header-top">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item md={6} lg={6} xl={6} className="d-flex justify-content-start align-items-center" >
                           <div className="iron-header-widgets d-flex justify-content-start align-items-center">
                              <div className="widget-text"><span className="base-color">Welcome to our store</span></div>
                              <LanguageProvider />
                              <CurrencyProvider />
                           </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="d-flex justify-content-end align-items-center" >
                           <div className="iron-header-widgets d-flex justify-content-end align-items-center ">
                              <Cart />
                              <Wishlist />
                              <Logout />
                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <div className="iron-header-middle py-md-25 py-10">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center justify-content-lg-start align-items-center" >
                           <Link to="/" className="iron-app-logo text-md-center d-inline-block">
                              <img src={require("../../../assets/images/logo-dark.png")} alt="header-logo" />
                              {/* <Typography variant="title" color="inherit" className="text-uppercase ">  
                                        embryo
                                    </Typography> */}
                           </Link>
                        </Grid>
                        <Grid item md={6} lg={6} xl={6} className="d-flex justify-content-end align-items-center" >
                           <SearchBoxV3 />
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <div className="iron-header-bottom">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                           <div className="position-relative">
                              <HeaderMenu />
                              <SidebarMenu />
                              <SearchBox />
                           </div>
                        </Grid>
                     </Grid>

                  </div>
               </div>
               <FixedHeader />
            </AppBar>
         </div>
      );
   }
}

export default HeaderThree;