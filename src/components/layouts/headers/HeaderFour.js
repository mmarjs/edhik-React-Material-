/**
 * site header two component
 */
/* eslint-disable */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";

// components
import FixedHeader from '../headers/FixedHeader';
import AppConfig from '../../../constants/AppConfig';
import  { Link } from 'react-router-dom';

class HeaderFour extends React.Component {

   state = {
      fixedHeader: false,
      query: '',
      categories: [],
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
   onSuggestionSelected = (_, { suggestion }) => {
      const [
        category,
      ] = suggestion.instant_search.facets.exact_matches.categories;
  
      this.setState({
        query: suggestion.query,
        categories:
          category && category.value !== 'ALL_CATEGORIES' ? [category.value] : [],
      });
    };
  
    onSuggestionCleared = () => {
      this.setState({
        query: '',
        categories: [],
      });
    };

   render() {
      return (
         <div>
            <AppBar position="static" className={`iron-header-wrapper bg-primary iron-header-v2 ${(this.state.fixedHeader) ? 'header-fixed' : ''}`}>
               <div className="iron-header-top py-0 bg-primary">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} className="d-flex justify-content-start align-items-center" >
                           <div className="iron-app-logo text-md-center">
                           <Link to="/">
                              <img src={AppConfig.AppLogo} alt="header-logo" />
                              </Link>
                              {/* <Typography variant="title" color="inherit" className="text-uppercase ">  
                                       Embryo
                                    </Typography> */}
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

export default HeaderFour;