import React, { useState } from "react";
import video from "../data/video.js";
import About from "./About.js";
import CommentList from "./CommentsList.js";

function App() {
  console.log("Here's your data:", video);
  const [hide, setHide] = useState(false);
  function handleHide() {
    setHide(hide => !hide)
  }
  return (
    <div className="App">
      <About
        videoUrl={video.embedUrl}
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        hide={hide}
        onHide={handleHide}
      />
      <CommentList hide={hide} comments={video.comments} />
    </div>
  );
}

export default App;
