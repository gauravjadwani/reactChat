import React, { Component } from 'react';
import Sidebar from './common/Sidebar.js';
import './../css/index.css';

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <Sidebar className="sidebarr"/>
      </div>
    );
  }
}

export default LandingScreen;
