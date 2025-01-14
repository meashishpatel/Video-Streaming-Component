import "./App.css";
import { useState } from "react";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  const [videoId, setVideoId] = useState(null);

  const playVideo = (e, videoId) => {
    e.preventDefault();
    setVideoId(videoId);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Video Streaming App</h1>
      {videoId && <VideoPlayer videoId={videoId} />}
      <div className="button-container">
        <button className="play-button" onClick={(e) => playVideo(e, "cdn")}>
          Play Video 1
        </button>
        <button
          className="play-button"
          onClick={(e) => playVideo(e, "generate-pass")}
        >
          Play Video 2
        </button>
        <button
          className="play-button"
          onClick={(e) => playVideo(e, "get-post")}
        >
          Play Video 3
        </button>
      </div>
    </div>
  );
}

export default App;
