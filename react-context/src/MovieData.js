import React, { Component } from "react";
import Display from "./Display";
import { MovieContext } from "./MovieProvider";

class MovieData extends Component {
  static contextType = MovieContext;
  //   state = {
  //     movies: [
  //       {
  //         id: 1,
  //         name: "bandersnatch",
  //         price: "$10",
  //       },
  //       {
  //         id: 2,
  //         name: "tau",
  //         price: "$20",
  //       },
  //       {
  //         id: 3,
  //         name: "harry potter",
  //         price: "$10",
  //       },
  //     ],
  //   };

  render() {
    console.log(this.context);
    return (
      <>
        <Display movies={this.context} />
      </>
    );
  }
}

export default MovieData;
