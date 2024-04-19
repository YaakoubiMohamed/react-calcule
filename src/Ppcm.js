import React, { useState } from 'react'

export default function Ppcm() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [ppcm, setPpcm] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        setPpcm(calculePPCM(a, b));
        
    }

    // Fonction pour calculer le PPCM de deux nombres a et b
    const calculePPCM = (a, b) => {
        console.log(a,b);
        if (a === 0 || b === 0) {
            return 0;
        } 
        let ab = a*b;
        while(true){
            if(ab % a === 0 && ab % b === 0){
                return ab;
            }
            ab++;        
        }
    }
    


    return (
        <div className="App">
            <h1>Calcul du PPCM</h1>
            <from>
                <label for="a">a:</label>
                <input type="number" placeholder="Your number a.." id="a" name="a"
                    onChange={(e) => setA(e.target.value)}></input> <br />
                <label for="b">b:</label>
                <input type="number" placeholder="Your number b.." id="b" name="b"
                    onChange={(e) => setB(e.target.value)}></input><br />
                <input type="submit" onClick={handleSubmit} value="Submit"></input>

                {ppcm ? <p>Le PPCM de {a} et {b} est {ppcm}</p> : null}

            </from>

        </div>
    );
}
