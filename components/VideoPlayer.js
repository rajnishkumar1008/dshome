import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src, poster }) => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleScroll = () => {
    const video = videoRef.current;

    if (video && !video.paused) {
      const videoRect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (videoRect.bottom <= 0 || videoRect.top >= windowHeight) {
        // Video is outside the window, pause it
        video.pause();
        setPlaying(false);
      } else if (videoRect.top >= 0 && videoRect.bottom <= windowHeight) {
        // Video is fully visible, play it
        video.play();
        setPlaying(true);
      } else {
        // Video is partially visible, mute it
        video.muted = true;
        setMuted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        controls={false}
        width="100%"
        height="100%"
      ></video>
      <div className="back-dd">
        <div
          className={`play-button ${playing ? "hidden" : ""}`}
          onClick={handlePlayClick}
        >
          <div className="cent">
            <div className="left">
              <h3>
                We Relentlessly Seek
                <span>Change & Growth for Reshaping</span>
              </h3>
            </div>
            <div className="icon">
              {" "}
              <i class="bi bi-play-circle"></i>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-player {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 1;
        }

        .play-button.hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
