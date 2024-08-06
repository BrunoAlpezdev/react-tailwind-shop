import { Link } from 'react-router-dom'
import '@styles/App.css'
import { ImageComponent } from '@components/index'

const Footer = () => {
  // Lógica del componente

  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-brand-dark-shades dark:bg-brand-main-700 blur-sm"></div>
      <div className="relative  bg-brand-dark-shades text-brand-light-shades dark:bg-brand-main-700 dark:text-brand-light-shades text-xs flex content-center justify-between px-8 py-2">
        <nav className="self-center">
          <ul className="flex gap-6">
            <li>
              <Link to="/privacy">Políticas de Privacidad</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/CRUDPage">Eliminar</Link>
            </li>
          </ul>
        </nav>
        <span>
          <Link to="/">
            <ImageComponent
              imageUrl="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024"
              size="60"
            />
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
