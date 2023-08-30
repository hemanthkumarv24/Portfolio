import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';


function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar/>
    </div>
  );
}

export default App;
