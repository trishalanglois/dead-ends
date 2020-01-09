import React, { Component } from 'react';
import './Form.scss';


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
      console.log(true);
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

export default Form;
