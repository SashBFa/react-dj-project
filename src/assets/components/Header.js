import React from "react";
import { Parallax, Background } from "react-parallax";
import PlayerAudio from "./PlayerAudio";

const Header = (props) => {
  return (
    <header className="header">
      <Parallax strength={300}>
        <Background>
          <div className="header__parallax" />
        </Background>
        <div className="header__box">
          <div className="header__title">
            <h3>New Songs</h3>
          </div>
          <PlayerAudio />
        </div>
      </Parallax>
    </header>
  );
};

export default Header;
