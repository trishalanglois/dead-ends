import React from 'react';
import './FavoritesContainer.scss';
import LocationCard from '../LocationCard/LocationCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const FavoritesContainer = ({ favoriteLocations }) => {
  const favoritesPresent = favoriteLocations.length > 0;
  const builtFavorites = favoriteLocations.map(spookyLocation => {
    return (
        <>
          <LocationCard
            key={Math.random() * Math.random()}
            cardLocation={spookyLocation}
          />
        </>
      )
    }
  )

  return (
    <main className="locations-container">
      <div className="locations-container-subheader">
        <h2 className="location-subheader">Favorite Spooky Locations</h2>
        <Link to={'/locations'}>
          <h3 className="favorites-button">Back</h3>
        </Link>
      </div>
      <div className="main-section">
        <aside className="locations-cards-container">
          {favoritesPresent && builtFavorites}
          {!favoritesPresent &&
            <h3 className="no-locations-error">Add favorite locations to view them here.</h3>}
        </aside>
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  favoriteLocations: state.favorites
})


export default connect (mapStateToProps)(FavoritesContainer);
