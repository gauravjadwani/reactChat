import React, {Component} from 'react';
import {Comment, Icon, Form,Button} from 'semantic-ui-react';
export default class Chat extends Component {

  render() {
    return (
      <div>
      <Comment.Group size="large">
        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg'/>
          <Comment.Content>
            <Comment.Text className="leftText">
              Hello
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
<Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' className="rightImage"/>
          <Comment.Content>
            <Comment.Text className="rightText">
              Hey
            </Comment.Text>
            </Comment.Content>

            </Comment>
            <Comment>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg'/>
              <Comment.Content>
                <Comment.Text className="leftText">
                  Hello
                </Comment.Text>
              </Comment.Content>
            </Comment>
      </Comment.Group>
    </div>);
  }
}
