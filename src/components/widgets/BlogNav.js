/**
 * blog detail nav component
 */
import React from 'react';
import { Button } from '@material-ui/core';

export default function BlogNav() {

   return (
      <div className="iron-blog-nav p-25 d-flex justify-content-between align-items-center bg-secondary">
         <Button className="button btn-active">prev</Button>
         <Button className="button btn-active">next</Button>
      </div>
   )
}