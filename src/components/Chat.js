import React, {Component} from 'react';
import {Comment, Icon, Form,Button} from 'semantic-ui-react';
export default class Chat extends Component {

  render() {
    return (
      <div>
      <Comment.Group size="large">
        <Comment className="left">
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' className="commentImage"/>
          <Comment.Content className="leftContent">
            <Comment.Text className="leftText">
              Hello gaurav
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment className="right">
        <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' className="rightImage commentImage"/>
          <Comment.Content className="rightContent">
            <Comment.Text className="rightText">
              Hey
            </Comment.Text>
            </Comment.Content>
            </Comment>
            <Comment className="left">
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' className="commentImage"/>
              <Comment.Content className="leftContent">
                <Comment.Text className="leftText">
                  Hello gaurav
                </Comment.Text>
              </Comment.Content>
            </Comment>
      </Comment.Group>
    </div>);
  }
}
