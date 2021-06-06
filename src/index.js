import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const onButtonClickAdd = () => {
    setCount(count + 1);
  };
  const onButtonClickSubtract = () => {
    setCount(count-1);
  };
  return (
    <div>
      <div>
        <button className="ui button" 
        style={{color:'blue',backgroundColor:'yellow'}}
          onClick={() => {
            onButtonClickAdd();
          }}
        >
          Click Me To Add To The Count!
        </button>
      </div>
      <div style={{marginTop:'10px'}}>
        <button className="ui button"
        style={{color:'red',backgroundColor:'black'}}
          onClick={() => {
            onButtonClickSubtract();
          }}
        >
          Click Me To Subtract From The Count!
        </button>
      </div>

      <h1>Current Count: {count}</h1>
      <div></div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
