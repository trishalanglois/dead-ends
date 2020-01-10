import React from 'react';
import './LocationCard.scss';

export const LocationCard = ({ location, description, key }) => {

  return (
    <aside>
      <h3>{location}</h3>
      <p>{description}</p>
    </aside>
  )
}

export default LocationCard;
