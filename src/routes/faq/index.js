/**
 * FAQ Page
 */
import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

// page title bar
import PageTitle from '../../components/widgets/PageTitle.js';

export default class FAQ extends Component {
   state = {
      expanded: null,
   };

   //define toggle  function for accordion
   handleChange = panel => (event, expanded) => {
      this.setState({
         expanded: expanded ? panel : false,
      });
   };

   render() {
      const { expanded } = this.state;
      return (
         <div className="iron-faq-page-wrap">
            <PageTitle
               title="Frequently Asked Question"
               desc="We explained the basics question in this section."
            />
            <div className="inner-container bg-base ">
               <div className="iron-faq-page section-pad pb-0">
                  <div className="container">
                     <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                           <div className="block-title">
                              <h2 className="mb-5">Get Instant answers for most common questions</h2>
                              <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, aspernatur minus voluptatibus quaerat officiis, incidunt maiores, tempora nam eaque ab consequatur tenetur explicabo voluptatem vel voluptatum perspiciatis accusantium. Illum, nemo?</p>
                           </div>
                        </Grid>
                     </Grid>
                  </div>
                  <div className="section-pad">
                     <div className="container">
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">When I will receive my package i did not got any call</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">I did not get email and text messege afer payment</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                              expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                              voluptatem deserunt.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                              expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                        voluptatem deserunt.</p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">How to track the shipping order?</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">I got promocodes , how to reedeem?</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0"> How can i cancel the order</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">BOA credit card has problem with shopping</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">How to change the password of my account</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">How to delete the saved card Infomation</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">How to pay bill throgh netbanking</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}
                           className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">Do you have any stores in USA?</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel11'} onChange={this.handleChange('panel11')} className="iron-accordion-wrap">
                           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="iron-accordion-title">
                              <h5 className="mb-0">How to deactivate account?</h5>
                           </ExpansionPanelSummary>
                           <ExpansionPanelDetails className="iron-accordion-desc">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum
                                 expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui,
                                 voluptatem deserunt.
                                        </p>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                     </div>
                  </div>
                  <div className="cta-v1">
                     <div className="cta-overlay-bg section-gap">
                        <div className="container">
                           <Grid container spacing={24}>
                              <Grid item lg={6} className="mx-auto">
                                 <div className="block-title text-center">
                                    <h2 className="font-bold mb-25"> Did not get your answer here?</h2>
                                    <h6 className="mb-25"> If your are unable to get the answers then feel free to contact us by
                                        submit a support request. We will very happy to listen from you.
                                                </h6>
                                    <Button component={Link} to="/contact-us" variant="contained" className="button btn-active btn-lg">
                                       submit request
                                                </Button>
                                 </div>
                              </Grid>
                           </Grid>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

