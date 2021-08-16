import React from "react";
import useCounter from "./use-counter";

function MyCounting() {
  const [count, Increment, Decrement] = useCounter(10, 2);  //  (val, step)

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={Increment}  className="btn btn-primary">Increment</button>
        <button onClick={Decrement} className="btn btn-danger" >Decrement</button>
    </div>
  );
}

export default MyCounting;