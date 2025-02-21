import React from "react";
import Quiz from "./Quiz";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src="/toto.png" alt="Toto Ed Quiz Logo" className="quiz-logo" />
        </div>
        <h1>Toto Ed Quiz</h1>
      </header>
      <Quiz />
    </div>
  );
}

export default App;
