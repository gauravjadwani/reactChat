import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
// import Header from './components/common/Header';
// import Signup from './components/Signup';
import LandingScreen from './components/LandingScreen';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingScreen}/>
  </Route>
);
