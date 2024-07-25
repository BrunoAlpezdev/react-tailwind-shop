import './styles/App.css'
import './styles/Carousel.css'
import { NavbarComponent } from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent.tsx'
import HomePage from './pages/HomePage.tsx'


function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavbarComponent />
      
      <HomePage />

      <FooterComponent />
    </div>
  </>
  )
}

export default App
