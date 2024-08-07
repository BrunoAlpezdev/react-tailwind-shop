import '@styles/App.css'
import {
  LightThemeIcon,
  DarkThemeIcon,
  BrandLogo,
  UserIcon
} from '@components/IconsComponent'
import { DropDownButton, DropDownProfile } from '@components/index'
import { Link } from 'react-router-dom'
import categoriesList from '@data/categoriesList'
import useThemeHandler from 'src/hooks/useThemeHandler'
import { useState } from 'react'

const NavbarComponent = () => {
  const { theme, handleToggleTheme } = useThemeHandler()
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const [logged, setLogged] = useState<boolean>(false)

  return (
    <header className='relative'>
      {/* Sombra */}
      <div className='absolute -inset-y-1 inset-x-0 bg-brand-dark-shades dark:bg-brand-main-700 blur-sm'></div>
      {/* Fin Sombra */}

      <section className='relative px-4 py-2 bg-brand-dark-shades text-brand-light-shades dark:bg-brand-main-700'>
        <section className='flex justify-between items-center'>
          {/* item 1 */}
          <Link to='/'>
            <BrandLogo />
          </Link>

          {/* item 2 */}
          <section className='flex gap-3'>
            {categoriesList.map((category) => (
              <DropDownButton
                key={category.idCategoria}
                nombreBoton={category.nombreBoton}
                categorias={category.categorias}
              />
            ))}
          </section>
          <section className='flex gap-3 justify-between items-center'>
            <section>
              {theme === 'light' ? (
                <button
                  onClick={handleToggleTheme}
                  className='transition hover:scale-110'>
                  <LightThemeIcon width={24} height={24} color='#EC9A94' />
                </button>
              ) : (
                <button
                  onClick={handleToggleTheme}
                  className='transition hover:scale-110'>
                  <DarkThemeIcon width={24} height={24} color='#FF3D3D' />
                </button>
              )}
            </section>

            {/* item 3 */}
            <section className=''>
              {openProfile && <DropDownProfile />}
              {logged ? (
                <button
                  className='bg-gradient-to-br from-brand-light-accent to-brand-light-shades dark:from-brand-dark-accent dark:to-brand-dark-shades-200 p-1 rounded-lg w-fit'
                  onClick={() => setOpenProfile((prev) => !prev)}>
                  <UserIcon />
                </button>
              ) : (
                <Link to='/login'>
                  <button className='bg-gradient-to-br from-brand-light-accent to-brand-light-shades dark:from-brand-dark-accent dark:to-brand-dark-shades-200 p-1 rounded-lg w-fit'>
                    Iniciar Sesión
                  </button>
                </Link>
              )}
            </section>
            <button onClick={() => setLogged(!logged)}>
              DEV: Cambiar Login
            </button>
          </section>
        </section>
      </section>
    </header>
  )
}

export default NavbarComponent
