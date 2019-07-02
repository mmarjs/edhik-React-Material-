/**
 * hit component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from "@material-ui/core/IconButton";
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../../../helpers";

// components
import CurrencyIcon from '../../../global/currency/CurrencyIcon';
import RatingStar from '../../../widgets/RatingStar';

class Hit extends React.Component {

   //Function to add product in cart
   onAddToCart(hit) {
      this.props.addProductItem(hit);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in cart', 'success')
      }, 500)
   }

   //Add product to wishlist
   addProductToWishList(product) {
      this.props.addToWishlist(product);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in wishlist!', 'success')
      }, 500)
   }

   render() {
      const { hit } = this.props;
      return (
         <Card className="iron-product-item post-rounded iron-shadow">
            <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
               <Link to='/products/men/5' className='d-block'>
                  <CardMedia
                     height="140"
                     component="img"
                     image={hit.image}
                  />
               </Link>
               <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                  <div className="iron-overlay-holder">
                     {!productExitsInWishlist(hit.objectID) ?
                        (
                           <IconButton onClick={() => this.addProductToWishList(hit)}>
                              <i className="material-icons">favorite</i>
                           </IconButton>
                        )
                        :
                        (
                           <IconButton className="active">
                              <i className="material-icons">favorite</i>
                           </IconButton>
                        )
                     }
                  </div>
               </div>
            </div>
            <Divider />
            <CardContent className="iron-product-content p-20 pt-30 border">
               <h5 className="text-truncate"><Link to='/products/men/5'>{hit.name}</Link></h5>
               <div className="d-flex justify-content-between align-items-center">
                  <div className="price-wrap">
                     <span><CurrencyIcon /> {hit.price}</span>
                  </div>
                  <RatingStar></RatingStar>
               </div>
               <div className="iron-btn-grp">
                  {!isProductExist(hit.objectID) ?
                     (
                        <Fragment>
                           <IconButton className="btn-wrap" onClick={() => this.onAddToCart(hit)}>
                              <i className="material-icons">shopping_cart</i>
                           </IconButton>
                        </Fragment>
                     )
                     :
                     (
                        <IconButton component={Link} to='/cart' className="btn-wrap">
                           <i className="material-icons">visibility</i>
                        </IconButton>
                     )
                  }
               </div>
            </CardContent>
         </Card>
      )
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}

export default connect(mapStateToProps, {
   addProductItem,
   addToWishlist,
   showAlert
})(Hit);
