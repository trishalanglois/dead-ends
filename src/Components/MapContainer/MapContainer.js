import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '80%',
  height: '80%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416,
        }}
      />
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFQ1czovRlzvB4l3QxC5YwoxJ_URDKP6g'
})(MapContainer)
