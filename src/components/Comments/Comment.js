import React from "react";

const Comment = props => {
  return (
    <div className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.comment.name}</h5>
        <small>{props.comment.email}</small>
      </div>
      <p className="mb-1">{props.comment.body}</p>
    </div>
  );
};

export default Comment;
