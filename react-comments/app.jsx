class Recommend extends React.Component{
  render(){
    return (
     <div>
       <p>推荐一款神器：<a href="https://browsersync.io/" target="_blank">BrowserSync</a></p>
     </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="comment-body">
          {this.props.children}
        </div>
        <div className="comment-author">
         <img className="comment-header" src="http://up.qqjia.com/z/14/tu17249_4.jpg"/>   - {this.props.author}
        </div>
      </div>
    );
  }
}

class CommentForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const author = this.refs.author.getDOMNode().value.trim();
    const body = this.refs.body.getDOMNode().value.trim();
    const form = this.refs.form.getDOMNode();

    this.props.onSubmit({author: author, body: body});

    form.reset();
  }

  render() {
    return (
      <form className="comment-form" ref="form" onSubmit={e => {this.handleSubmit(e)}}>
        <input type="text" placeholder="用户名" ref="author"/>
        <input type="text" placeholder="评论" ref="body"/>
        <input type="submit" value="添加评论"/>
      </form>
    );
  }
}



class CommentList extends React.Component {
  render() {
    var commentsNode = this.props.comments.map(function(comment, index) {
      return <Comment key={'comment-' + index} author={comment.author}>{comment.body}</Comment>
    });
    return (
      <div className="comment-list">
        {commentsNode}
      </div>
    );
  }
}


class CommentBox extends React.Component {

  constructor(props) {
    super();
    this.state = {
      comments: props.comments || []
    };
  }

  loadDataFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      success: comments => {
        this.setState({comments: comments});
      },
      error: (xhr, status, err) => {
        console.log(err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadDataFromServer();
  }

  handleNewComment(comment) {

    const comments = this.state.comments;
    const newComments = comments.concat([comment]);
    this.setState({comments: newComments});

    setTimeout(() => {
      $.ajax({
        url: this.props.url,
        dataType: "json",
        type: "POST",
        data: comment,
        success: comments => {
          this.setState({comments: comments});
        },
        error: (xhr, status, err) => {
          console.log(err.toString());
          this.setState({comments: comments});
        }
      });
    }, 2000);

  }

  render() {
    return (
      <div className="comment-box">
        <h1>React评论小项目</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={comment => this.handleNewComment(comment)}/>
        <Recommend/>
      </div>
    );
  }
}

box = React.render(
  <CommentBox url="comments.json"/>,
  document.getElementById('content')
);
