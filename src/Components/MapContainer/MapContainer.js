import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

const mapStyles = {
  width: '30%',
  height: '70%'
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: this.props.currentMap.location
    }
  }

  onClose = props => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     });
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      showingInfoWindow: true
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.currentMap.latitude,
            lng: this.props.currentMap.longitude
          }}
        >
          <Marker
              onClick={this.onMarkerClick}
              name= {this.props.currentMap.location}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.location}</h4>
              </div>
            </InfoWindow>
        </Map>
    )
  }
}

export const mapStateToProps = state => ({
  currentMap: state.currentMap
})

const wrappedMapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyBFQ1czovRlzvB4l3QxC5YwoxJ_URDKP6g'
})(MapContainer)

export default connect(mapStateToProps)(wrappedMapContainer)