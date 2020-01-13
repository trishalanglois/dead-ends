import React from 'react';
import './LocationCard.scss';
import { updateFavorites, updateClickedCard, removeFavorite } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LocationCard = (props) => {
  const isFavorite = props.favorites.some(favorite => favorite.location === props.cardLocation.location)

  return (
  <aside className="card">
  <div className="card-title-container">
    <h3 className="card-title">{props.cardLocation.location}</h3>
    <div className="button-wrapper">
      { isFavorite ?
        <button className="map-button remove-button" onClick={() => props.removeFavorite(props.cardLocation)}>Remove from Favorites</button>
      :
        <button className="map-button" onClick={() => props.updateFavorites(props.cardLocation)}>Add to Favorites</button>
      }
      <Link to={`location/${props.cardLocation.location}`}>
        <button className="card-button" onClick={() => props.updateClickedCard(props.cardLocation)}>View Map</button>
      </Link>
      </div>
  </div>
    <p className="card-description">{props.cardLocation.description}</p>
  </aside>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites
})


export const mapDispatchToProps = dispatch => ({
  updateFavorites: newLocation => dispatch(updateFavorites(newLocation)),
  updateClickedCard: clickedLocation => dispatch(updateClickedCard(clickedLocation)),
  removeFavorite: location => dispatch(removeFavorite(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);

LocationCard.propTypes = {
  updateFavorites: PropTypes.func,
  updateClickedCard: PropTypes.func,
  removeFavorite: PropTypes.func,
  favorites: PropTypes.array,
  cardLocation: PropTypes.object
}
