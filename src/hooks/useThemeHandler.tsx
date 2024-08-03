import { useEffect, useState } from "react";

export default function useThemeHandler() {
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

    return { theme, handleToggleTheme }
}