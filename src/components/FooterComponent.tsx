import React from 'react';

interface Props {
    // Propiedades del componente
}

const Footer: React.FC<Props> = (props) => {
    // Lógica del componente

    return (
        <footer className="w-full bg-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto py-4 px-5 flex justify-between items-center">
                <span><a href="/">logo</a></span>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/about" className="">Sobre Nosotros</a></li>
                        <li><a href="/privacy" className="">Políticas de Privacidad</a></li>
                        <li><a href="/contact" className="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
