import '../styles/App.css'
import { useEffect, useState } from "react";
import DropDownButtonComponent from "./DropDownButtonComponent"
import categoriesList from '../data/categoriesList.ts'

export function NavbarComponent() {

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
        <div className="flex justify-between items-center px-4 py-2 bg-brand-dark-shades text-brand-light-shades dark:bg-brand-light-shades dark:text-brand-dark-shades">
                <section>
                    <img src="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024" alt="" className="w-16 h-16 rounded-lg" />
                </section>
                <section>
                    <div className="flex gap-3">
                        {categoriesList.map((category, index) => (
                            <DropDownButtonComponent key={index} nombreBoton={category.nombreBoton} categorias={category.categorias}/>
                        ))}
                        <button onClick={handleToggleTheme} className=''>Lunita O solsito</button>
                    </div>
                </section>
        </div>
    )
}