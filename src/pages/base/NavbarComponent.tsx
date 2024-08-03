import '@styles/App.css'
import { LightThemeIcon, DarkThemeIcon, BrandLogo } from '@components/IconsComponent';
import { DropDownButton } from '@components/index';
import { Link } from 'react-router-dom';
import categoriesList from '@data/categoriesList'
import useThemeHandler from 'src/hooks/useThemeHandler';

const NavbarComponent = () => {

    const { theme, handleToggleTheme } = useThemeHandler();

    return (
        <header className="relative">
            {/* Sombra */}
            <div className="absolute -inset-y-1 inset-x-0 bg-brand-dark-shades dark:bg-brand-main-700 blur-sm"></div>
            {/* Fin Sombra */}

            <section className="relative px-4 py-2 bg-brand-dark-shades text-brand-light-shades dark:bg-brand-main-700">
                
                <section className="flex justify-between items-center">
                    {/* item 1 */}
                    <Link to='/'><BrandLogo /></Link>

                    {/* item 2 */}
                    <section className='flex gap-3'>
                        {categoriesList.map((category) => (
                            <DropDownButton key={category.idCategoria} nombreBoton={category.nombreBoton} categorias={category.categorias}/>
                        ))}
                    </section>
                    
                    {/* item 3 */}
                    {theme === 'light' 
                    ?<button onClick={handleToggleTheme} className='transition hover:scale-110'><LightThemeIcon width={24} height={24} color='#EC9A94' /></button> 
                    :<button onClick={handleToggleTheme} className='transition hover:scale-110'><DarkThemeIcon width={24} height={24} color='#FF3D3D' /></button>
                }
                </section>
            </section>
        </header>
    )
}

export default NavbarComponent;