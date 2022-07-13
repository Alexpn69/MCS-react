import React, { useState, useRef } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());
  const containerRef = useRef();
  // [30.3141, 59.9386]
  useMapbox(containerRef, "");
  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div className="divs" ref={containerRef}></div>
    </>
  );
}
render(<App />, document.querySelector("#root"));
