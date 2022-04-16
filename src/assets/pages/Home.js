import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NextGig from "../components/NextGig";

const Home = () => {
  return (
    <main className="home">
      <Navigation />
      <Header />
      <NextGig />
      <About />
    </main>
  );
};

export default Home;
