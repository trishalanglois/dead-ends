import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Form from '../../Containers/Form/Form';
import { Route } from 'react-router-dom';
import LocationContainer from '../../Containers/LocationContainer/LocationContainer';


export class App extends Component {

  render() {
    return (
      <>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={Form}/>
        <Route path="/locations" component={LocationContainer}/>
      </>

    )
  }
}

export default App;
