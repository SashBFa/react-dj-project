import React from "react";
import SprayPictures from "./SprayPictures";

const Fanbase = () => {
  return (
    <div className="fanbase">
      <SprayPictures />
      <div className="fanbase__bigbox">
        <h2 className="fanbase__title">Join the Fanbase</h2>
        <p className="fanbase__p">
          Take your chance to join DJ Angerone's fan club to receive exclusive
          tracks, free downloads, and other great offers.
        </p>
        <div className="fanbase__box">
          <i className="fa-solid fa-compact-disc"></i>
          <h3 className="fanbase__h3">Exclusive Releases</h3>
          <p className="fanbase__info">
            Get access to unreleased albums and EPs before they are published.
          </p>
        </div>
        <div className="fanbase__box">
          <i className="fa-solid fa-compact-disc"></i>
          <h3 className="fanbase__h3">Full DJ Sets & Podcasts</h3>
          <p className="fanbase__info">
            Listen and download full sets podcasts with tracklists by DJ
            Angerone.
          </p>
        </div>
        <div className="fanbase__box">
          <i className="fa-solid fa-compact-disc"></i>
          <h3 className="fanbase__h3">Free Downloads</h3>
          <p className="fanbase__info">
            Free tracks and remixes are regularly published for DJ Angerone's
            fan club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fanbase;
