import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import '../styles/App.css'
import { subCategories } from "../interfaces/types";

type Props = {
    nombreBoton: string;
    categorias: subCategories[];
}

const DropDownButtonComponent: React.FC<Props> = (props) => {
    return (
        <Dropdown>
                <DropdownTrigger>
                    <Button className="rounded-full">{props.nombreBoton}</Button>
                </DropdownTrigger>

                <DropdownMenu>

                    {props.categorias.map((categoria) => (
                        <DropdownItem key={categoria.idSubCategoria}>{categoria.nombreSubCategoria}</DropdownItem>
                    ))}

                </DropdownMenu>
        </Dropdown>
    );
    };
export default DropDownButtonComponent;