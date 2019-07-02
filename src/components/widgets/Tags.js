/**
 * blog detial page tag component
 */
/* eslint-disable */
import React from "react";
import Chip from '@material-ui/core/Chip';

export default function Tags(props) {

   return (
      <div className="iron-blog-tags">
         <ul className="d-inline-block mb-0">
            {props.data.map((dataItem, index) => {
               return (
                  <li key={index} className="d-inline-block mr-5">
                     <Chip
                        label={dataItem}
                        component="a"
                        href="javascript:void(0);"
                        clickable
                        className="tag-item"
                     />
                  </li>
               )
            })}
         </ul>
      </div>
   )
}