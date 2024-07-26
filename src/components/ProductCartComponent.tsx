import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";
type ProductCardComponentProps = {
    imagen: string,
    nombreProducto: string,
    descripcion: string,
    categoria: string /*la idea de esta categoria es que esten ocultas pero al momento de agregar una o llamar una sea con esto ej: productos destacados como lo haciamos en arti*/
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = (props) => {

    const comprarClick = () => {
        console.log("Comprar");
    };

    const agregarCarritoClick = () => {
        console.log("Agregar al carrito");
    };

  return (
    <div className="max-w-fit">
        <Card isFooterBlurred radius="lg" className="border-none">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <p className="text-2xl uppercase font-bold">{props.nombreProducto}</p>
            </CardHeader>

            <a href="/about">
                <Image alt="main product card" width={400} height={400} className="object-cover" src={props.imagen} />
            </a>

            <CardFooter className="flex justify-between border border-white/20 bg-white/10 bottom-1 absolute rounded-xl py-1 w-[calc(100%-8px)] shadow-small ml-1 z-10">
                <Button onPress={comprarClick} className="flex-1 text-sm text-white bg-black/20 mx-1" variant="flat" color="default" radius="lg" size="md">
                    Comprar
                </Button>
                <Button onPress={agregarCarritoClick} className="flex-1 text-sm text-white bg-black/20 mx-1" variant="flat" color="default" radius="lg" size="md">
                    Agregar al carrito
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}

export default ProductCardComponent;
