/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Docs from './components/Docs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Docs />
    </div>
  );
}

export default App;
