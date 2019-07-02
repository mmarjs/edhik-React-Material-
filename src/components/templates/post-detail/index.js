/**
 * post detail component
 */
/* eslint-disable */
import React, { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Select from "@material-ui/core/Select";
import "./product.scss";
//connect to store
import { connect } from "react-redux";

//components
import SocialIcons from "../../widgets/SocialIcons";
import CurrencyIcon from "../../global/currency/CurrencyIcon";
import ProductReview from "../../global/review-popup/ProductReview";

// actions
import {
  addProductItem,
  showAlert,
  addToWishlist,
  buyNow
} from "../../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../../helpers";

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb."); // eslint-disable-line no-alert
}

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // newImage: this.props.data.image,
      variations: {
        color: "",
        size: "",
        quantity: ""
      },
      data: this.props.data,
      nav1: null,
      nav2: null
    };
    this.reviewDialog = React.createRef();
  }


  componentDidMount() {
    this.setState({
      // newImage: this.props.data.image,
      data: this.props.data,
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  componentDidUpdate() {
    this.updateData();
  }

  //update state data
  updateData() {
    let { data } = this.state;
    let newData = this.props.data;
    if (data.objectID !== newData.objectID) {
      this.setState({
        // newImage: newData.image,
        data: newData
      });
    }
  }

  // //function for preview images
  // changePreviewImage(image) {
  //   this.setState({
  //     newImage: image
  //   });
  // }

  buyNow() {
    this.props.buyNow(this.state.data);
    this.props.history.push("/check-out");
  }

  //function for product variation
  changeProductVariation(type, e) {
    this.setState({
      variations: {
        ...this.state.variations,
        [type]: e.target.value
      }
    });
  }

  //function for review popup ref.
  postReviewOpen() {
    this.reviewDialog.current.open();
  }

  //add product to wishlist
  addProductToWishList(productdata) {
    this.props.addToWishlist(productdata);
    setTimeout(() => {
      this.props.showAlert(
        "Your product Is Successfully added in whislist",
        "success"
      );
    }, 500);
  }

  // define function for add product in cart
  onAddToCart(product) {
    this.props.addProductItem(product);
    setTimeout(() => {
      this.props.showAlert(
        "Your product Is Successfully added in cart",
        "success"
      );
    }, 500);
  }

  render() {
    const { newImage } = this.state;
    const {
      name,
      product_code,
      availablity,
      price,
      tags,
      desc,
      features,
      image_gallery,
      type,
      objectID,
      product_details
    } = this.state.data;
    // const settings = {
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    // };
    // const settings2 = {
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   dots: false,
    //   centerMode: true,
    //   focusOnSelect: true
    // };
    const rimProps = {
      enlargedImagePortalId: 'portal',
      enlargedImageContainerDimensions: {
          width: '200%',
          height: '100%'
      }
    }
    return (
      <div className="single_product_page">
        <div className="scroll_stick_container">
          <div className="product_image_container">
            <Fragment>
              {!productExitsInWishlist(objectID) ? 
              (<i onClick={() => this.addProductToWishList(this.state.data)} className="material-icons wishlist_icon">favorite</i>) 
              : 
              (<i className="material-icons wishlist_icon active">favorite</i>)}
            </Fragment>
            <Slider  className="slider_navigation_img" asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} arrows={false}  slidesToShow={6} dots={false} slidesToScroll={1}  swipeToSlide={true} verticalSwiping={true} vertical={true} focusOnSelect={true}>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media" style={{backgroundImage:"url(https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media" style={{backgroundImage:"url(https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media" style={{backgroundImage:"url(https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media" style={{backgroundImage:"url(https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media video" style={{backgroundImage:"url(https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
                <div className="custom_slick_nav_slider">
                  <div className="slick_nav_media" style={{backgroundImage:"url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"}}>
                  </div>
                </div>
              </Slider>
            <Slider  className="slider_preview_img" arrows={false} slidesToShow={1} slidesToScroll={1}  asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
              <div>
                <div className="align_slick_media">
                      <ReactImageMagnify    
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: `https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`
                          },
                          largeImage: {
                            src: `https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
                            width: 1260,
                            height: 750
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                          enlargedImageContainerClassName:"full_image_preview_visible",
                          imageClassName:"slick_full_media",
                        }}
                      {...rimProps}
                      />
                </div>
              </div>
              <div>
                <div className="align_slick_media">
                  <ReactImageMagnify    
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: `https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`
                          },
                          largeImage: {
                            src: `https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
                            width: 1260,
                            height: 750
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                          enlargedImageContainerClassName:"full_image_preview_visible",
                          imageClassName:"slick_full_media",
                        }}
                      {...rimProps}
                      />
                </div>
              </div>
              <div>
                <div className="align_slick_media">
                  <ReactImageMagnify    
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: `https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`
                          },
                          largeImage: {
                            src: `https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
                            width: 1260,
                            height: 750
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                          enlargedImageContainerClassName:"full_image_preview_visible",
                          imageClassName:"slick_full_media",
                        }}
                      {...rimProps}
                      />
                </div>
              </div>
              <div>
                <div className="align_slick_media">
                  <ReactImageMagnify    
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: `https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`
                          },
                          largeImage: {
                            src: `https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
                            width: 1260,
                            height: 750
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                          enlargedImageContainerClassName:"full_image_preview_visible",
                          imageClassName:"slick_full_media",
                        }}
                      {...rimProps}
                      />
                </div>
              </div>
              <div>
                <div className="align_slick_media">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/m-SJ3WY-WlY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div>
                <div className="align_slick_media">
                  <ReactImageMagnify    
                        {...{
                          smallImage: {
                            isFluidWidth: true,
                            src: `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`
                          },
                          largeImage: {
                            src: `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
                            width: 1260,
                            height: 750
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                          enlargedImageContainerClassName:"full_image_preview_visible",
                          imageClassName:"slick_full_media",
                        }}
                      {...rimProps}
                      />
                </div>
              </div>
            </Slider>
            <div className="product_page_actions">
              {!isProductExist(objectID) ? (
                <Button
                  className="button btn btn-active btn-lg mr-15"
                  onClick={() => this.onAddToCart(this.state.data)}
                >
                  add to cart
                </Button>
              ) : (
                <Link to="/cart">
                  <Button className="button btn btn-active btn-lg mr-15">
                    view cart
                  </Button>
                </Link>
              )}

              <Button
                onClick={this.buyNow.bind(this)}
                className="button btn-base btn-lg mb-20 mb-sm-0">
                buy now
              </Button>
            </div>
          </div>
            <div className="product_full_details">
              <div id="portal"></div>
              <Breadcrumbs
              className="product_breadcrumbs"
                separator={<NavigateNextIcon fontSize="small" />}
                arial-label="Breadcrumb">
                <Link color="inherit" to="/" onClick={handleClick}>
                  Material-UI
                </Link>
                <Link color="inherit" to="/lab/about/" onClick={handleClick}>
                  Lab
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
              </Breadcrumbs>
              <h3>{name}</h3>
              {/* <div className="mb-15">
                <a
                  href="javascript:void(0)"
                  className="text-underline text-uppercase text-14 d-inline-block dark-color"
                  onClick={() => this.postReviewOpen()}>
                  add a review
                </a>
              </div> */}

              <h4 className="active-color">
                <CurrencyIcon /> {price}
              </h4>
              <ul className="no-style mb-20">
                <li className="mb-10">
                  <span className="font-medium text-14"> Availablity </span> :
                  {availablity ? (
                    <span className="text-14 ml-5">In Stocks</span>
                  ) : null}
                </li>
                <li className="mb-10">
                  <span className="font-medium text-14"> Product Code </span> :{" "}
                  <span className="text-14">{product_code}</span>
                </li>
                <li className="mb-10">
                  <span className="font-medium text-14"> Tags </span> :
                  {tags &&
                    tags.map((tag, index) => {
                      return (
                        <span key={index} className="text-14 ml-5">
                          {tag}
                        </span>
                      );
                    })}
                </li>
              </ul>
              <div>
                <form className="product-values">
                  {type === "men" || type === "women" ? (
                    <Fragment>
                      <FormControl className="iron-select-width2">
                        <InputLabel htmlFor="age-simple">color</InputLabel>
                        <Select
                          value={this.state.variations.color}
                          onChange={e =>
                            this.changeProductVariation("color", e)
                          }
                          inputProps={{
                            name: "age",
                            id: "age-simple"
                          }}
                        >
                          <MenuItem value={"red"}>red</MenuItem>
                          <MenuItem value={"green"}>green</MenuItem>
                          <MenuItem value={"blue"}>blue</MenuItem>
                          <MenuItem value={"yellow"}>yellow</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className="iron-select-width2">
                        <InputLabel htmlFor="age-simple">size</InputLabel>
                        <Select
                          value={this.state.variations.size}
                          onChange={e => this.changeProductVariation("size", e)}
                          inputProps={{
                            name: "age",
                            id: "age-simple"
                          }}
                        >
                          <MenuItem value={36}>36</MenuItem>
                          <MenuItem value={38}>38</MenuItem>
                          <MenuItem value={40}>40</MenuItem>
                          <MenuItem value={42}>42</MenuItem>
                          <MenuItem value={44}>44</MenuItem>
                          <MenuItem value={46}>46</MenuItem>
                          <MenuItem value={48}>48</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className="iron-select-width2">
                        <InputLabel htmlFor="age-simple">quantity</InputLabel>
                        <Select
                          value={this.state.variations.quantity}
                          onChange={e =>
                            this.changeProductVariation("quantity", e)
                          }
                          inputProps={{
                            name: "age",
                            id: "age-simple"
                          }}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                        </Select>
                      </FormControl>
                    </Fragment>
                  ) : (
                    <FormControl className="iron-select-width2">
                      <InputLabel htmlFor="age-simple">quantity</InputLabel>
                      <Select
                        value={this.state.variations.quantity}
                        onChange={e =>
                          this.changeProductVariation("quantity", e)
                        }
                        inputProps={{
                          name: "age",
                          id: "age-simple"
                        }}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </form>
              </div>
             
              <div className="short-desc">
                <p>{desc}</p>
              </div>
              <div>
                <ul className="bullets-list mb-0">
                  {features &&
                    features.map((feature, index) => {
                      return (
                        <li key={index} className="mb-10">
                          {feature}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="product-details">
                <h4>Product Details</h4>
                <ul className="bullets-list mb-0">
                  {product_details &&
                    product_details.map((details, index) => {
                      return (
                        <li key={index} className="mb-10">
                          {Object.keys(details)[0]}:{" "}
                          {details[Object.keys(details)[0]]}
                        </li>
                      );
                    })}
                </ul>
              </div>
              

              <div className="d-flex justify-content-start align-items-center">
                <span className="d-inline-block mr-15 text-14">Share Now</span>
                <div className="detail-product-share">
                  <SocialIcons />
                </div>
              </div>
            </div>
          
        </div>
        <ProductReview ref={this.reviewDialog} />
      </div>
    );
  }
}
const mapStateToProps = ({ ecommerce }) => {
  const { cart, wishlist } = ecommerce;
  return { cart, wishlist };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      addProductItem,
      addToWishlist,
      showAlert,
      buyNow
    }
  )(PostDetail)
);
