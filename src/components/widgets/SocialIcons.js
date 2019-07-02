/**
 * social icon sec. component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';

export default function SocialIcons() {

   return (
      <div>
         <ul className="d-inline-block iron-social-icons mb-0">
            <li>
               <Fab size="small" variant="round" component={Link} to="#">
                  <i className="zmdi zmdi-facebook"></i>
               </Fab>
            </li>
            <li>
               <Fab size="small" variant="round" component={Link} to="#">
                  <i className="zmdi zmdi-twitter"></i>
               </Fab>
            </li>
            <li>
               <Fab size="small" variant="round" component={Link} to="#">
                  <i className="zmdi zmdi-google"></i>
               </Fab>
            </li>
            <li>
               <Fab size="small" variant="round" component={Link} to="#">
                  <i className="zmdi zmdi-instagram"></i>
               </Fab>
            </li>
         </ul>
      </div>
   )
}