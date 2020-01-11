import React from 'react';
import './LocationCard.scss';
import { updateFavorites } from '../../actions/actions';
import { connect } from 'react-redux';


export const LocationCard = ({ location, updateFavorites }) => {

  return (
    <aside className="card">
    <div className="card-title-container">
      <h3 className="card-title">{location.location}</h3>

      <div className="card-button-container">
        <button className="card-button" onClick={() => updateFavorites(location)}>Add to Favorites</button>
        <button className="card-button">View Map</button>
      </div>

    </div>
      <p className="card-description">{location.description}</p>
    </aside>
  )
}

export const mapDispatchToProps = dispatch => ({
  updateFavorites: newLocation => dispatch(updateFavorites(newLocation))
})

export default connect(null, mapDispatchToProps)(LocationCard);
