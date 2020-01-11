import React from 'react';
import './FavoritesContainer.scss';
import LocationCard from '../LocationCard/LocationCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const FavoritesContainer = ({ favoriteLocations }) => {
  const showLocations = favoriteLocations.map(spookyLocation => {
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
        <h2 className="location-subheader">Favorite Locations</h2>
        <Link to={'/locations'}>
          <h3 className="favorites-button">Back</h3>
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
  favoriteLocations: state.favorites
})


export default connect (mapStateToProps)(FavoritesContainer);
