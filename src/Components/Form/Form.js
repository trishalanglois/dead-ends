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
            onChange={(event) => this.handleChange(event)}
          />
          <label className="input-label" for="user-location">Location</label>
          <input
            className="form-input"
            value={this.state.location}
            name="location"
            type="text"
            onChange={(event) => this.handleChange(event)}
          />
          <button
            className="form-button"
            type="button"
            onClick={(event) => this.handleLocationSubmit(event)}
          >
            Begin the Hunt
          </button>
        </form>
      </main>

    )
  }
}

export default Form;
