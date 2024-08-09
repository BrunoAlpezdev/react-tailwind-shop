import '@styles/App.css'
import { NavbarComponent, FooterComponent, RegistroPage } from '@/pages'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {
  HomePage,
  AboutPage,
  ProductPage,
  CRUDPage,
  CuentaPage,
  NotFoundPage,
  LoginPage
} from '@/pages'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <div className='bg-brand-light-shades text-brand-dark-shades dark:bg-brand-dark-shades dark:text-brand-light-shades'>
      <AnimatePresence mode='sync'>
        <div className='body-container'>
          <NavbarComponent />
          <Routes>
            {/* Home Page */}
            <Route index element={<HomePage />} />

            {/* Footer Links Section */}
            <Route path='/about' element={<AboutPage />} />
            <Route path='/politicas' element={<AboutPage />} />
            <Route path='/contacto' element={<AboutPage />} />

            <Route
              path='/CRUDPage'
              element={
                <ProtectedRoute>
                  <CRUDPage />
                </ProtectedRoute>
              }
            />

            {/* Auth Section */}
            <Route
              path='/auth/Cuenta'
              element={
                <ProtectedRoute>
                  <CuentaPage />
                </ProtectedRoute>
              }
            />
            <Route path='/auth/Login' element={<LoginPage />} />
            <Route path='/auth/Registro' element={<RegistroPage />} />

            {/* Product Section */}
            <Route path='/P/:itemCategory/:itemId' element={<ProductPage />} />

            {/* 404 */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <FooterComponent />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App
