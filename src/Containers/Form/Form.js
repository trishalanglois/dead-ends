import React, { Component } from 'react';
import './Form.scss';
import { connect } from 'react-redux';
import { currentUser, setLocation } from '../../actions/actions';



class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      location: '',
      error: false
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

      //splice user's location into city and state
      //mapdispatch -- update user's location

      //iterate through data, finding locations -- must match city AND state
      //push into new array in mapDispatch -- filteredlocations
      //Router to locations page
      //render LocationsContainer


    } else {
      this.handleError();
    }
  }

  handleError() {
    this.setState({error: true})
  }

  render() {
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
  setLocation: location => dispatch(setLocation(location))
})




export default connect(null, mapDispatchToProps)(Form);
