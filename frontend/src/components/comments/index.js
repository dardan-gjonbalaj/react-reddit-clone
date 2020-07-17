import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Post from "../post";
import shortid from "shortid";
import "./styles.scss";
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
  //{dangerouslySetInnerHTML={{ __html: comment.data.body_html }}}

  render() {
    if (!this.state.post) {
      return <p>loading...</p>;
    }
    return (
      <div>
        <Post data={this.state.post} />
        <div>
          {this.state.comments[0].map((comment) => (
            <div className="comment">
              <h3 className="comment__author">{comment.data.author}</h3>
              <p
                className="comment__text"
                dangerouslySetInnerHTML={{ __html: comment.data.body }}
              />

              {comment.data.replies &&
                comment.data.replies.data.children.map((c) => {
                  if (c.kind === "more") {
                    return (
                      <p className="comment__replies">
                        {c.data.count} more replies
                      </p>
                    );
                  }

                  return (
                    <div>
                      <h3 className="comment__author">{c.data.author}</h3>
                      <p
                        className="comment__text"
                        dangerouslySetInnerHTML={{ __html: c.data.body }}
                      />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default withRouter(Comments);
