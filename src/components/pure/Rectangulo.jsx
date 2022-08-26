import React, { useState } from 'react';
import '../../styles/Rectangulo.css'


const RectanguloRGB = () => {

    const [color, setColor] = useState('rgba(0,0,0)');
    const [intervalId, setIntervalId] = useState(null);

    const cambiarColor = () => {
        const colorAleatorio = setInterval(() => {
            setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
        }, 500);
        setIntervalId(colorAleatorio);
    };

    const detenerCambioColor = () => {
        clearInterval(intervalId);
    };

    const detenerCambiarColorDBC = () => {
        clearInterval(intervalId);
    };

    return(
        <div>
            <h2 style={{backgroundColor:'white', color:color}}>Hola, soy color {color}</h2>
            <div className='cuadrado' onMouseOver={ cambiarColor } onMouseOut={ detenerCambioColor } onDoubleClick={ detenerCambiarColorDBC } style={{ backgroundColor:color }}>
            </div>
        </div>
    );
};

export default RectanguloRGB;

