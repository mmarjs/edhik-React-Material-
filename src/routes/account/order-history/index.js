/**
 * order history page
 */
import React, { Fragment } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

//firebase
import firebase from '../../../firebase';

//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';

class OrderHistory extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         orderHistory: null
      }
   }

   componentDidMount() {
      this.getTableData();
   }

   //get table data
   getTableData() {
      const orderHistoryRef = firebase.database().ref('order_history');
      orderHistoryRef.on('value', (snapshot) => {
         //console.log(snapshot.val())
         let orderHistory = snapshot.val();
         this.setState({
            orderHistory: orderHistory
         });
      });
   }

   render() {
      const { orderHistory } = this.state;
      return (
         <Fragment>
            {orderHistory !== null ?
               <div className="order_history_wrapper">
                  <div className="single_order_repeat">
                     <div className="wrap_order_history">
                        <a href="">155326AGSJS556</a>
                        <button>
                           <i className="material-icons">location_on</i>
                           Track
                        </button>
                     </div>
                     <div className="single_order_history">
                        <div className="thumb_product_img">
                           <img src="https://img1a.flixcart.com/image/75/75/jm81zm80/heating-pad/z/t/j/thermocare-heating-gel-hot-warm-bottle-electric-with-autocut-original-imaf96c2g6j25yfg.jpeg" alt=""/>
                        </div>
                        <div className="order_history_details">
                           <a href="">Thermocare Heating Gel Hot Warm Bottle Earthen ottle with very long name</a>
                           <div>
                              <div>
                                 <span>Color: Multicolor</span> <span>Size: Standard Size</span>
                              </div>
                           </div>
                           <div className="product_price">23566</div>
                        </div>
                        <div className="order_history_delivery_time">
                           <div>
                              Delivered on Sat, Jan 5th '19
                           </div>
                           <div><small>Your item has been delivered</small></div>
                        </div>
                        <div className="order_history_rate_product">
                           <button>
                              <i className="material-icons">star</i>
                              RATE &amp; REVIEW 
                           </button>
                        </div>
                     </div>  
                  </div>
                  <div className="single_order_repeat">
                     <div className="wrap_order_history">
                        <a href="">155326AGSJS556</a>
                        <button>
                           <i className="material-icons">location_on</i>
                           Track
                        </button>
                     </div>
                     <div className="single_order_history">
                        <div className="thumb_product_img">
                           <img src="https://img1a.flixcart.com/image/75/75/jm81zm80/heating-pad/z/t/j/thermocare-heating-gel-hot-warm-bottle-electric-with-autocut-original-imaf96c2g6j25yfg.jpeg" alt=""/>
                        </div>
                        <div className="order_history_details">
                           <a href="">Thermocare Heating Gel Hot Warm Bottle Earthen ottle with very long name</a>
                           <div>
                              <div>
                                 <span>Color: Multicolor</span> <span>Size: Standard Size</span>
                              </div>
                           </div>
                           <div className="product_price">23566</div>
                        </div>
                        <div className="order_history_delivery_time">
                           <div>
                              Delivered on Sat, Jan 5th '19
                           </div>
                           <div><small>Your item has been delivered</small></div>
                        </div>
                        <div className="order_history_rate_product">
                           <button>
                              <i className="material-icons">star</i>
                              RATE &amp; REVIEW 
                           </button>
                        </div>
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
export default OrderHistory;