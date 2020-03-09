import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

import { Login, Interests, Home } from 'pages';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import './index.css';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Lato:400,700', 'Open Sans:400,400i']
  }
});

const routing = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/interests" component={Interests} />
  </Router>
)

ReactDOM.render(<ThemeProvider theme={theme}>{routing}</ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
