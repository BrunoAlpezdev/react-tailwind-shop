import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
  } from "@nextui-org/react"
import DropDownButtonComponent from "./DropDownButtonComponent.tsx"
import categoriesList from '../types/categories.ts'
import '../styles/App.css'

export function NavbarComponent() {
    return (
        <div className="">
            <Navbar position="sticky" isBlurred={false} className="h-28">
                <NavbarContent>

                    <NavbarBrand>
                        <img className="h-24" src="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024" alt="" />
                    </NavbarBrand>

                    {/* Iteración de las categorías listadas en /types/categories.ts */}
                    <div className="flex menu-bar-container gap-12">
                        {categoriesList.map((category, index) => (
                            <DropDownButtonComponent key={index} nombreBoton={category.nombreBoton} categorias={category.categorias} />
                        ))}
                    </div>

                </NavbarContent>
            </Navbar>
        </div>
    )
}

/* h-16 rounded-lg */
