import React, { Component } from 'react';
import './LocationCard.scss';
import { updateFavorites, updateClickedCard } from '../../actions/actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

export const LocationCard = (props) => {
  return (
  <aside className="card">
  <div className="card-title-container">
    <h3 className="card-title">{props.cardLocation.location}</h3>
    <div className="button-wrapper">
      <button className="map-button" onClick={() => props.updateFavorites(props.cardLocation)}>Add to Favorites</button>
      <Link to={`location/${props.cardLocation.location}`}>
        <button className="card-button" onClick={() => props.updateClickedCard(props.cardLocation)}>View Map</button>
      </Link>
      </div>
  </div>
    <p className="card-description">{props.cardLocation.description}</p>
  </aside>
  )
}

export const mapDispatchToProps = dispatch => ({
  updateFavorites: newLocation => dispatch(updateFavorites(newLocation)),
  updateClickedCard: clickedLocation => dispatch(updateClickedCard(clickedLocation))
})

export default connect(null, mapDispatchToProps)(LocationCard);
