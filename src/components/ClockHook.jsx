import React, { useState, useEffect } from 'react';

const ClockHook = () => {

    const [fecha, setFecha] = useState(new Date());
    const [usuario, setUsuario] = useState(
        {
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        }
    );

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );

        return () => {
            clearInterval (timerID);
        }
    }, []);
    
    const tick = () => {
        setFecha(new Date());
        setUsuario( prevUsuario => {
            return {
                ...prevUsuario,
                edad: prevUsuario.edad + 1
            }
        });
    }
        
    return (
        <div>
            <h2>
                Hora Actual:
                { fecha.toLocaleTimeString() }
            </h2>
            <h3>{usuario.nombre} {usuario.apellidos}</h3>
            <h1>Edad: {usuario.edad}</h1>
        </div>
    );
}

export default ClockHook;
