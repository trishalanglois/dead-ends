import React from 'react';
import './LocationContainer.scss';
import LocationCard from '../LocationCard/LocationCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';


export const LocationContainer = ({ locations, location }) => {
  const showLocations = locations.map(spookyLocation => {
    return (
      <>
        <LocationCard
          key={Math.random() * Math.random()}
          location={spookyLocation}
        />
      </>
    )
  })

  return (
    <main className="locations-container">
      <div className="locations-container-subheader">
        <h2 className="location-subheader">{location}</h2>
        <Link to={'/favorites'}>
          <h3 className="favorites-button">View Favorites</h3>
        </Link>
      </div>
      <div className="main-section">
        <aside className="locations-cards-container">
          {showLocations}
        </aside>
        <aside className="map-container">
          //render MapContainer component
        </aside>
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  location: state.location,
  locations: state.spookyLocations
})

export default connect(mapStateToProps)(LocationContainer)
