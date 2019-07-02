/**
 * product slider component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import RatingStar from './RatingStar';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../helpers";

// component
import CurrencyIcon from '../global/currency/CurrencyIcon';

function ProductItem(props) {

   const { data, onProductAddToCart, onProductAddToWhislist } = props;
   return (
      <Card>
         <div className="iron-overlay-wrap position-relative">
            <Link to={`/products/${data.type}/${data.objectID}`} className='d-block'>
               <CardMedia
                  height="140"
                  component="img"
                  image={require(`../../assets/images/${data.image}`)}
               />
            </Link>
            <div className="iron-overlay-content">
               {data.popular && data.popular === true ?
                  <span className="custom-badge font-normal text-14">popular</span>
                  :
                  null
               }
               <h6 className="price-wrap-v2 ">
                  <CurrencyIcon /> {data.price}
               </h6>
            </div>
         </div>
         <CardContent className="iron-product-content p-15">
            <h6 className="text-truncate mb-5"><Link to={`/products/${data.type}/${data.objectID}`} className=" font-bold">{data.name}</Link></h6>
            <RatingStar></RatingStar>
            <div className="iron-btn-grp">
               {!isProductExist(data.objectID) ?
                  (
                     <IconButton className="btn-wrap" onClick={onProductAddToCart}>
                        <i className="material-icons">shopping_cart</i>
                     </IconButton>
                  )
                  :
                  (
                     <Link to='/cart'>
                        <IconButton className="btn-wrap">
                           <i className="material-icons">create</i>
                        </IconButton>
                     </Link>
                  )
               }
            </div>
         </CardContent>
         <CardActions className="post-action p-15 d-flex justify-content-between align-items-center">
            {!productExitsInWishlist(data.objectID) ?
               <Button
                  onClick={onProductAddToWhislist}

               >
                  <i className="material-icons">favorite</i>
               </Button>
               :
               <Button
                  className="active"
               >
                  <i className="material-icons">favorite</i>
               </Button>
            }
            <Button component={Link} to='/cart'>
               <i className="material-icons">visibility</i>
            </Button>
         </CardActions>
      </Card>
   );
}

class ProductSliderTwo extends React.Component {

   state = {
      selectedTab: 0
   }

   //define function for select tab
   onTabClick(index) {
      this.setState({ selectedTab: index })
   }

   // define function for add product in cart
   onAddToCart(product) {
      this.props.addProductItem(product);

      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in cart', 'success')
      }, 500)
   }

   //add product to wishlist
   addProductToWishList(productdata) {
      this.props.addToWishlist(productdata);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in whislist', 'success')
      }, 500)
   }


   render() {
      const settings = {
         dots: false,
         infinite: true,
         arrows: false,
         speed: 500,
         autoplay: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 961,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 500,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      };

      const { selectedTab } = this.state;
      const { productdata } = this.props;
      return (
         <div className="product-categories-slider">
            <div className="iron-custom-tab-container">
               <div className="iron-tab-bar mb-30">
                  {productdata && Object.keys(productdata).map((tab, index) => {
                     return (
                        <Button
                           //variant={selectedTab === index ? "text" : "text"}
                           key={index}
                           onClick={() => this.onTabClick(index)}
                           className={`mr-10 iron-tab-btn ${selectedTab === index ? "active" : ""}`}
                        >
                           {tab}
                        </Button>
                     )
                  })}
               </div>
               <div className="iron-tab-content iron-tab-content-v2">
                  <div className="iron-product-slider iron-product-wrap slider-style">
                     {productdata && Object.keys(productdata).map((tab, key) => {
                        if (key === selectedTab) {
                           return (
                              <div className="iron-tab-content" key={key}>
                                 <Slider {...settings}>
                                    {productdata && productdata[tab].map((data, index) => (
                                       <div key={index} className="iron-product-item post-rounded">
                                          <ProductItem
                                             data={data}
                                             onProductAddToCart={() => this.onAddToCart(data)}
                                             onProductAddToWhislist={() => this.addProductToWishList(data)}
                                          />
                                       </div>
                                    ))}
                                 </Slider>
                              </div>
                           )
                        }
                        return null;
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}

export default connect(mapStateToProps, {
   addProductItem,
   addToWishlist,
   showAlert
})(ProductSliderTwo);
