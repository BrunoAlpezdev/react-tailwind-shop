import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

interface Props {
    // Propiedades del componente
}

const Footer: React.FC<Props> = (props) => {
    // Lógica del componente

    return (
        <footer className="bg-blue-gray-700 text-white flex content-center justify-between px-8 py-4">
            <nav>
                <ul className="flex gap-6">
                    <li><Link to="/privacy" className="">Políticas de Privacidad</Link></li>
                    <li><Link to="/contact" className="">Contacto</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/CRUDPage'>Eliminar</Link></li>
                </ul>
            </nav>
            <span><Link to='/'>logo</Link></span>
        </footer>
    );
};

export default Footer;
