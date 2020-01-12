import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Form from '../../Containers/Form/Form';
import { Route } from 'react-router-dom';
import LocationContainer from '../../Containers/LocationContainer/LocationContainer';
import FavoritesContainer from '../../Containers/FavoritesContainer/FavoritesContainer';
import MapContainer from '../../Containers/MapContainer/MapContainer'

export class App extends Component {

  render() {
    return (
      <>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={Form}/>
        <Route path="/locations" component={LocationContainer}/>
        <Route path="/favorites" component={FavoritesContainer}/>
        <Route path="/location" component={MapContainer}/>
      </>

    )
  }
}

export default App;
