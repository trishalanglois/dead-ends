import React, { Component } from 'react';
import './Form.scss';
import { connect } from 'react-redux';
import { currentUser, setLocation, setSpookyLocations } from '../../actions/actions';
import locationData from '../../data.json';
import { Redirect, Link } from 'react-router-dom';


export class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      location: '',
      error: false,
      ready: false,
      noLocations: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLocationSubmit = (e) => {
    e.preventDefault();
    this.checkLocation(this.state.location);
  }

  checkLocation = (location) => {
    const regex = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;
    if (location.match(regex)) {
      this.props.updateUser(this.state.username);
      this.props.setLocation(this.state.location);
      this.findLocations(this.state.location);
    } else {
      this.handleError();
    }
  }

  findLocations = (location) => {
    const splitLocation = location.split(', ');
    const city = splitLocation[0];
    const state = splitLocation[1];
    const filteredLocations = locationData.filter(spookySpot => {
      return spookySpot.city === city && spookySpot.state_abbrev === state
    })
    if (!filteredLocations.length) {
      this.setState({noLocations: true})
    } else {
      this.setState({ ready: true })
      this.props.setSpookyLocations(filteredLocations);
    }
  }

  handleError() {
    this.setState({error: true})
  }

  render() {
    if (this.state.ready) {
      return <Redirect to='/locations' />
    }
    return (
      <main className="form-container">
        <form>
          <label className="input-label">Ghost Hunter Name</label>
          <input
            className="form-input"
            value={this.state.username}
            name="username"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <label className="input-label">Location</label>
          <input
            className="form-input"
            placeholder="e.g. Denver, CO"
            value={this.state.location}
            name="location"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          {this.state.error &&
            <p className="error">Please enter a valid city and state.</p>
          }
          {this.state.noLocations && <p className="error">This location is not haunted.  Please enter a spookier location.</p>}
            <button
              className="form-button"
              type="button"
              onClick={(e) => this.handleLocationSubmit(e)}
            >
              Begin the Hunt
            </button>
        </form>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(currentUser(user)),
  setLocation: location => dispatch(setLocation(location)),
  setSpookyLocations: locations => dispatch(setSpookyLocations(locations))
})

export default connect(null, mapDispatchToProps)(Form);
