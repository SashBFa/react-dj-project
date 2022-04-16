import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NextGig from "../components/NextGig";
import { Parallax, Background } from "react-parallax";

const Home = () => {
  return (
    <main className="home">
      <Navigation />
      <Header />
      <NextGig />
      <div className="about">
        <img
          className="about__img"
          src="./assets/images/home-dj.jpg"
          alt="about DJ"
        />
        <h2 className="about__title">About DJ Angerone</h2>
        <p className="about__p">
          Mike Myers, professionally known as DJ Angerone, is internationally
          acclaimed Progressive House & Trance DJ & musician.
        </p>

        <div className="about__path">
          <div className="about__path--left"></div>
          <div className="about__path--right"></div>
          <p className="about__comment">
            I try experiment with various music genres in every track that I
            make.
          </p>
        </div>

        <p className="about__p">
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
            <button className="button button--big">view discography</button>
          </div>
        </Parallax>
      </div>
    </main>
  );
};

export default Home;
