import { useReducer } from "react";
function reducer(state, action) {
  console.log(action);
  console.log(state);
  if (action.type === "increment")
    return { ...state, count: state.count + 1 };
  if (action.type === "decrement")
    return { ...state, count: state.count - 1};
  if (action.type === "reset") return { count: 0, step: 1 };
  if (action.type === "defineStep") return { ...state, step: action.payload };
  if (action.type === "defineCount") return { ...state, count: action.payload };
}
function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

 



  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({ type: "defineStep", payload: Number(e.target.value) })
          }
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          -
        </button>
        <input value={count} onChange={(e)=>dispatch({type:"defineCount", payload:Number( e.target.value )})} />
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
