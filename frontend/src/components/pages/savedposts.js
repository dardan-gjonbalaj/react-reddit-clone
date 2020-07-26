import React, { Component } from "react";
import Post from "../post";
import shortid from "shortid";

class SavedPosts extends Component {
  state = {
    saved: null,
  };

  componentDidMount() {
    fetch(`http://localhost:8000/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => this.setState({ saved: json }));
  }

  render() {
    if (!this.state.saved) {
      return <p>loading...</p>;
    }
    return (
      <div className="savedposts">
        <h1 className="savedposts__header">Saved Posts:</h1>
        <div className="savedposts__posts">
          {this.state.saved.map((data) => (
            <Post key={shortid.generate()} data={data.post} />
          ))}
        </div>
      </div>
    );
  }
}
export default SavedPosts;
