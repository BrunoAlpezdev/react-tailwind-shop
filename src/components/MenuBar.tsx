import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import '../styles/App.css'
interface Props {
    nombreBoton: string;
    categorias: string[];
}

const MenuBar: React.FC<Props> = (props) => {
    return (
        <div className="menu-bar-item">
            <Dropdown>
                <DropdownTrigger>
                    <Button>{props.nombreBoton}</Button>
                </DropdownTrigger>
                <DropdownMenu>
                    {props.categorias.map((categoria, index) => (
                        <DropdownItem key={index}>{categoria}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
    };
export default MenuBar;