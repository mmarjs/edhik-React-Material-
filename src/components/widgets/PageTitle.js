/**
 * Page title component
 */
import React from 'react';

function PageTitle(props) {
   return (
      <div className="page-title-bar text-center">
         <div className="container">
            <h1 className="mb-30"> {props.title}</h1>
            <p className="lead text-capitalize mb-0"> {props.desc} </p>
         </div>
      </div>
   )
}

export default PageTitle;