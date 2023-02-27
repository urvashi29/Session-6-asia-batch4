import React, { Component } from "react";
import { connect } from "react-redux";
import { onIncrement } from "./action";

class Counter extends Component {
  handleInc = () => {
    this.props.onInc(2);
    // alert('updating count: ' + this.props.count);
  };

  render() {
    console.log(this.props);

    return (
      <>
        {this.props.count}
        <button onClick={this.handleInc}>+</button>
      </>
    );
  }
}

//get the data from central storage(state)
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

//send the data to the store
const mapDispatchToProps = (dispatch) => {
  return {
    onInc: (val) => dispatch(onIncrement(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// let person = {
//     fullName: (a) => {

//     }
// }

// person.fullName(5)
