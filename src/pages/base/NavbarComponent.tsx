import '@styles/App.css'
import { useEffect, useState } from "react";
import { LightThemeIcon, DarkThemeIcon } from '@components/IconsComponent';
import { DropDownButton, ImageComponent } from '@components/index';
import { Link } from 'react-router-dom';
import categoriesList from '@data/categoriesList'

const NavbarComponent = () => {

    const [theme, setTheme] = useState( () => {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light'
        }
        return 'dark'
    });
    
    useEffect( () => {

        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }

    }, [theme] )

    const handleToggleTheme = () => {
        setTheme(newTheme => newTheme === 'light' ? 'dark' : 'light')
    };

    return (
        <header className="relative">
            <div className="absolute -inset-y-1 inset-x-0 bg-brand-dark-shades dark:bg-brand-main-700 blur-sm"></div>
            <div className="relative flex justify-between items-center px-4 py-2 bg-brand-dark-shades text-brand-light-shades dark:bg-brand-main-700">
                <section>
                    <Link to='/'><ImageComponent imageUrl='https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024' size='60'/></Link>
                </section>
                <section>
                    <div className="flex gap-3">
                        {categoriesList.map((category) => (
                            <DropDownButton key={category.idCategoria} nombreBoton={category.nombreBoton} categorias={category.categorias}/>
                        ))}
                        {theme === 'light' 
                        ?<button onClick={handleToggleTheme} className='transition hover:scale-110'><LightThemeIcon width={24} height={24} color='#EC9A94' /></button> 
                        :<button onClick={handleToggleTheme} className='transition hover:scale-110'><DarkThemeIcon width={24} height={24} color='#FF3D3D' /></button>
                    }
                    </div>
                </section>
            </div>
        </header>
    )
}

export default NavbarComponent;