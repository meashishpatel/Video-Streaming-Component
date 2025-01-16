import { useRef, useEffect } from "react";

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      videoElement.pause();
      videoElement.src = `http://localhost:5500/videos/${videoId}`;
      videoElement.load();

      const handleLoadedData = () => {
        videoElement.play().catch((error) => {
          console.error("Failed to play video:", error);
        });
      };

      videoElement.addEventListener("loadeddata", handleLoadedData);

      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [videoId]);

  return (
    <video ref={videoRef} width="640" height="360" controls>
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
