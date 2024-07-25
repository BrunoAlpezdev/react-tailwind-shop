import {
    Button,
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";

export function NavbarComponent() {
    return (
        <Navbar position="static">
            <NavbarContent>
                <NavbarBrand><img className="h-16 rounded-lg" src="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024" alt="" /></NavbarBrand>
                <NavbarMenuToggle />
                <NavbarMenu>
                    <NavbarMenuItem>Home</NavbarMenuItem>
                    <NavbarMenuItem>About</NavbarMenuItem>
                    <NavbarMenuItem>Contact</NavbarMenuItem>
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}