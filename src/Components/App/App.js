import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Form from '../../Containers/Form/Form';
import { Route, Switch } from 'react-router-dom';
import LocationContainer from '../../Containers/LocationContainer/LocationContainer';
import FavoritesContainer from '../../Containers/FavoritesContainer/FavoritesContainer';
import MapContainer from '../../Containers/MapContainer/MapContainer'
import NoURLMatch from '../../Components/NoURLMatch/NoURLMatch';


export class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={Form}/>
          <Route path="/locations" component={LocationContainer}/>
          <Route path="/favorites" component={FavoritesContainer}/>
          <Route path="/location" component={MapContainer}/>
          <Route component={NoURLMatch}/>
        </Switch>
      </>
    )
  }
}

export default App;
