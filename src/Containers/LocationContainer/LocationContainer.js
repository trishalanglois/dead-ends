import React from 'react';
import './LocationContainer.scss';
import LocationCard from '../../Components/LocationCard/LocationCard';
import { connect } from 'react-redux';

export const LocationContainer = ({ locations }) => {
  const showLocations = locations.map(spookyLocation => {
    return (
      <LocationCard
        key={Math.random() * Math.random()}
        location={spookyLocation.location}
        description={spookyLocation.description}
      />
    )
  })

  return (
    <>
      {showLocations}
    </>
  )
}

export const mapStateToProps = state => ({
  locations: state.spookyLocations
})

export default connect(mapStateToProps)(LocationContainer)
