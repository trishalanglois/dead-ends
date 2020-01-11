import React from 'react';
import './LocationCard.scss';

export const LocationCard = ({ location, description }) => {

  return (
    <aside className="card">
    <div className="card-title-container">
      <h3 className="card-title">{location}</h3>

      <div className="card-button-container">
        <button className="card-button">Add to Wishlist</button>
        <button className="card-button">View Map</button>
      </div>
      
    </div>
      <p className="card-description">{description}</p>
    </aside>
  )
}

export default LocationCard;
