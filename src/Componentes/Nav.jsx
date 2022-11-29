import React from 'react'
import { Link } from "react-router-dom"
import '../Componentes/Estilos.css';
export const Nav = () => {
    return (
        <div className="nav">
            <Link className='links' to="./Home">Home</Link>
            <Link className='links' to="./Dog">Dog</Link>
            <Link className='links' to="./Contact">Contact</Link>
        </div>
    );
}
export default Nav;