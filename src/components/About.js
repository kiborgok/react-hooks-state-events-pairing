import React, { useState } from "react";

function About({
  videoUrl,
  title,
  upvotes,
  downvotes,
  views,
  createdAt,
  hide,
  onHide,
}) {
  const [upvote, setUpVote] = useState(upvotes);
  const [downvote, setDownVote] = useState(downvotes);
  return (
    <>
      <iframe
        width="810"
        height="450"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <button onClick={() => setUpVote((upvote) => upvote + 1)}>
        {upvote} upvotes
      </button>
      <button onClick={() => setDownVote((downvote) => downvote + 1)}>
        {downvote} downvotes
      </button>
      <br />
      <button style={{ marginTop: "20px" }} onClick={() => onHide()}>
        {hide ? "Show" : "Hide"} Comments
      </button>
      <hr />
    </>
  );
}

export default About;
