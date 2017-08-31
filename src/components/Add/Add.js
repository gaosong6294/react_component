import React, {Component} from 'react';

export default class Add extends Component{

  state = {
    content: ''
  };

  submit = () => {
    const username = this.refs.username.value.trim();
    const content = this.state.content.trim();
    if(!username || !content){
      return
    }
    const comment = {username, content};
    this.props.addComment(comment);
    this.refs.username.value = '';
    this.setState({content: ''});
  };

  handleChange = (event) => {
    const content = event.target.value;
    this.setState({content});
  };

  render(){
    const {content} = this.state;
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
            onChange={this.handleChange} value={content}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right"
              onClick={this.submit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}