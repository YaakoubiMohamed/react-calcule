import React, { useState } from 'react';

import './App.css';

function Pgcd() {
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
      <h1>Calcul du PGCD</h1>
      <from>
        <label for="a">a:</label>
        <input type="number" placeholder="Your number a.." id="a" name="a"
          onChange={(e) => setA(e.target.value)}></input> <br />
        <label for="b">b:</label>
        <input type="number" placeholder="Your number b.." id="b" name="b"
          onChange={(e) => setB(e.target.value)}></input><br />
        <input type="submit" onClick={handleSubmit} value="Submit"></input>

        {pgcd ? <p>Le PGCD de {a} et {b} est {pgcd}</p> : null}

      </from>

    </div>
  );
}

export default Pgcd;
