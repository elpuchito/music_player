import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./player";
import Song from "./song";
import data from "./data";
import Library from "./library";
import Nav from "./nav";

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  //this state is to setup the animation of the drawer
  const [libraryStatus, setlibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage for the slider
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setsongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setcurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        songInfo={songInfo}
        setsongInfo={setsongInfo}
        audioRef={audioRef}
        setisPlaying={setisPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setcurrentSong={setcurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setcurrentSong={setcurrentSong}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
