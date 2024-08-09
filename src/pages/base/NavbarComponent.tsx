import '@styles/App.css'
import { DropDownProfile } from '@components/index'
import { Link } from 'react-router-dom'
import { Skeleton } from '@nextui-org/skeleton'
import useThemeHandler from '@/hooks/useThemeHandler'
import { useAuth } from '@/hooks/useAuth'
import {
  LightThemeIcon,
  DarkThemeIcon,
  BrandLogo
} from '@components/IconsComponent'
import { getUniqueCategories } from '@/services/firebase'
import { useEffect, useState } from 'react'

const NavbarComponent = () => {
  const { theme, handleToggleTheme } = useThemeHandler()
  const { user } = useAuth()
  const [categories, setCategories] = useState<string[] | undefined>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const uniqueCategories = await getUniqueCategories()
        setCategories(uniqueCategories)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

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
          {loading ? (
            <div className='px-12 w-full h-full'>
              <Skeleton className='rounded-lg w-full h-full'>
                <div className='min-w-8 min-h-8 w-full h-full rounded-lg bg-default-300'></div>
              </Skeleton>
            </div>
          ) : (
            <></>
          )}
          <section className='flex gap-3'>
            {categories?.map((category) => (
              <Link to={`/p/${category}`} className='' key={category}>
                {category}
              </Link>
            ))}
          </section>

          <section className='flex gap-3 justify-between items-center'>
            <section className='flex gap-3 justify-between items-center'>
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
            <section className='flex gap-3 justify-between items-center'>
              {user ? (
                <DropDownProfile />
              ) : (
                <>
                  <Link to='/auth/login'>
                    <button className='text-brand-dark-shades dark:text-brand-light-shades font-semibold bg-gradient-to-br from-brand-light-accent to-brand-light-shades dark:from-brand-dark-accent dark:to-brand-dark-shades-200 px-3 py-1 rounded-lg w-fit'>
                      Login
                    </button>
                  </Link>
                </>
              )}
            </section>
          </section>
        </section>
      </section>
    </header>
  )
}

export default NavbarComponent
