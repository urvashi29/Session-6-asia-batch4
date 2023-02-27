import React from "react";
import Counter from "./Counter";
import CounterFunction from "./CounterFunction";
import CounterTwo from "./CounterTwo";

const App = () => {
  return (
    <>
      <Counter />
      <CounterTwo />
      <h2>Function based</h2>
      <CounterFunction />
    </>
  );
};

export default App;
