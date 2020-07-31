import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addPost, savePost, fetchPosts } from "../../store/actions";
import Post from "../post";
import shortid from "shortid";
import "./styles.scss";

class FrontPage extends Component {
  render() {
    if (!this.props.posts.data) {
      return <p>loading...</p>;
    }

    return (
      <div className="frontpage">
        {this.props.posts.data.map((post) => (
          <Fragment key={shortid.generate()}>
            <Post data={post} />

            <button
              className="frontpage__button frontpage_button--save"
              type="button"
              onClick={() => this.handleOnClick(post)}
            >
              Save Post
            </button>
          </Fragment>
        ))}
        {/*<pre>{JSON.stringify(this.state.data, null, 2)}</pre>*/}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleOnClick = (event) => {
    this.props.savePost(event);

    //I can make the redux action savePost handle but this is for simplicity sake
    //   const x = fetch(`http://localhost:8000/posts`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({ event }),
    //   });
    //   console.log(x);
    // };
  };
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToStore = (dispatch) => ({
  addPost: (payload) => dispatch(addPost(payload)),
  savePost: (payload) => dispatch(savePost(payload)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToStore)(FrontPage);
