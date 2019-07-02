/**
 * Team grid component
 */
/* eslint-disable */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

function TeamGrid(props) {

   return (
      <Grid container spacing={32}>
         {
            props.teamMembers.map((teamMember, index) => {
               return (
                  <Grid key={index} item xs={12} sm={12} md={4} lg={4} className="mx-auto mt-md-10 mb-md-0 mb-30">
                     <div className="iron-team-post text-center px-lg-10">
                        <Avatar
                           alt="user-1"
                           src={require(`../../assets/images/${teamMember.thumb}`)}
                           className="team-thumb mb-30 mx-auto "
                        />
                        <div className="iron-post-content">
                           <h4 className="mb-0">{teamMember.name}</h4>
                           <span className="mb-25 d-inline-block">{teamMember.designation}</span>
                           <p className="mb-0">{teamMember.desc}</p>
                        </div>
                     </div>
                  </Grid>
               )
            })
         }
      </Grid>
   );
}

export default TeamGrid;