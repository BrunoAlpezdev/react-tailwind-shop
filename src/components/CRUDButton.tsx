import React from 'react';
import '../styles/CRUD.css'

interface CRUDButtonProps {
    bgColor?: string;
    Icon: React.JSX.Element;
    productId?: string;
}

const CRUDButton: React.FC<CRUDButtonProps> = (props) => {
    
    const ReadClick = () => {
        console.log("Read" + props.productId)
    }

    const UpdateClick = () => {
        console.log("Update"+ props.productId)
    }

    const DeleteClick = () => {
        console.log('Delete'+ props.productId)
    }

    return (
        <div>
            {props.bgColor === "Read" && <button onClick={ReadClick} className={"button-hover-effect before:bg-icons-Read p-2 rounded-l-[96px] transition relative"}><span>{props.Icon}</span></button>}
            {props.bgColor === "Update" && <button onClick={UpdateClick} className={"button-hover-effect before:bg-icons-Update p-2 transition relative"}><span>{props.Icon}</span></button>}
            {props.bgColor === "Delete" && <button onClick={DeleteClick} className={"button-hover-effect before:bg-icons-Delete rounded-r-[96px] p-2 transition relative"}><span>{props.Icon}</span></button>}
        </div>
    );
};

export default CRUDButton;