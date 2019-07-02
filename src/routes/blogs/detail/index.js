/**
 * Blog detail Page Page
 */

/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//component
import Tags from '../../../components/widgets/Tags';
import SocialIcons from '../../../components/widgets/SocialIcons';
import BlogNav from '../../../components/widgets/BlogNav';
import firebase from '../../../firebase';
import ContentLoader from '../../../components/global/loaders/ContentLoader';

export default class BlogDetail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blogs: null,
         blogId: parseInt(this.props.match.params.id),
         currentDataItem: null
      }
   }
   componentDidMount() {
      this.getblogs();
   }

   //get blogs data
   getblogs() {
      const blogsRef = firebase.database().ref('blogs');
      blogsRef.on('value', (snapshot) => {
         let newblogs = snapshot.val();
         this.setState({
            blogs: newblogs
         });
         this.getBlogItem(newblogs);
      });
   }

   getBlogItem(blogs) {
      let { blogId } = this.state;
      if (blogs && blogs.length > 0) {
         for (let Item of blogs) {
            if (Item.id === blogId) {
               this.setState({
                  currentDataItem: Item
               })
            }
         }
      }
   }

   createMarkup(value) {
      return { __html: value };
   }

   render() {
      const { currentDataItem } = this.state;
      return (
         <Fragment>
            {currentDataItem !== null ?
               <div className="iron-blog-page-wrap inner-container bg-base">
                  <div className="blog-img-wrapper position-relative"
                     style={{ backgroundImage: 'url(' + require(`../../../assets/images/${currentDataItem.banner_img}`) + ')' }}
                  >
                     <div className="center-holder">
                        <div className="container">
                           <Grid container spacing={0}>
                              <Grid item xs={12} sm={12} md={10} lg={8} className="mx-auto">
                                 <h5 className="mb-25 d-flex justify-content-center align-items-center">
                                    <i className="material-icons mr-15">trending_up</i>
                                    {currentDataItem.post_type}
                                 </h5>
                                 <h2 className="mb-25">{currentDataItem.name}</h2>
                                 <ul className="iron-meta-info mb-25">
                                    <li className="meta-list">
                                       <a href="javascript:void(0);"><i className="material-icons pr-5">account_circle</i>{currentDataItem.author.author_name}</a>
                                    </li>
                                    <li className="meta-list">
                                       <a href="javascript:void(0);"><i className="material-icons pr-5">date_range</i> {currentDataItem.author.post_date}</a>
                                    </li>
                                 </ul>
                              </Grid>
                           </Grid>
                        </div>
                     </div>
                  </div>
                  <div className="iron-blog-detail-wrap section-pad">
                     <div className="container">
                        <Grid container spacing={0}>
                           <Grid item xs={12} sm={12} md={10} lg={7} className="mx-auto">
                              <div className="blog-content mb-50">
                                 <div dangerouslySetInnerHTML={this.createMarkup(currentDataItem.content)} />
                              </div>
                              <div className="d-md-flex justify-content-between align-items-center mb-25">
                                 <div className="mb-30 mb-md-0">
                                    <Tags data={currentDataItem.tags}></Tags>
                                 </div>
                                 <SocialIcons></SocialIcons>
                              </div>
                              <div className="mb-25">
                                 <BlogNav></BlogNav>
                              </div>
                              <div className="mb-50 iron-author-wrap">
                                 <div className="block-title mb-30">
                                    <h3>About the Author</h3>
                                 </div>
                                 <Grid container spacing={0}>
                                    <Grid item xs={12} sm={2} md={2} lg={2} className=" mb-20 mb-sm-0">
                                       <Avatar
                                          alt="user-3"
                                          src={require(`../../../assets/images/${currentDataItem.author.author_img}`)}
                                          className="author-thumb mx-auto mx-sm-lg"
                                       />
                                    </Grid>
                                    <Grid item xs={12} sm={10} md={10} lg={10}>
                                       <div className="author-content pl-sm-25 pt-10 text-sm-left text-center">
                                          <h4>{currentDataItem.author.author_name}</h4>
                                          <p>{currentDataItem.author.author_bio}</p>
                                       </div>
                                    </Grid>
                                 </Grid>
                              </div>
                              <Divider className="mb-30"></Divider>
                              <div className="iron-blog-comment-wrap pt-20">
                                 <div className="block-title mb-25">
                                    <h3>Comments({currentDataItem.user_comments.length})</h3>
                                 </div>
                                 <div className="commented-wrapper">
                                    {currentDataItem.user_comments.length > 0 ?
                                       <ul>
                                          {
                                             currentDataItem.user_comments.map((comments, index) => {
                                                return (
                                                   <li key={index} className="d-block">
                                                      <Grid container spacing={0} className="comment-item">
                                                         <Grid item xs={12} sm={12} md={2} lg={2} className=" mb-10 mb-md-0">
                                                            <Avatar
                                                               alt="user-2"
                                                               src={require(`../../../assets/images/${comments.img}`)}
                                                               className="user-thumb"
                                                            />
                                                         </Grid>
                                                         <Grid item xs={12} sm={12} md={10} lg={10} className="user-content">
                                                            <div className="author-content pl-md-10 pt-10">
                                                               <h5>{comments.name}</h5>
                                                               <p>{comments.comment}</p>
                                                               <div className="d-flex justify-content-between align-items-center">
                                                                  <div>
                                                                     <a href="javascript:void(0);" className="text-14 primary-color font-bold">Reply</a>
                                                                  </div>
                                                                  <div className="text-14 primary-color font-bold">
                                                                     {comments.date}
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </Grid>
                                                      </Grid>
                                                      <Divider className="my-30"></Divider>
                                                      <Fragment>
                                                         {(comments.sub_comments !== undefined) ?
                                                            <ul className="pl-20 pl-sm-50 sub-comments">
                                                               {comments.sub_comments.map((subComment, index) => {
                                                                  return (
                                                                     <li key={index} className="d-block">
                                                                        <Grid container spacing={0} className="comment-item">
                                                                           <Grid item xs={12} sm={12} md={2} lg={2} className=" mb-10 mb-md-0">
                                                                              <Avatar
                                                                                 alt="user-3"
                                                                                 src={require(`../../../assets/images/${subComment.img}`)}
                                                                                 className="user-thumb"
                                                                              />
                                                                           </Grid>
                                                                           <Grid item xs={12} sm={12} md={10} lg={10} className="user-content">
                                                                              <div className="author-content pl-md-20 pt-10">
                                                                                 <h5>{subComment.name}</h5>
                                                                                 <p>{subComment.comment}</p>
                                                                                 <div className="d-flex justify-content-between align-items-center">
                                                                                    <div>
                                                                                       <a href="javascript:void(0);" className="text-14 primary-color font-bold">Reply</a>
                                                                                    </div>
                                                                                    <div className="text-14 primary-color font-bold">
                                                                                       {subComment.date}
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                           </Grid>
                                                                        </Grid>
                                                                        <Divider className="my-30"></Divider>
                                                                     </li>
                                                                  )
                                                               })}
                                                            </ul>
                                                            :
                                                            ''
                                                         }
                                                      </Fragment>
                                                   </li>
                                                )
                                             })
                                          }
                                       </ul>
                                       :
                                       null
                                    }
                                 </div>
                              </div>
                              <div className="blog-leave-comment pt-20">
                                 <div className="block-title mb-20">
                                    <h3>leave comment</h3>
                                 </div>
                                 <form>
                                    <TextField
                                       required
                                       id="standard-name"
                                       label="first Name"
                                       className="iron-form-input-wrap"
                                    />
                                    <TextField
                                       required
                                       id="standard-name"
                                       label="last Name"
                                       className="iron-form-input-wrap"
                                    />
                                    <TextField
                                       required
                                       id="standard-email"
                                       label="enter your email"
                                       className="iron-form-input-wrap"
                                    />
                                    <TextField
                                       id="standard-multiline-static"
                                       label="leave a message"
                                       multiline
                                       rows="2"
                                       className="iron-form-input-wrap"
                                    />
                                    <Button variant="contained" className="button btn-active btn-lg mt-15">
                                       send message
                                        </Button>
                                 </form>
                              </div>
                           </Grid>
                        </Grid>
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      );
   }
}
