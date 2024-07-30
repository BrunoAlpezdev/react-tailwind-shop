import './styles/App.css'
import './styles/Carousel.css'
import { NavbarComponent } from './components/NavbarComponent'
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FooterComponent from './components/FooterComponent.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import CRUDPage from './pages/CRUDPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';


function App() {
  return (
    <div className='body-container'>

      <NavbarComponent />
      
      <AnimatePresence mode='wait'>
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
      </AnimatePresence>


      <FooterComponent />

    </div>
  )
}

export default App
