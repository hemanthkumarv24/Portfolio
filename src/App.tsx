import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Practice';

function MyButton(){
  return(
    <div>
    <button>CLICK ME</button>
    console.log("Button Function loaded")
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyButton/>
      <Button/>
    </div>
  );
}

export default App;
