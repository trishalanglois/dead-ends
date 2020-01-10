import React from 'react';
import './LocationCard.scss';

export const LocationCard = ({ location, description }) => {

  return (
    <aside className="card">
      <p className="card-description">{description}</p>
    </aside>
  )
}

export default LocationCard;
