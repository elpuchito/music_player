import React, { useState } from "react";
import test from "../test.json";

import LibrarySong from "./LibrarySong";

const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
      </div>
      {test
        .filter((song) => {
          if (searchTerm === "") {
            return song; //return all the library
          } else if (
            song.name.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm)
          ) {
            return song; //return the artist
          }
        })
        .map((val, key) => (
          <div>
            <LibrarySong />
          </div>
        ))}
    </div>
  );
};

export default Search;
