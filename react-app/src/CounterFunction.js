import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onIncrement, onDecrement } from "./action";

const CounterFunction = () => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(onIncrement(2));
  };

  const dec = () => {
    dispatch(onDecrement(1));
  };

  return (
    <div>
      {counter}
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default CounterFunction;
