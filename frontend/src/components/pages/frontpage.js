import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addPost, savePost } from "../../store/actions";
import Post from "../post";
import shortid from "shortid";
import "./styles.scss";

class FrontPage extends Component {
  render() {
    if (!this.props.state) {
      return <p>loading...</p>;
    }

    return (
      <div className="frontpage">
        {this.props.state.data.map((post) => (
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

  handleOnClick = (event) => {
    //I can make the redux action savePost handle but this is for simplicity sake

    console.log(event);
    const x = fetch(`http://localhost:8000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ event }),
    });
    console.log(x);
  };

  componentDidMount() {
    fetch(`http://localhost:8000/frontpages`)
      .then((res) => res.json())
      .then((json) => {
        const {
          data: { children },
        } = json;

        const data = children.reduce((acc, curr) => {
          acc.push(curr.data);
          return acc;
        }, []);

        this.props.addPost({ data });
      })
      .catch((err) => {
        // redirect to 404
      });
  }
}

const mapStateToProps = ({ state }) => ({
  state,
});

const mapDispatchToStore = (dispatch) => ({
  addPost: (payload) => dispatch(addPost(payload)),
  savePost: (payload) => dispatch(savePost(payload)),
});

export default connect(mapStateToProps, mapDispatchToStore)(FrontPage);
