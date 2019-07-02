/**
 * call to action component
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


export default function CallToAction(props) {

   const { CallToActionData } = props;
   return (
      <div>
         <Grid container spacing={32} className="iron-call-to-action-wrap">
            {
               CallToActionData.map((callData, index) => {
                  return (
                     <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4} className="iron-col">
                        <div className="iron-cta-item">
                           <Link to={callData.path}>
                              <img src={require(`../../assets/images/${callData.thumb}`)} alt="call-to-action" />
                           </Link>
                        </div>
                     </Grid>
                  )
               })
            }
         </Grid>
      </div>
   )
}