import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setIsPlaying,
}) => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      <div className="library-songs">
        {songs
          .filter((song) => {
            //search implementation
            if (searchTerm === "") {
              return song;
            } else if (
              song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              song.artist.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return song; //show the desired song
            }
          })
          .map((song) => (
            <LibrarySong
              songs={songs}
              cover={song.cover}
              name={song.name}
              artist={song.artist}
              active={song.active}
              key={song.id}
              id={song.id}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              setIsPlaying={setIsPlaying}
            />
          ))}
      </div>
    </div>
  );
};

export default Library;
