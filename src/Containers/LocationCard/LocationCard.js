import React, { Component } from 'react';
import './LocationCard.scss';
import { updateFavorites, updateClickedCard } from '../../actions/actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';



export class LocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    }
  }

  mapHandler = (location) => {
    this.props.updateClickedCard(location);
  }

  render() {
    return (
    <aside className="card">
    <div className="card-title-container">
      <h3 className="card-title">{this.props.cardLocation.location}</h3>
      <div className="button-wrapper">
        <button className="map-button" onClick={() => this.props.updateFavorites(this.props.cardLocation)}>Add to Favorites</button>

        <Link to={`location/${this.props.cardLocation.location}`}>

          <button className="card-button" onClick={() => this.mapHandler(this.props.cardLocation)}>View Map</button>

        </Link>

        </div>
    </div>
      <p className="card-description">{this.props.cardLocation.description}</p>
    </aside>
    )
  }
}

//on button click, updated in redux
//render the map component
//when the map component renders, it dynamically takes in the longitude and latitude

export const mapDispatchToProps = dispatch => ({
  updateFavorites: newLocation => dispatch(updateFavorites(newLocation)),
  updateClickedCard: clickedLocation => dispatch(updateClickedCard(clickedLocation))
})

export default connect(null, mapDispatchToProps)(LocationCard);
