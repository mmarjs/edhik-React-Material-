/**
 * user edit page
 */
import React, { Fragment } from 'react';
import EditCard from './components/EditCard';
import EditAddress from './components/EditAddress';
import EditInfoTwo from './components/EditInfoTwo';


export default class EditUser extends React.Component {

   render() {
      const { search } = this.props.location;

      return (
         <Fragment>
            {search && search === '?type=info'
               ?
               <EditInfoTwo />
               :
               [
                  (search === '?type=address' || search === '?type=ship-address'
                     ?
                     <EditAddress type={search} />
                     :
                     <EditCard type={search} />
                  ),
               ]
            }
         </Fragment>
      )
   }
}

