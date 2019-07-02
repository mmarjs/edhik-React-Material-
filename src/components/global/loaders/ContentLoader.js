/**
 * Content loader
 */
/* eslint-disable */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContentLoader = () => (
   <div className="iron-progress-bar d-flex justify-content-center align-items-center">
      <CircularProgress size={70} thickness={1.5} />
   </div>
);

export default ContentLoader;