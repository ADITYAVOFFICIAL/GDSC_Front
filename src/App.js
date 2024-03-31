import React from 'react';
import Markdown from './components/Markdown';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Markdown/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
