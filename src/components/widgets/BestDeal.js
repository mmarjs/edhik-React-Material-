/**
 * bestdeal component
 */
/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CountDownTimer from './CountDownTimer';
import CurrencyIcon from '../global/currency/CurrencyIcon';

export default class BestDeal extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         productData: {
            title: 'Denim Pullover',
            previewImage: require("../../assets/images/men/1-item-a.jpg"),
            price: 42.75,
            sellingPrice: '36.00',
            desc: 'Suspendisse porttitor ornare ligula. Nam massa erat, fermentum dolor quis, maximus ultrices diam. Aenean pellentesque auctor elementum. Nunc vitae tortor iaculis,mollis odio at, lacinia sapien. Mauris et leo sem. Curabitur sit amet enim nisi. Nunc placerat commodo sem,sed maximus purus',
            time: 50000,
            productImages: [
               require("../../assets/images/men/1-item-a.jpg"),
               require("../../assets/images/men/1-item-b.jpg"),
               require("../../assets/images/men/1-item-c.jpg")
            ]
         }
      }
   }

   /**
    * function for preview images
    * @param {object} image 
   */
   changePreviewImage(image) {
      this.setState({
         productData: {
            ...this.state.productData,
            previewImage: image
         }
      });
   }

   render() {
      const { previewImage, productImages, title, price, sellingPrice, desc, time } = this.state.productData;
      return (
         <div className="iron-best-deal-wrap">
            <div className="ribbon corner-ribbon top-left sticky red shadow">
         {Math.round((price - parseFloat(sellingPrice))*100/price)}% Off
            </div>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={12} md={6} lg={6} >
                  <div className="deal-preview-image-wrap">
                     <div className="preview-image-item preview-full-image">
                        <div>
                           <Link to="/products/men/3">
                              <img src={previewImage} alt="Deal Of The Day" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} className="pl-50" >
                  <div className="detail-content mb-50">
                     <h2 className="font-normal">Deal of the day</h2>
                     <h5 className="font-normal">{title}</h5>
                     <span className="d-block mb-20 text-14">
                        <del className="mr-10">
                           <CurrencyIcon /> {price}
                        </del>
                        <span className="active-color">
                           Now Only <CurrencyIcon /> {sellingPrice}
                        </span>
                     </span>
                     <p className="mb-20">{desc}</p>
                     <div className="mb-20">
                        <CountDownTimer time={time}></CountDownTimer>
                     </div>
                     <Link to="/shop" className="d-inline-block">
                        <Button className="button btn-active">shop Now</Button>
                     </Link>
                  </div>
                  <div className="deal-preview-image-nav">
                     {productImages.map((productImage, index) => {
                        return (
                           <div key={index} className={`preview-image-item ${previewImage === productImage ? 'active' : ''}`}>
                              <div>
                                 <a href="javascript:void(0)" onClick={() => this.changePreviewImage(productImage)}>
                                    <img src={productImage} alt="best-deal" />
                                 </a>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </Grid>
            </Grid>
         </div>
      )
   }
}