import React from 'react';
import './LocationContainer.scss';
import LocationCard from '../LocationCard/LocationCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LocationContainer = ({ locations, location, mapLocation }) => {
  const showLocations = locations.map((spookyLocation, i) => {
    return (
      <>
        <LocationCard
          key={Math.random() * i}
          cardLocation={spookyLocation}
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
          {showLocations}
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  location: state.location,
  locations: state.spookyLocations,
  mapLocation: state.currentMap
})

export default connect(mapStateToProps)(LocationContainer);

LocationContainer.propTypes = {
  location: PropTypes.string,
  locations: PropTypes.array,
  mapLocation: PropTypes.object
}
