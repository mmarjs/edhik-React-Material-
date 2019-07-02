/**
 * Home Page One
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

//component
import BannerSlider from '../../components/widgets/BannerSlider';
import ProductSliderThree from '../../components/widgets/ProductSliderThree';
import Sales from '../../components/widgets/Sales';
import Testimonial from '../../components/widgets/Testimonial';
import BlogGrid from '../../components/widgets/BlogGrid3';
import PartenersSliderV2 from '../../components/widgets/PartenersSliderV2';
import SubscribeBox from '../../components/widgets/SubscribeBox';
import BestDeal from '../../components/widgets/BestDeal';
import Features from '../../components/widgets/Features';
import ContentLoader from '../../components/global/loaders/ContentLoader';

// firebase 
import firebase from '../../firebase';
import 'firebase/database';

class HomePageOne extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         banner: null,
         products: null,
         blogs: null,
         siteFeatures: [],
         testimonial: [],
         clients: []
      }
   }

   componentDidMount() {
      this.getBannerData();
      this.getProducts();
      this.getblogs();
      this.getSiteFeatures();
      this.getTestimonial();
      this.getClients()
   }

   //get banner data
   getBannerData() {
      const bannerRef = firebase.database().ref('banner_one');
      bannerRef.on('value', (snapshot) => {
         let banner = snapshot.val();
         this.setState({
            banner: banner
         });
      });
   }

   //get products data
   getProducts() {
      const productsRef = firebase.database().ref('products');
      productsRef.on('value', (snapshot) => {
         let products = snapshot.val();
         this.setState({
            products: products
         });
      });
   }

   //get blogs data
   getblogs() {
      const blogsRef = firebase.database().ref('blogs');
      blogsRef.on('value', (snapshot) => {
         let blogs = snapshot.val();
         this.setState({
            blogs: blogs
         });
      });
   }

   //site features data
   getSiteFeatures() {
      const siteFeaturesRef = firebase.database().ref('site_features');
      siteFeaturesRef.on('value', (snapshot) => {
         let siteFeatures = snapshot.val();
         this.setState({
            siteFeatures: siteFeatures
         });
      });
   }

   //get testimonial data
   getTestimonial() {
      const testimonialRef = firebase.database().ref('testimonial');
      testimonialRef.on('value', (snapshot) => {
         let testimonial = snapshot.val();
         this.setState({
            testimonial: testimonial
         });
      });
   }

   //get clients data
   getClients() {
      const clientsRef = firebase.database().ref('clients');
      clientsRef.on('value', (snapshot) => {
         let clients = snapshot.val();
         this.setState({
            clients: clients
         });
      });
   }

   render() {

      const { banner, products, blogs, siteFeatures, testimonial, clients } = this.state;

      return (
         <Fragment>
            {banner !== null && products !== null && blogs !== null ?
               < div className="iron-home-wrap" >
                  {/* banner section start */}
                  < div className="iron-banner-wrapper section-pad" >
                     <div className="container">
                        <Grid container spacing={32} className="my-0">
                           <Grid item xs={12} sm={12} md={12} lg={8} xl={8} className="py-0 mb-25 mb-lg-0">
                              <div>
                                 <BannerSlider sliderdata={banner} />
                              </div>
                           </Grid>
                           <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className="iron-aside-banner-wrap py-0 d-md-block d-sm-flex mb-sm-30 mb-lg-0">
                              <div className="iron-aside-banner rounded iron-shadow mb-lg-30 mb-sm-0">
                                 <Link to="/shop">
                                    <img src={require("../../assets/images/aside-1.jpg")} alt="aside-1" height="315" width="547" />
                                 </Link>
                              </div>
                              <div className="iron-aside-banner rounded iron-shadow">
                                 <Link to="/shop">
                                    <img src={require("../../assets/images/aside-2.jpg")} alt="aside-2" height="315" width="547" />
                                 </Link>
                              </div>
                           </Grid>
                        </Grid>
                     </div>
                  </div >
                  {/* features section start */}
                  < div className="iron-features-wrap" >
                     <div className="container">
                        <Features siteFeatures={siteFeatures} />
                     </div>
                  </div >
                  {/* product tab/slider section start */}
                  < div className="iron-product-slider-wrap section-pad" >
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-sm-60 mb-40">
                           <div className="heading-title">
                              <h2>featured products</h2>
                           </div>
                        </div>
                        <div>
                           <ProductSliderThree productdata={products} />
                        </div>
                     </div>
                  </div >
                  {/* best deal section start */}
                  < div className="iron-best-deal-wrapper section-pad bg-base" >
                     <div className="container">
                        <BestDeal />
                     </div>
                  </div >
                  {/* sales section start */}
                  < div className="iron-sales-wrapper" >
                     <div className="container-fluid px-0">
                        <Sales />
                     </div>
                  </div >
                  {/* new arrival products section start */}
                  < div className="iron-product-slider-wrap section-pad" >
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-sm-60 mb-40">
                           <div className="heading-title">
                              <h2>new arrivals</h2>
                           </div>
                        </div>
                        <div>
                           <ProductSliderThree productdata={products} />
                        </div>
                     </div>
                  </div >
                  {/* testimonial section start */}
                  < div className="iron-customer-wrapper" >
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-sm-60 mb-40">
                           <div className="heading-title">
                              <h2>Customer Reviews</h2>
                           </div>
                        </div>
                        <Testimonial data={testimonial} />
                     </div>
                  </div >
                  {/* blog grid section start */}
                  < div className="section-pad pt-60" >
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-sm-60 mb-40">
                           <div className="heading-title">
                              <h2>Latest From Blogs</h2>
                           </div>
                        </div>
                        <BlogGrid blogItems={blogs} />
                     </div>
                  </div >
                  {/* subscribe box section start */}
                  < div className="bg-dark1 section-pad" >
                     <div className="container">
                        <div className="py-25">
                           <SubscribeBox />
                        </div>
                     </div>
                  </div >
                  {/* partener section start */}
                  < div className="bg-base section-pad" >
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-sm-50 mb-40">
                           <div className="heading-title">
                              <h2>Shop By Brands</h2>
                           </div>
                        </div>
                        <PartenersSliderV2 clientdata={clients} />
                     </div>
                  </div >
               </div >
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

export default HomePageOne;