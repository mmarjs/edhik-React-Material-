/**
 * blog grid component
 */
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function BlogGrid(props) {

   const { blogItems } = props;
   return (
      <div>
         <Grid container spacing={32} className="iron-post-grid-wrap">
            {blogItems.map((blogItem, index) => {
               return (
                  <Grid key={index} item md={4} lg={4} xl={4} className="iron-post-item">
                     <Card className="post-rounded iron-shadow">
                        <div className="iron-post-thumb-wrap">
                           <Link to={`/blogs/detail/${blogItem.id}`} className="iron-post-thumb">
                              <CardMedia
                                 image={require(`../../assets/images/${blogItem.image}`)}
                                 component="img"
                                 height="310"
                                 width="460"
                              />
                           </Link>
                        </div>
                        <CardContent className="iron-post-content px-15 py-20 px-sm-30 py-sm-40 position-relative">
                           <h5><Link to={`/blogs/detail/${blogItem.id}`} >{blogItem.name}</Link></h5>
                           <p>{blogItem.short_content}</p>
                           <ul className="iron-meta-info mb-0">
                              <li className="meta-list">
                                 <Link to="#"><i className="material-icons pr-5">person</i> by admin </Link>
                              </li>
                              <li className="meta-list">
                                 <Link to="#"><i className="material-icons pr-5">calendar_today</i>jan 12/2019</Link>
                              </li>
                           </ul>
                           <div className="iron-btn-grp">
                              <IconButton component={Link} to={`/blogs/detail/${blogItem.id}`} className="btn-wrap">
                                 <i className="material-icons">link</i>
                              </IconButton>
                           </div>
                        </CardContent>
                     </Card>
                  </Grid>
               )
            })}
         </Grid>
      </div>
   )
}
export default BlogGrid;