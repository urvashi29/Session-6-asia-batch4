import React, { Component } from "react";
import MovieData from "./MovieData";
import MovieCount from "./MovieCount";
import MovieProvider from "./MovieProvider";

class App extends Component {
  render() {
    return (
      <>
        <MovieProvider>
          <MovieData />
          <MovieCount />
        </MovieProvider>
      </>
    );
  }
}

export default App;

//state uplifting
