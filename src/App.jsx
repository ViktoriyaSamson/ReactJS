import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './Message/Message';


const name = "shell not pass!";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <Message name={name} />
      </header>
    </div>
  );
}

export default App;