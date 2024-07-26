import './styles/App.css'
import './styles/Carousel.css'
import { NavbarComponent } from './components/NavbarComponent'
import { Routes, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from './pages/NotFoundPage.tsx';


function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavbarComponent />
      
      <section className='pt-8 pb-12'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/politicas" element={<AboutPage />} />
        <Route path="/contacto" element={<AboutPage />} />
        <Route path="/producto/:idProducto" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* ... */}
      </Routes>
      </section>
    </div>
    <section className='xd'>
      <FooterComponent />
    </section>
  </>
  )
}

export default App
