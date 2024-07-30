import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import '../styles/App.css'

type Props = {
    nombreBoton: string;
    categorias: string[];
}

const DropDownButtonComponent: React.FC<Props> = (props) => {
    return (
        <Dropdown>
                <DropdownTrigger>
                    <Button className="rounded-full">{props.nombreBoton}</Button>
                </DropdownTrigger>

                <DropdownMenu>

                    {props.categorias.map((categoria, index) => (
                        <DropdownItem key={index}>{categoria}</DropdownItem>
                    ))}

                </DropdownMenu>
        </Dropdown>
    );
    };
export default DropDownButtonComponent;