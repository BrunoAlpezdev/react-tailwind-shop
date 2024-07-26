import {Button, ButtonGroup} from "@nextui-org/button";
import {Card} from "@nextui-org/card";

interface ProductoCardProps {
    imagen: string;
    titulo: string;
    descripcion: string;
    categoria: string; /*la idea de esta categoria es que esten ocultas pero al momento de agregar una o llamar una sea con esto ej: productos destacados como lo haciamos en arti*/
}

const ProductoCard: React.FC<ProductoCardProps> = (props) => {
    const comprarClick = () => {
        // Lógica para el botón "Comprar"
    };

    const agregarCarritoClick = () => {
        // Lógica para el botón "Agregar al carrito"
    };

    return (
        <section className="flex flex-col">
            <img src={props.imagen} alt="Producto" className="card-img w-32" />
            <p className="card-titulo">{props.titulo}</p>
            <p className="card-description">{props.descripcion}</p>
            <section className="flex gap-2">
                <Button onPress={comprarClick}>Comprar</Button>
                <Button onPress={agregarCarritoClick}>Agregar al carrito</Button>
            </section>
        </section>

    );
};

export default ProductoCard;