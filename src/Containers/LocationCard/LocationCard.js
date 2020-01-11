import React from 'react';
import './LocationCard.scss';
import { updateWishlist } from '../../actions/actions';
import { connect } from 'react-redux';


export const LocationCard = ({ location, updateWishlist }) => {

  return (
    <aside className="card">
    <div className="card-title-container">
      <h3 className="card-title">{location.location}</h3>

      <div className="card-button-container">
        <button className="card-button" onClick={() => updateWishlist(location)}>Add to Wishlist</button>
        <button className="card-button">View Map</button>
      </div>

    </div>
      <p className="card-description">{location.description}</p>
    </aside>
  )
}

export const mapDispatchToProps = dispatch => ({
  updateWishlist: newLocation => dispatch(updateWishlist(newLocation))
})

export default connect(null, mapDispatchToProps)(LocationCard);
