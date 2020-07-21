import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addPost, savePost } from "../../store/actions";
import Post from "../post";
//import Vote from "../vote";
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
              ref="btn"
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
    console.log(event);
    const kek = fetch(
      `http://localhost:8000/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ event }),
      }
      //.then((res) => savePost(res))
      //.then((json) => json)
      //.catch((e) => console.log(event))
    );
    console.log(kek);
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
        //console.log(this.props);
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
