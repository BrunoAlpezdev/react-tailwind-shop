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
                            <li><a href="/privacy" className="">Políticas de Privacidad</a></li>
                            <li><a href="/contact" className="">Contacto</a></li>
                            <Link to='/about'></Link>
                        </ul>
                    </nav>
                    <span><a href="/">logo</a></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
