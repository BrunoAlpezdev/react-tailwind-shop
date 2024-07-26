import './styles/App.css'
import './styles/Carousel.css'
import { NavbarComponent } from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent.tsx'
import HomePage from './pages/HomePage.tsx'
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/politicas" element={<AboutPage />} />
        <Route path="/contacto" element={<AboutPage />} />
        {/* ... */}
      </Routes>
      <section className='xd'>
        <FooterComponent />
      </section>
    </div>
  </>
  )
}

export default App
