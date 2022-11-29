import React from 'react'
import '../Componentes/Estilos.css'

export const Card = ({ url }) => {
    return (
        <div className="card">
            <img src={url} />
            <div className="text">
                {" "}
                <h1 className='title-dog'>ADOPTA UN PERRO</h1>
                <br />
                <p className='p-form'>TOTALMENTE GRATIS</p>
            </div>
        </div>
    );
};


export default Card;