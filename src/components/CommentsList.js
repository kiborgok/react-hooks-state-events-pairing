import React from "react";
import Comment from "./Comment";

function CommentList({ comments, hide }) {
  return hide ? null : (
    <>
      <h3>{comments.length} Comments</h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
      ))}
    </>
  );
}

export default CommentList;
