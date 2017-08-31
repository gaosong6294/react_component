import React, {Component} from 'react';
import Pubsub from 'pubsub-js';
import Add from '../Add/Add';
import List from '../List/List';

export default class App extends Component{

  state = {
    comments: [
      {username: 'Juhua', content: 'React真鸡巴难~!'},
      {username: 'Big-Juhua', content: 'React真鸡巴简单~!'}
    ]
  };

  componentDidMount(){
    Pubsub.subscribe('deleteComment', (message, index) => (
      this.deleteComment(index)
    ))
  };

  addComment = (comment) => {
    const {comments} = this.state;
    comments.unshift(comment);
    this.setState({comments});
  };

  deleteComment = (index) => {
    const {comments} = this.state;
    comments.splice(index, 1);
    this.setState({comments});
  };

  render(){
    const {comments} = this.state;
    return(
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment} deleteComment={this.deleteComment}></Add>
          <List comments={comments}></List>
        </div>
      </div>
    )
  }
}