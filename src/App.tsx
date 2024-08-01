import '@styles/App.css'
import '@styles/Carousel.css'
import { NavbarComponent, FooterComponent } from '@base/index';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage, AboutPage, ProductPage, CRUDPage, NotFoundPage } from './pages'

function App() {

  return (
    <div className='body-container bg-brand-light-shades text-brand-dark-shades dark:bg-brand-dark-shades dark:text-brand-light-shades'>
      <AnimatePresence mode='sync'>
        <div>
          <NavbarComponent />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/politicas" element={<AboutPage />} />
            <Route path="/contacto" element={<AboutPage />} />
            <Route path="/CRUDPage" element={<CRUDPage />} />
            <Route path="/producto/:idProducto" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* ... */}
          </Routes>
          <FooterComponent />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App
