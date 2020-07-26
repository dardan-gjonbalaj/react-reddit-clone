import React from "react";
import { Link } from "react-router-dom";
import Vote from "../vote/";
import "./styles.scss";

const Post = (props) => {
  return (
    <div className="post">
      <Vote score={props.data.score} />
      <div>
        <p className="post__author">{`u/${props.data.author}`}</p>
        <Link className="post__link" to={props.data.permalink}>
          <h4 className="post__title">{props.data.title}</h4>
        </Link>
        <Link to={`${props.data.subreddit_name_prefixed}`}>
          {props.data.subreddit_name_prefixed}
        </Link>

        {props.data.is_self ? (
          <p className="post__text">{props.data.selftext}</p>
        ) : props.data.is_video && props.data.media !== "null" ? (
          <video className="post__video" controls>
            <source
              src={props.data.media.reddit_video.fallback_url}
              type="video/mp4"
            />
          </video>
        ) : props.data.post_hint === "image" ||
          props.data.post_hint === "rich:video" ? (
          <img
            className="post__img"
            src={
              props.data.media
                ? props.data.media.oembed.thumbnail_url
                : props.data.post_hint === "image"
                ? props.data.url
                : props.data.thumbnail
            }
            alt={props.data.thumbnail}
          />
        ) : (
          <div className="post__url">
            <a href={props.data.url} target="_blank" rel="noopener noreferrer">
              {props.data.url}
            </a>
          </div>
        )}

        <Link className="post__comments" to={props.data.permalink}>
          comments: {props.data.num_comments}
        </Link>
      </div>
    </div>
  );
};

export default Post;
