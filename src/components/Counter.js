import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DEC") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "RES") {
    return { ...state, count: 0 };
  }
  return state;
};

const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>useReducer </h1>
      <h2>Count: {state.count}</h2>
      <div className="count-btns">
        <button onClick={() => dispatch({ type: "INC" })}>INC</button>
        <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
        <button onClick={() => dispatch({ type: "RES" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
