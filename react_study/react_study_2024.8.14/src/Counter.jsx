// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispath] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispath({ type: "decrement" })}>-</button>
      <button onClick={() => dispath({ type: "increment" })}>+</button>
    </>
  );
}

export default Counter;