import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Post from "../post";
import shortid from "shortid";

class Subreddit extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const { subreddit } = this.props.match.params;
    console.log(subreddit);
    //fetch(`https://www.reddit.com/r/${subreddit}.json`)
    fetch(`http://localhost:8000/frontpages/${subreddit}`)
      .then((res) => res.json())
      .then((json) => {
        const {
          data: { children },
        } = json;

        const data = children.reduce((acc, curr) => {
          acc.push(curr.data);
          return acc;
        }, []);

        this.setState({ data });
      })
      .catch((err) => {
        // redirect to 404
      });
  }

  render() {
    if (!this.state.data) {
      return <p>loading...</p>;
    }

    return (
      <div>
        {this.state.data.map((post) => (
          <Post key={shortid.generate()} data={post} />
        ))}
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default withRouter(Subreddit);
