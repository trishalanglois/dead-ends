import React from 'react';
import './LocationCard.scss';

export const LocationCard = ({ location, description }) => {

  return (
    <aside className="card">
      <h3 className="card-title">{location}</h3>
      <p className="card-description">{description}</p>
    </aside>
  )
}

export default LocationCard;
