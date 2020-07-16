import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Post from "../post";
import shortid from "shortid";

class Comments extends Component {
  state = {
    post: null,
    comments: null,
  };

  componentDidMount() {
    const { subreddit, id, name } = this.props.match.params;
    console.log(
      `https://www.reddit.com/r/${subreddit}/comments/${id}/${name}/.json`
    );

    fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/${name}/.json`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json[1].data.children);
        this.setState({
          post: json[0].data.children[0].data,
          comments: [json[1].data.children],
        });
      })
      .catch((err) => {
        // redirect to 404
        console.log("wrew");
      });
  }

  render() {
    if (!this.state.post) {
      return <p>loading...</p>;
    }
    return (
      <div>
        <Post data={this.state.post} />
        <div>
          {this.state.comments[0].map((comment) => (
            <div>
              <p>{comment.data.body}</p>
              <h3>{comment.data.author}</h3>
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default withRouter(Comments);
