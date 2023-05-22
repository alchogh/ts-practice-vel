import { useReducer } from "react";

function Counter() {
  type Action = { type: "INCREASE" } | { type: "DECREASE" };

  function reducer(state: number, action: Action) {
    switch (action.type) {
      case "INCREASE":
        return state + 1;
      case "DECREASE":
        return state - 1;
      default:
        throw new Error("Unhandled action");
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });
  return (
    <div>
      <div>{count}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
