import React from "react";

const Song = ({ albumcover, currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img className={isPlaying ? "rotateSong" : ""} src={currentSong.name=="Querida Jodase" ? "covers/unnamed.jpg" : albumcover} alt="" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
