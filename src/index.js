import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link} from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);
