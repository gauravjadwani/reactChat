import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';

const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

export default class FriendList extends Component {
  render() {
    return (
      <Item.Group divided>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     <Item>
       <Item.Image src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' size="tiny"/>
        <Item.Content>
         <Item.Header as='a'>12 Years a Slave</Item.Header>
         <Item.Meta>
           <span className='cinema'>Union Square 14</span>
         </Item.Meta>
         <Item.Description>{paragraph}</Item.Description>
         <Item.Extra>
           <Label>IMAX</Label>
           <Label icon='globe' content='Additional Languages' />
         </Item.Extra>
       </Item.Content>
     </Item>
     </Item.Group>
    );
  }
}

// export default FriendList;
