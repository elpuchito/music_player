import React from "react";
import LibrarySong from "./library-song";

const Library = ({
  songs,
  setcurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            songs={songs}
            setcurrentSong={setcurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
