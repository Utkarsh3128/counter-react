import React, { useState } from "react";

const App = () => {
  // const counter = 15
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetValue=()=>{
    setCounter(0); // to reset the value of counter
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <h2>Counter Value: {counter} </h2>
          <div className="button">
            <button onClick={addValue}>Add Value</button>
            <button onClick={removeValue}>Remove Value</button>
          </div>
          <div className="reset-btn">
            <button onClick={resetValue}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
