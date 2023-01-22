import React, { useState, useEffect } from 'react'


export const Clock = (props) => {

    const inicialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Joel",
        apellidos: "Jalixto Chavez"
    }
    const [state, setState] = useState(inicialState);

    useEffect(() => {
        console.log("useEffect: inicio");
        const interval = setInterval(()=>{
            setState({
                ...state,
                fecha: new Date(),
                edad: state.edad +1
            })
            console.log("setInterval:inicio");
        },1000)
            return () => clearInterval(interval)
    },[state])


    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                Nombre y Apellido: {state.nombre} {state.apellidos}
            </h3>
            <h1>
                Edad: {state.edad}
            </h1>
        </div>
    )
}
