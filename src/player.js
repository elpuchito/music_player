import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  currentSong,
  isPlaying,
  setisPlaying,
  audioRef,
  songInfo,
  setsongInfo,
  setcurrentSong,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);
  //state

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setisPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setisPlaying(!isPlaying);
    }
  };

  //format time function

  const getTime = (decimals) => {
    return (
      Math.floor(decimals / 60) +
      ":" +
      ("0" + Math.floor(decimals % 60)).slice(-2)
    );
  };
  //
  const dragHandler = (e) => {
    //avoid reset handler behavior
    audioRef.current.currentTime = e.target.value;
    //setState
    setsongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // function isFinished() {
  //   if (currentIndex >= songs.length - 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  const skipHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skipForward") {
      if (currentIndex >= songs.length - 1) {
        await setcurrentSong(songs[0]);
      } else {
        await setcurrentSong(songs[currentIndex + 1]);
      }
    }

    if (direction === "skipBack") {
      console.log(currentIndex);
      if (currentIndex === 0) {
        await setcurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
      } else {
        await setcurrentSong(songs[currentIndex - 1]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("skipBack")}
          className="skip-back"
          size="2x"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipHandler("skipForward")}
          className="skip-foward"
          size="2x"
          icon={faAngleDoubleRight}
        />
      </div>
    </div>
  );
};

export default Player;
