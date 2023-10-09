import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the React App!
        </p>
        <p>
          Current Count: {count}
        </p>
        <button onClick={incrementCount}>
          Increment Count
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi, I am Yogesh Kore.  Welcome to my website
        </a>
      </header>
    </div>
  );
}

export default App;

