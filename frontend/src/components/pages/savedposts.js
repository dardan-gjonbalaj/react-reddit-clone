import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedPosts } from "../../store/actions";
import Post from "../post";
import shortid from "shortid";

class SavedPosts extends Component {
  componentDidMount() {
    this.props.getSavedPost();
  }

  render() {
    if (!this.props.saved) {
      return <p>loading...</p>;
    }
    return (
      <div className="savedposts">
        <h1 className="savedposts__header">Saved Posts:</h1>
        <div className="savedposts__posts">
          {this.props.saved.map((data) => (
            <Post key={shortid.generate()} data={data.post} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ saved }) => ({
  saved,
});

const mapDispatchToStore = (dispatch) => ({
  getSavedPost: () => dispatch(getSavedPosts()),
});

export default connect(mapStateToProps, mapDispatchToStore)(SavedPosts);
