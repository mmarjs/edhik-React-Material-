/**
 * Google map component
 */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


class GoogleMap extends Component {

   static propTypes = {
      center: PropTypes.array,
      zoom: PropTypes.number,
      greatPlaceCoords: PropTypes.any
   };

   static defaultProps = {
      center: [30.708384, 76.702896],
      zoom: 13,
      greatPlaceCoords: { lat: 30.708384, lng: 76.702896 }
   };

   //function for render mmap marker
   renderMarkers(map, maps) {
      new maps.Marker({
         position: { lat: 30.708384, lng: 76.702896 },
         map,
         title: 'Iron Network'
      });
   }

   render() {
      return (
         // Important! Always set the container height explicitly

         <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: "AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk" }}
               yesIWantToUseGoogleMapApiInternals={true}
               defaultCenter={this.props.center}
               defaultZoom={this.props.zoom}
               style={{ position: 'relative', width: '100%', height: 400 }}
               onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            >
            </GoogleMapReact>
         </div>
      );
   }
}

export default GoogleMap;