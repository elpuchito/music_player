import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Nav = ({ libraryStatus, setlibraryStatus }) => {
  return (
    <nav>
      <h1>Culiamos</h1>
      <button
        onClick={() => {
          setlibraryStatus(!libraryStatus);
        }}
      >
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
