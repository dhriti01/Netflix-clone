import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchTopRomanceMovies} />
      <Row title="Documentries" fetchURL={requests.fetchTopDocumentaries}/>
    </div>
  );
}

export default App;
