/**
 * Home Page Two
 */
/* eslint-disable */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//component
import BannerSliderTwo from "../../components/widgets/BannerSliderTwo";
import CallToAction from "../../components/widgets/CallToAction";
import TopProducts from "../../components/widgets/TopProducts";
import Sales from "../../components/widgets/Sales";
import PartenersSliderV2 from "../../components/widgets/PartenersSliderV2";
import SubscribeBoxV2 from "../../components/widgets/SubscribeBoxV2";
import ProductSliderThree from "../../components/widgets/ProductSliderThree";
import ContentLoader from "../../components/global/loaders/ContentLoader";
import ShopCard from "../../components/widgets/ShopCard";
import BestDeal from "../../components/widgets/BestDeal";
import LazyLoad from "react-lazy-load";
import shopCardData from "../../assets/data/shopCardData";

// firebase
import firebase from "../../firebase";
import "firebase/database";

class HomePageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: null,
      cta: [],
      topProducts: null,
      clients: [],
      products: null,
      productstwo: null,
      heading: null,
      headingtwo: null
    };
  }

  componentDidMount() {
    this.getBannerData();
    this.getProducts();
    this.getCta();
    this.getTopProduct();
    this.getClients();
  }

  //get banner data
  getBannerData() {
    const bannerRef = firebase.database().ref("banner_two");
    bannerRef.on("value", snapshot => {
      let banner = snapshot.val();
      this.setState({
        banner: banner
      });
    });
  }

  //get call to action data
  getCta() {
    const ctaRef = firebase.database().ref("cta");
    ctaRef.on("value", snapshot => {
      let cta = snapshot.val();
      this.setState({
        cta: cta
      });
    });
  }

  //get products data
  getTopProduct() {
    const topProductsRef = firebase.database().ref("products");
    topProductsRef.on("value", snapshot => {
      let topProducts = snapshot.val();
      let newState = topProducts.men
        .concat(topProducts.women)
        .concat(topProducts.gadgets)
        .concat(topProducts.accessories);
      this.setState({
        topProducts: newState
      });
    });
  }

  //get clients data
  getClients() {
    const clientsRef = firebase.database().ref("clients");
    clientsRef.on("value", snapshot => {
      let clients = snapshot.val();
      this.setState({
        clients: clients
      });
    });
  }

  //get products data
  getProducts() {
    // const productsRef = firebase.database().ref('products');
    // productsRef.on('value', (snapshot) => {
    //    let products = snapshot.val();
    //    console.log(products);
    //    this.setState({
    //       products: products
    //    });
    // });
    fetch("https://backend.edhik.com/new/api/productsliders")
      .then(response => response.json())
      .then(response => {
        console.log(response.data[0].productslider.map(el => el.product[0]));
        this.setState({
          products: response.data[0].productslider.map(el => el.product[0]),
          productstwo: response.data[1].productslider.map(el => el.product[0]),
          heading: response.data[0].section_name,
          headingtwo: response.data[1].section_name
        });
      });
  }

  render() {
    const {
      banner,
      cta,
      topProducts,
      clients,
      products,
      productstwo,
      heading,
      headingtwo
    } = this.state;

    return (
      <Fragment>
        {banner !== null && topProducts !== null ? (
          <div className="iron-home-v2-wrap">
            {/* banner section start */}
            <div className="iron-banner-wrapper py-0">
              <LazyLoad debounce={false} offsetVertical={500}>
                <BannerSliderTwo sliderData={banner} />
              </LazyLoad>
            </div>
            {/* best deal section start */}
            <div className="iron-best-deal-wrapper section-pad bg-base">
              <div className="container">
                <LazyLoad debounce={false} offsetVertical={500}>
                  <BestDeal />
                </LazyLoad>
              </div>
            </div>
            {/* cta section start */}
            <div className="iron-cta-wrapper pt-lg-30 pt-15">
              <div className="container">
                <LazyLoad debounce={false} offsetVertical={500}>
                  <CallToAction CallToActionData={cta} />
                </LazyLoad>
              </div>
            </div>
            {/* product tab/slider section start */}
            <div className="iron-product-slider-wrap section-pad">
              <div className="container">
                <div className="iron-sec-heading-wrap text-center mb-sm-60 mb-40">
                  <div className="heading-title">
                    <h2>featured products</h2>
                  </div>
                </div>
                <div className="heading-title">
                  <h4>{heading}</h4>
                </div>
                <div>
                  <LazyLoad debounce={false} offsetVertical={500}>
                    <ProductSliderThree productdata={products} />
                  </LazyLoad>
                </div>
                <div className="heading-title">
                  <h4>{headingtwo}</h4>
                </div>
                <div>
                  <LazyLoad debounce={false} offsetVertical={500}>
                    <ProductSliderThree productdata={productstwo} />
                  </LazyLoad>
                </div>
              </div>
            </div>
            {/* cta v2 section start */}
            <div className="iron-cta-v2-wrapper section-pad pb-30">
              <div className="container">
                <div className="iron-sec-heading-wrap p-30 pb-0">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <div className="heading-title mb-sm-0 mb-10">
                      <h2 className="mb-0">Lightening Deals</h2>
                    </div>
                    <Link
                      to="/shop"
                      className="text-14 font-medium text-uppercase"
                    >
                      view all
                    </Link>
                  </div>
                </div>
                <ShopCard deals={shopCardData} />
              </div>
            </div>
            {/* top products section start */}
            <div className="iron-top-products-wrapper section-pad pb-0">
              <div className="container">
                <div className="iron-sec-heading-wrap mb-30">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <div className="heading-title  mb-sm-0 mb-10">
                      <h3 className="mb-0">top products</h3>
                    </div>
                    <Link
                      to="/shop"
                      className="text-14 font-normal text-capitalize text-14 dark-color"
                    >
                      view all
                    </Link>
                  </div>
                </div>
                <TopProducts Data={topProducts} />
              </div>
            </div>
            {/* clients section start */}
            <div className="iron-partener-wrapper section-pad">
              <div className="container pb-60">
                <div className="iron-sec-heading-wrap mb-40">
                  <div className="heading-title">
                    <h3 className="mb-0">Top brands</h3>
                  </div>
                </div>
                <div className="mb-20">
                  <PartenersSliderV2 clientdata={clients} />
                </div>
              </div>
            </div>
            {/* sales section start */}
            <div className="iron-sales-wrapper">
              <div className="container-fluid px-0">
                <Sales />
              </div>
            </div>
            {/* subscribe  section start */}
            {/* <div className="iron-subscribe-box-v2 bg-primary section-pad position-relative">
                        <SubscribeBoxV2 />
                     </div> */}
          </div>
        ) : (
          <ContentLoader />
        )}
      </Fragment>
    );
  }
}

export default HomePageTwo;
