import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header.js';
import Sidebar from './components/common/Sidebar.js';
import { Grid, Image } from 'semantic-ui-react';
// import './semantic.min.css';

class App extends Component {
  constructor (props) {
         super(props);
       }
  render() {
      console.log('App');
    return (
      <div>


        <Header/>
          <div className="">
            <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          {this.props.children}
        </div>
      </div>
    </div>


 </div>
    );
  }
}

export default App;
