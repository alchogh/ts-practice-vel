import { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: Boolean;
};

type Action =
  | {
      type: "SET_COUNT";
      count: number;
    }
  | {
      type: "SET_TEXT";
      text: string;
    }
  | {
      type: "SET_COLOR";
      color: Color;
    }
  | {
      type: "TOGGLE_GOOD";
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count + 3,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("unhandled action");
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "",
    color: "red",
    isGood: true,
  });

  console.log(state);

  const setCount = () => {
    dispatch({ type: "SET_COUNT", count: state.count });
  };

  const setText = () => {
    dispatch({ type: "SET_TEXT", text: "bye" });
  };

  const setColor = () => {
    dispatch({ type: "SET_COLOR", color: "orange" });
  };

  const setToggle = () => {
    dispatch({ type: "TOGGLE_GOOD" });
  };

  return (
    <div>
      <p>
        <code> count : </code> {state.count}
      </p>
      <p>
        <code> text : </code> {state.text}
      </p>
      <p>
        <code> color : </code> {state.color}
      </p>
      <p>
        <code> isGood : </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={setToggle}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
