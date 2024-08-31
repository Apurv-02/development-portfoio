import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
