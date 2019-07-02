/**
 * Home Page Three
 */
/* eslint-disable */
import React, { Fragment } from 'react';

//component
import BannerSliderThree from '../../components/widgets/BannerSliderThree';
import FeaturesV2 from '../../components/widgets/FeaturesV2';
import CollectionGallery from '../../components/widgets/CollectionGallery';
import ShopCategory from '../../components/widgets/ShopCategory';
import ProductSliderTwo from '../../components/widgets/ProductSliderTwo';
import SubscribeBoxV2 from '../../components/widgets/SubscribeBoxV2';
import PartenersSliderV2 from '../../components/widgets/PartenersSliderV2';
import DownloadApp from '../../components/widgets/DownloadApp';
import ContentLoader from '../../components/global/loaders/ContentLoader';
import CtaBannerSection from '../../components/widgets/CtaBannerSection';

// data
import shopCategory from '../../assets/data/shopCategory';

//firebase
import firebase from '../../firebase';
import 'firebase/database';


class HomePageThree extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         banner: null,
         siteFeatures: [],
         products: null,
         clients: [],
         gallery: null
      }
   }

   componentDidMount() {
      this.getBannerData();
      this.getSiteFeaturesTwo();
      this.getProducts();
      this.getGallery();
      this.getClients();
   }

   //get banner data
   getBannerData() {
      const bannerRef = firebase.database().ref('banner_three');
      bannerRef.on('value', (snapshot) => {
         let banner = snapshot.val();
         this.setState({
            banner: banner
         });
      });
   }

   //get site_features 2 data
   getSiteFeaturesTwo() {
      const siteFeaturesRef = firebase.database().ref('site_features_two');
      siteFeaturesRef.on('value', (snapshot) => {
         let siteFeatures = snapshot.val();
         this.setState({
            siteFeatures: siteFeatures
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

   //get gallery data
   getGallery() {
      const galleryRef = firebase.database().ref('collection_gallery');
      galleryRef.on('value', (snapshot) => {
         let gallery = snapshot.val();
         this.setState({
            gallery: gallery
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
      const { banner, siteFeatures, products, clients, gallery } = this.state;
      return (
         <Fragment>
            {banner !== null && products !== null && gallery !== null ?
               <div className="iron-home-v3-wrap">
                  {/* banner section start */}
                  <div className="iron-banner-wrapper section-pad">
                     <div className="container">
                        <BannerSliderThree sliderData={banner} />
                     </div>
                  </div>
                  {/* features section start */}
                  <div className="iron-features-wrap pt-md-15">
                     <div className="container">
                        <FeaturesV2 siteFeatures={siteFeatures} />
                     </div>
                  </div>
                  {/* collection gallery section start */}
                  <div className="iron-collection-gallery-wrap section-pad">
                     <div className="container">
                        <CollectionGallery collectionData={gallery} />
                     </div>
                  </div>
                  {/* shop category section start */}
                  <div className="iron-shop-category-wrap section-pad bg-grey">
                     <div className="container">
                        <div className="iron-sec-heading-wrap mb-sm-50 mb-40">
                           <div className="heading-title">
                              <h3 className="font-light">Shop By Category</h3>
                           </div>
                        </div>
                        <ShopCategory shopCategory={shopCategory} />
                     </div>
                  </div>
                  {/* product slider section start */}
                  <div className="iron-product-slider-v2-wrap section-pad pt-0">
                     <div className="iron-sec-heading-wrap">
                        <div className="container">
                           <div className="heading-title">
                              <h2 className="font-light base-color">new products</h2>
                           </div>
                        </div>
                     </div>
                     <div className="container">
                        <ProductSliderTwo productdata={products} />
                     </div>
                  </div>
                  {/* cta banner section start */}
                  <div className="iron-cta-banner-wrapper">
                     <div className="container">
                        <CtaBannerSection />
                     </div>
                  </div>
                  {/* parteners section start */}
                  <div className="iron-partener-wrapper layout-v3 section-pad">
                     <div className="container">
                        <div className="iron-sec-heading-wrap text-center mb-md-50 mb-25">
                           <div className="heading-title">
                              <h3 className="mb-0">Top brands</h3>
                           </div>
                        </div>
                        <PartenersSliderV2 clientdata={clients} />
                     </div>
                  </div>
                  {/* subscribe section start */}
                  <div className="iron-subscribe-box-v2 bg-primary section-pad position-relative">
                     <SubscribeBoxV2 />
                  </div>
                  {/* download section start */}
                  <div className="iron-dwnld-app-wrapper py-25">
                     <div className="container">
                        <DownloadApp />
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

export default HomePageThree;