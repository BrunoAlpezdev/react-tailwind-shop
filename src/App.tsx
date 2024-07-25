import './styles/App.css'
import './styles/Carousel.css'
import { motion } from "framer-motion"
import { NavbarComponent } from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent.tsx'
import { CarouselComponent } from './components/CarouselComponent'

function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavbarComponent />
      
      <section className='flex-grow flex items-center justify-center'>
        <motion.div animate={{ x: 100 }}>
          <CarouselComponent />
          <CarouselComponent />
        </motion.div>
      </section>

      <FooterComponent />
    </div>
  </>
  )
}

export default App
