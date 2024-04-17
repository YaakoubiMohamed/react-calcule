import React, { useState } from 'react';

import './App.css';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [pgcd, setPgcd] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    setPgcd(calculePGCD(a, b));
  }

  // Fonction pour calculer le PGCD de deux nombres a et b
  const calculePGCD = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return calculePGCD(b, a % b);
    }
  }


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PGCD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PPCM</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">IMC</a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
      <h1>Bienvenue sur le calculateur de PGCD</h1>
    </div>
  );
}

export default App;
