import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Icon from './components/Icons';
import Social from './components/Social';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo width={100}/>
      <Social/>
    </div>
  );
}

export default App;
