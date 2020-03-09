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
    <Route path="/tag/:slug" component={Home} />
  </Router>
);

ReactDOM.render(<ThemeProvider theme={theme}>{routing}</ThemeProvider>, document.getElementById('root'));
serviceWorker.unregister();
