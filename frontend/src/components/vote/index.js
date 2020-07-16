import React, { Component } from "react";
import frontpage from "../pages/frontpage";
import { increaseCount, decreaseCount } from "../../store/actions";
import Post from "../vote/";
class Vote extends Component {
  constructor({ props }) {
    super({ props });
    this.state = {
      count: props,
    };
  }

  upvote = (event) => {
    console.log(event);
    this.setState({ count: event + 1 });
  };

  downvote = (event) => {
    console.log(event);
    this.setState({ count: event - 1 });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={() => this.upvote(this.state.count)}>
          UP
        </button>
        <p>Votes: {this.state.count}</p>
        <button type="submit" onClick={() => this.downvote(this.state.count)}>
          DOWN
        </button>
      </div>
    );
  }
}
export default Vote;
