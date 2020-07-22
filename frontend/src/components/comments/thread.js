import React from "react";
import shortid from "shortid";

const Thread = ({ props }) => {
  return (
    <div>
      <div className="comment">
        <h3 className="comment__author">{props.data.author}</h3>
        <p
          className="comment__text"
          dangerouslySetInnerHTML={{ __html: props.data.body }}
        />

        {props.data.replies &&
          props.data.replies.data.children.map((c) => {
            if (c.kind === "more") {
              return (
                <p key={shortid.generate()} className="comment__replies">
                  {c.data.count} more replies
                </p>
              );
            }

            return (
              <div key={shortid.generate()}>
                <h3 className="comment__author">{c.data.author}</h3>
                <p
                  className="comment__text"
                  dangerouslySetInnerHTML={{ __html: c.data.body }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Thread;
