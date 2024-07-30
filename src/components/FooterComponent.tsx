import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

interface Props {
    // Propiedades del componente
}

const Footer: React.FC<Props> = (props) => {
    // Lógica del componente

    return (
        <div className='footer-bar'>
            <footer className="w-full bg-gray-800 text-white">
                <div className="max-w-screen-xl mx-auto py-4 px-5 flex justify-between items-center">
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link to="/privacy" className="">Políticas de Privacidad</Link></li>
                            <li><Link to="/contact" className="">Contacto</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/rid'>Eliminar</Link></li>
                        </ul>
                    </nav>
                    <span><Link to='/'>logo</Link></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
