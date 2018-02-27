import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/common/Header.js';
import Sidebar from './components/common/Sidebar.js';
import { Grid, Image } from 'semantic-ui-react'
// import './semantic.min.css';

class App extends Component {
  constructor (props) {
         super(props);
       }
  render() {
      console.log('App');
    return (
      <div>
{this.props.children}
 </div>
    );
  }
}

export default App;
