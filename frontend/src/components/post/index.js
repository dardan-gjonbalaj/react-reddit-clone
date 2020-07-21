import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Vote from "../vote/";
import "./styles.scss";

const Post = (props) => {
  useEffect(() => {
    console.log(props.data);
  }, []);

  const handleOnClick = (event) => {
    console.log(event);
  };

  return (
    <div className="post">
      <Vote score={props.data.score} />
      <div>
        <Link className="post__link" to={props.data.permalink}>
          <h4 className="post__title">{props.data.title}</h4>
        </Link>

        <p className="post__author">{`u/${props.data.author}`}</p>
        <Link to={`${props.data.subreddit_name_prefixed}`}>
          {props.data.subreddit_name_prefixed}
        </Link>

        {props.data.is_self ? (
          <p className="post__text">{props.data.selftext}</p>
        ) : props.data.is_video && props.data.media != "null" ? (
          <video className="post__video" controls>
            <source
              src={props.data.media.reddit_video.fallback_url}
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            className="post__img"
            src={props.data.url ? props.data.url : null}
            alt={props.data.thumbnail}
          />
        )}

        <Link className="post__comments" to={props.data.permalink}>
          comments: {props.data.num_comments}
        </Link>
        <button
          type="button"
          className="post__save"
          onClick={(event) => handleOnClick(props.data)}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Post;
