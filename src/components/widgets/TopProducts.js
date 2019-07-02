/**
 * top products
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//connect to store
import { connect } from 'react-redux';

// actions
import { addProductItem, showAlert } from "../../actions/action";

// helpers
import { isProductExist } from "../../helpers";

//component
import CurrencyIcon from '../global/currency/CurrencyIcon';


class TopProducts extends React.Component {

   state = {
      itemsToShow: 4,
      loadMore: false
   }

   // add to cart function
   onAddToCart(data) {
      this.props.addProductItem(data);

      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added!', 'success')
      }, 500)
   }

   // show more data function
   showMoreData() {
      let minData = this.state.itemsToShow;
      if (minData && this.props.Data.length !== 12) {
         this.setState({ itemsToShow: (minData + 4), loadMore: true });
      }
   }

   //show less data function
   showLessData() {
      let data = this.state.itemsToShow;
      if (data && data !== 4) {
         this.setState({ itemsToShow: data - 4, loadMore: true })
      }
      else {
         this.setState({ loadMore: false })
      }
   }

   render() {
      const { itemsToShow, loadMore } = this.state;
      const { Data } = this.props;

      return (
         <Fragment>
            {Data !== null ?
               <Fragment>
                  <Grid container spacing={32} className="iron-product-wrap my-0">
                     {Data.slice(0, itemsToShow).map((data, index) => (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={3} className="mb-30 py-0">
                           <Card className="iron-product-item p-25 iron-shadow position-relative hover-box-shadow">
                              <div>
                                 <Link to={`/products/${data.type}/${data.objectID}`} className='d-block'>
                                    <CardMedia
                                       height="140"
                                       component="img"
                                       image={require(`../../assets/images/${data.image}`)}
                                    />
                                 </Link>
                              </div>
                              <CardContent className="iron-product-content pt-20 p-0 border">
                                 <Link to={`/products/${data.type}/${data.objectID}`} className="d-block mb-sm-15 mb-10 secondary-color text-14 text-capitalize">{data.category}</Link>
                                 <h5 className="text-truncate mb-sm-15 mb-10"><Link to={`/products/${data.type}/${data.objectID}`}>{data.name}</Link></h5>
                                 <div className="price-wrap d-block mb-15">
                                    <span><CurrencyIcon /> {data.price}</span>
                                 </div>
                                 <div className="iron-btn-grp2 mb-sm-0 mb-5">
                                    {!isProductExist(data.objectID) ?
                                       (
                                          <Button
                                             className="btn-wrap text-capitalize button"
                                             onClick={() => this.onAddToCart(data)}
                                          >
                                             add to cart
                                            </Button>
                                       )
                                       :
                                       (
                                          <Button component={Link} to="/cart" className="btn-wrap text-capitalize button">
                                             View cart
                                            </Button>
                                       )
                                    }
                                 </div>
                              </CardContent>
                              <div className="iron-offer-badge">
                                 <span className="font-medium text-14 base-color">off 20%</span>
                              </div>
                           </Card>
                        </Grid>
                     ))}
                  </Grid>
                  {loadMore && loadMore !== false && itemsToShow !== 4 ?
                     (
                        <Fragment>
                           {(itemsToShow && itemsToShow !== 12 && itemsToShow !== 4) ?
                              <Fragment>
                                 <Button component={Link} to="#"
                                    className="button transparent-btn mt-25"
                                    onClick={() => this.showMoreData()}
                                 >
                                    show all
                                    </Button>
                                 <Button component={Link} to="#"
                                    className="button transparent-btn mt-20"
                                    onClick={() => this.showLessData()}
                                 >
                                    less
                                    </Button>
                              </Fragment>
                              :
                              <Fragment>
                                 <Button component={Link} to="#"
                                    className="button transparent-btn mt-20"
                                    onClick={() => this.showLessData()}
                                 >
                                    less
                                    </Button>
                              </Fragment>
                           }
                        </Fragment>
                     )
                     :
                     (
                        <Button component={Link} to="#"
                           className="button transparent-btn mt-25"
                           onClick={() => this.showMoreData()}
                        >
                           show all
                        </Button>
                     )
                  }
               </Fragment>
               :
               null
            }
         </Fragment>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart } = ecommerce;
   return { cart };
}

export default connect(mapStateToProps, {
   addProductItem,
   showAlert
})(TopProducts);
