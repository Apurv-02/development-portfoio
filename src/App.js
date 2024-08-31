import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Home from './components/home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
