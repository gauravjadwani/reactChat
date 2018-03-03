import React, { Component } from 'react';
import Sidebar from './common/Sidebar';
import { Grid, Segment,Menu } from 'semantic-ui-react';
import FriendList from './FriendList';
import Chat from './Chat2';
import './../css/index2.css';

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <Grid columns={3} divided>
  <Grid.Row stretched>
    <Grid.Column>
 <Segment><FriendList/></Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment><Chat/></Segment>

    </Grid.Column>
    <Grid.Column>
      <Segment>1</Segment>
      <Segment>2</Segment>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid.Row>
  </Grid>
    </div>
    );
  }
}

export default LandingScreen;
