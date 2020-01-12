import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './MapContainer.scss';
import { connect } from 'react-redux';
import { updateFavorites } from '../../actions/actions';
import { Link } from 'react-router-dom';

const mapStyles = {
  width: '40%',
  height: '50%',
  margin: '5%',
  border: '1px solid black'
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: `${this.props.currentMap.location}`
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

  render() {
    return (
      <main className="map-view">
        <div className="map-container-subheader">
          <Link to={'/locations'}>
            <h2 className="map-subheader">Return to all locations</h2>
          </Link>
          <Link to={'/favorites'}>
            <h3 className="favorites-button">View Favorites</h3>
          </Link>
        </div>
          <Map
            className="map-component"
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
          <aside className="card map-card-view">
            <div className="card-title-container">
            <h3 className="card-title">{this.props.currentMap.location}</h3>
            <button className="map-button" onClick={() => this.props.updateFavorites(this.props.currentMap)}>Add to Favorites</button>
            </div>
            <h4 className="card-subtitle">{this.props.currentMap.city}, {this.props.currentMap.state}</h4>
            <p className="card-description">{this.props.currentMap.description}</p>
          </aside>
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  currentMap: state.currentMap
})

export const mapDispatchToProps = dispatch => ({
  updateFavorites: newLocation => dispatch(updateFavorites(newLocation)),
})

const wrappedMapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyBFQ1czovRlzvB4l3QxC5YwoxJ_URDKP6g'
})(MapContainer)

export default connect(mapStateToProps, mapDispatchToProps)(wrappedMapContainer)
