import React from 'react';
import './LocationContainer.scss';
import LocationCard from '../LocationCard/LocationCard';
import { connect } from 'react-redux';

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
      <h2 className="location-subheader">{location}</h2>
      {showLocations}
    </main>
  )
}

export const mapStateToProps = state => ({
  location: state.location,
  locations: state.spookyLocations
})

export default connect(mapStateToProps)(LocationContainer)
