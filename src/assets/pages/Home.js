import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NextGig from "../components/NextGig";
import { Parallax, Background } from "react-parallax";
import { NavLink } from "react-router-dom";
import Album from "../components/Album";
import Fanbase from "../components/Fanbase";
import TourSchedule from "../components/TourSchedule";

const Home = () => {
  return (
    <main className="home">
      <Navigation />
      <Header />
      <NextGig />
      <div className="aboutHome">
        <img
          className="aboutHome__img"
          src="./assets/images/home-dj.jpg"
          alt="about DJ"
        />
        <h2 className="aboutHome__title">About DJ Angerone</h2>
        <p className="aboutHome__p">
          Mike Myers, professionally known as DJ Angerone, is internationally
          acclaimed Progressive House & Trance DJ & musician.
        </p>

        <div className="aboutHome__path">
          <div className="aboutHome__path--left"></div>
          <div className="aboutHome__path--right"></div>
          <p className="aboutHome__comment">
            I try experiment with various music genres in every track that I
            make.
          </p>
        </div>

        <p className="aboutHome__p">
          Since the beginning if his career in 2010, he has already released 5
          EPs on a range of worldwide know labels (Booster Records, DSTRCT
          Recordings etc.) and received a number of music awards.
        </p>
      </div>
      <div className="viewDisco">
        <Parallax strength={100}>
          <Background>
            <div className="viewDisco__parallax" />
          </Background>
          <div className="viewDisco__box">
            <h2>
              Listen to the latest <br /> Releases by DJ Angerone
            </h2>
            <NavLink to={"/discography"}>
              <button className="button button--big">view discography</button>
            </NavLink>
          </div>
        </Parallax>
      </div>
      <div className="lastestReleases">
        <h2 className="lastestReleases__title">Lastest Releases</h2>
        <p className="lastestReleases__p">
          Here are the most recent singles, EPs and other releases that DJ
          Angerones has worked on. You can stream and buy them on our website
          and a variety of digital store
        </p>
        <Album show={3} />
      </div>
      <Fanbase />
      <TourSchedule />
    </main>
  );
};

export default Home;
