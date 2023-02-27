import React, { Component } from "react";
import { connect } from "react-redux";
import { onDecrement } from "./action";

class CounterTwo extends Component {

  handleDec = () => {
    this.props.onDec(1);
  };

  render() {
    return (
      <>
        <button onClick={this.handleDec}>-</button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDec: (val) => dispatch(onDecrement(val)),
  };
};

export default connect(null, mapDispatchToProps)(CounterTwo);

