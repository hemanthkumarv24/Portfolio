import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import { GlobalStyle } from './styles/global'
import { Main } from './components/Main/main';
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      {/* <Navbar/> */}
      <Header></Header>
      <Main></Main>
      
    </div>
  );
}

export default App;
