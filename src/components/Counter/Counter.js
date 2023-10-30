import React, { useState } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};
const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      COUNT: {count}
      <br />
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
