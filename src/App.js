import React from 'react';

import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pgcd from './Pgcd';
import Home from './Home';
import Ppcm from './Ppcm';
import Imc from './Imc';


function App() {



  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pgcd" element={<Pgcd/>} />
            <Route path="/ppcm" element={<Ppcm/>} />
            <Route path="/imc" element={<Imc/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
