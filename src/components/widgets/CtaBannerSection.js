/**
 * cta banner component
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function CtaBannerSection() {
   return (
      <div className="cta-banner-wrap text-center">
         <div className="overlay-section-overlay cta-image rounded text-center position-relative">
            <img alt="" src={require("../../assets/images/bg-sunglass.jpg")} />
            <div className="cta-content d-flex justify-content-center align-items-center">
               <div className="cta-content-holder">
                  <p><i className="material-icons base-color"> brightness_5 </i></p>
                  <h4 className="font-bold mb-lg-25 mb-20 base-color">new arrival</h4>
                  <h2 className="mb-sm-25 mb-15 base-color">Sunglasses for Everyone</h2>
                  <Button component={Link} to="/shop" className="button btn-base">shop now</Button>
               </div>
            </div>
         </div>
      </div>
   )
}