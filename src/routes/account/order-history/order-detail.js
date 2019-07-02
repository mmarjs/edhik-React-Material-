import React, { Component } from 'react';
import './order-details.scss'
import { Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CurrencyIcon from '../../../components/global/currency/CurrencyIcon';
  
  
  export default class OrderDetails extends Component {
state={
    activeStep:1,
    steps : ['Ordered', 'Packed', 'Shipped', 'Delivered']
}
      componentDidMount(){
        // const classes = useStyles();

    }
    render() {
        return (
            <div className="order_details">
                <div className="container">
                    {/* <h1>This is order details page</h1> */}
                    <div className="order_details_wrapper">
                        <div className="det_card">
                            <div className="details_head">
                                <div className="det_delivery">
                                    <h3 className="det_title">
                                        Delivery Address
                                    </h3>
                                    <b className="det_name">Ram Pandey</b>
                                    <p className="det_p">
                                        A-283,Bindapur,DDA flats,Uttam Nagar,New Delhi-110059 Near peer baba majan, new delhi - 110059, Delhi
                                    </p>
                                    <p className="det_p">
                                        <b>Phone</b> 8826047538
                                    </p>
                                </div>
                                <div className="det_invoice">
                                    <h3 className="det_title">
                                        More actions
                                    </h3>
                                    <Button className="request_invoice">Request Invoice</Button>
                                </div>
                            </div>
                        </div>
                        <div className="det_card">
                            <div className="det_body">
                                <div className="det_product">
                                    <div className="p_image">
                                        <a href="">
                                            <div className="p_img_cont">
                                                <img src="https://img1a.flixcart.com/image/75/75/jl16s280/mobile/e/a/f/nokia-6-1-na-original-imaf892exbgttdpe.jpeg" alt=""/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p_det_p">
                                        <a href="">Nokia 6.1 Plus Smart phone</a>
                                        <p>Color: Green</p>
                                        <p>Variant: 5.1 in</p>
                                        <p className="price"> <CurrencyIcon/> 35598</p>
                                    </div>
                                </div>
                                <div className="det_track">
                                    <Stepper activeStep={this.state.activeStep} alternativeLabel className="custom_stepper">
                                        {this.state.steps.map(label => (
                                        <Step key={label}>
                                            <StepLabel 
                                            StepIconProps = {{
                                                classes:{
                                                    root: 'custom_step',
                                                    active: 'custom_step_active',
                                                    completed: 'custom_step_completed',
                                                }
                                            }}
                                            >{label}</StepLabel>
                                        </Step>
                                        ))}
                                    </Stepper>
                                    <div className="delivery_check_points step1">
                                        <h6>Your item has been picked up by courier partner.</h6>
                                        <table className="border_less delivery_track_table">
                                            <tbody>
                                                <tr>
                                                    <td>Thu, 11th Oct</td>
                                                    <td>2:00 PM</td>
                                                    <td>Seller Facility</td>
                                                    <td>Item has been dispatched from the seller warehouse</td>
                                                </tr>
                                                <tr>
                                                    <td>Thu, 11th Oct</td>
                                                    <td>2:00 PM</td>
                                                    <td>Seller Facility</td>
                                                    <td>Item has been dispatched from the seller warehouse</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="det_delivery_on">
                                    <h3 className="det_title">
                                        Delivered on Sun, June 1th '19
                                    </h3>
                                    <div style={{marginBottom:15}}>
                                        <button><i className="material-icons">star</i>RATE &amp; REVIEW</button>
                                    </div>
                                    <div>
                                        <button style={{marginLeft:3}} ><i style={{fontSize:21,verticalAlign:"middle"}} className="material-icons">cancel</i>CANCEL ITEM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}