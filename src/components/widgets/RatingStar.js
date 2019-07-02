/**
 * rating star component
 */
/* eslint-disable */
import React from 'react';

const stars = [
   {
      select: "active",
      icon: "star"
   },
   {
      select: "active",
      icon: 'star'
   },
   {
      select: "active",
      icon: 'star'
   },
   {
      select: "active",
      icon: 'star_half'
   },
   {
      icon: 'star'
   }
]

export default function RatingStar() {

   return (
      <div className="rating-star">
         <ul className="mb-0">
            {stars.map((star, index) => {
               return (
                  <li key={index} className={star.select}>
                     <i className="material-icons">{star.icon}</i>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}