import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'
import ImageComponent from './ImageComponent';

interface Props {
    // Propiedades del componente
}

const Footer: React.FC<Props> = (props) => {
    // Lógica del componente

    return (
        <footer className="bg-blue-gray-700 text-white text-xs flex content-center justify-between px-8 py-4">
            <nav className='self-center'>
                <ul className="flex gap-6">
                    <li><Link to="/privacy" >Políticas de Privacidad</Link></li>
                    <li><Link to="/contact" >Contacto</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/CRUDPage'>Eliminar</Link></li>
                </ul>
            </nav>
            <span><Link to='/'><ImageComponent imageUrl='https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024' size='60'/></Link></span>
        </footer>
    );
};

export default Footer;
