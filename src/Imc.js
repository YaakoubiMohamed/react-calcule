import React, { useState } from 'react'

export default function Imc() {
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [resultat, setResultat] = useState("");
    const [message, setMessage] = useState(null)

    // Calculer l'indice de masse corporelle (IMC)
    const calculeIMC = () => {
        const t = parseFloat(taille);
        const p = parseFloat(poids)
        const imc = p / (t * t);
        setResultat(imc);        
        InterceptIMC();
    }
    const InterceptIMC = () => {
        console.log(resultat)
        if (resultat < 18.5) {
            setMessage(". Vous êtes en sous-poids.");
            console.log(". Vous êtes en sous-poids.");
        } else if (resultat >= 18.5 && resultat < 25) {
            setMessage(". Vous êtes en poids normal.");
            console.log(". Vous êtes en poids normal.");
        } else if (resultat >= 25 && resultat < 30) {
            setMessage(". Vous êtes en surpoids.");
            console.log(". Vous êtes en surpoids.");
        } else if(resultat >= 30){
            setMessage(". Vous êtes en obésité.");
            console.log(". Vous êtes en obésité.");
        }
    }
    
    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="poids" className="form-label">Poids</label>
                    <input type="number" className="form-control" id="poids" placeholder='Poids en Kg' aria-describedby="emailHelp"
                        onChange={(e) => setPoids(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="taille" className="form-label">Taille</label>
                    <input type="number" className="form-control" id="taille" placeholder='Taille en m'
                        onChange={(e) => setTaille(e.target.value)} />
                </div>
                <button onClick={calculeIMC} className="btn btn-primary">Calculer</button>
            </form>
            {resultat !== null && (<div>
                <h2>Votre IMC est de {resultat}</h2>
                <p>Interception: {message} </p>
            </div>)}
        </>
    )
}
