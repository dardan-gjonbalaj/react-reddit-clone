import React from "react";
import { Link } from "react-router-dom";
import Vote from "../vote/";

const Post = (props) => {
  return (
    <div>
      <Vote props={props.data.score} />

      <Link to={props.data.permalink}>
        <h4>{props.data.title}</h4>
      </Link>

      <p>{`u/${props.data.author}`}</p>
      <Link to={`${props.data.subreddit_name_prefixed}`}>
        {props.data.subreddit_name_prefixed}
      </Link>
      <div>
        <img
          src={props.data.thumbnail ? props.data.thumbnail : null}
          alt={props.data.title}
        />
      </div>
      <p>comments: {props.data.num_comments}</p>
    </div>
  );
};

export default Post;
