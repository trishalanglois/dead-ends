import React, { Component } from 'react';
import './Form.scss';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      location: ''
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
      console.log(false);
    }
  }


  render() {
    return (
      <main className="form-container">
        <form>
          <label className="input-label" for="username">Ghost Hunter Name</label>
          <input
            className="form-input"
            value={this.state.username}
            name="username"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <label className="input-label" for="user-location">Location</label>
          <input
            className="form-input"
            placeholder="e.g. Denver, CO"
            value={this.state.location}
            name="location"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
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
