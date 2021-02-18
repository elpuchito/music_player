import React, { useState } from "react";

import Player from "./player";
import Song from "./song";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setisPlaying={setisPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
