/* eslint-disable */
/**
 * download app component
 */
import React from 'react';
import { Grid } from '@material-ui/core';

export default function DownloadApp(props) {

   const appData = [
      {
         title: 'Download iOS App ',
         icon: require('../../assets/images/apple.png')
      },
      {
         title: 'Download Android App ',
         icon: require('../../assets/images/android-logo.png')
      }
   ]

   return (
      <Grid container spacing={0}>
         {appData.map((data, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={6} className="download-item">
               <div className="py-sm-25 py-15">
                  <a href="javascript:void(0)" className="d-flex justify-content-center align-items-center">
                     <img src={data.icon} alt="data-icon" height="22" width="22" className="mr-15" />
                     <h4 className="mb-0 font-bold">{data.title}</h4>
                  </a>
               </div>
            </Grid>
         ))}
      </Grid>
   )
}