import {
    Button,
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react"
import MenuBar from "../components/MenuBar"
import categoriesList from '../types/categories.ts'
import '../styles/App.css'

export function NavbarComponent() {
    return (
        <div className="navbarhp">
            <Navbar position="sticky">
                <NavbarContent>
                    <NavbarBrand><img className="logonav" src="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024" alt="" /></NavbarBrand>
                    {/* Iteración de las categorías listadas en /types/categories.ts */}
                    <div className="menu-bar-container">
                        {categoriesList.map((category, index) => (
                            <MenuBar key={index} nombreBoton={category.nombreBoton} categorias={category.categorias} />
                        ))}
                    </div>
                    {/* Iteración de las categorías listadas en /types/categories.ts */}
                    <NavbarMenuToggle />
                    <div className="nav-bar-desp" style={{ marginLeft: "auto" }}>
                        <NavbarMenu >
                            <NavbarMenuItem>Home</NavbarMenuItem>
                            <NavbarMenuItem>About</NavbarMenuItem>
                            <NavbarMenuItem>Services</NavbarMenuItem>
                            <NavbarMenuItem>Contact</NavbarMenuItem>
                        </NavbarMenu>
                    </div>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

/* h-16 rounded-lg */