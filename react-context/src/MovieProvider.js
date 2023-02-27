import React, { Component, createContext } from "react";

export const MovieContext = createContext();

export class MovieProvider extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "bandersnatch",
        price: "$10",
      },
      {
        id: 2,
        name: "tau",
        price: "$20",
      },
      {
        id: 3,
        name: "harry potter",
        price: "$10",
      },
    ],
  };

  render() {
    return (
      <MovieContext.Provider value={this.state.movies}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export default MovieProvider;
