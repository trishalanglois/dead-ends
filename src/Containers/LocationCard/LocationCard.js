import React, { Component } from 'react';
import './LocationCard.scss';
import { updateFavorites, updateClickedCard } from '../../actions/actions';
import { connect } from 'react-redux';


export class LocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    }
  }

  mapHandler = (location) => {
    this.props.updateClickedCard(location);
    this.setState({showMap: true})
    // render map component 
  }

  render() {
    return (
    <aside className="card">
    <div className="card-title-container">
      <h3 className="card-title">{this.props.cardLocation.location}</h3>

      <div className="card-button-container">
        <button className="card-button" onClick={() => this.props.updateFavorites(this.props.cardLocation)}>Add to Favorites</button>
        <button className="card-button" onClick={() => this.mapHandler(this.props.cardLocation)}>View Map</button>
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
