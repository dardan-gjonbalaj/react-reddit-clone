import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addPost } from "../../store/actions";
import Post from "../post";
import Vote from "../vote";
import shortid from "shortid";

class FrontPage extends Component {
  render() {
    if (!this.props.state) {
      return <p>loading...</p>;
    }

    return (
      <div>
        {this.props.state.data.map((post) => (
          <Fragment key={shortid.generate()}>
            <Post data={post} />
          </Fragment>
        ))}
        {/*<pre>{JSON.stringify(this.state.data, null, 2)}</pre>*/}
      </div>
    );
  }

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
});

export default connect(mapStateToProps, mapDispatchToStore)(FrontPage);
