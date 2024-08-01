import {Card} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { CartIcon, CashIcon } from "./Icons";
import { ButtonWithState } from "./Buttons.Component";

type ProductCardComponentProps = {
    idProducto: string,
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
    
    {/* 
        en el App.tsx se encuentra un Componente que se llama Router,
        este es para poder acceder a los path de cada cosa,
        si se fijan, se tuvo que crear uno con el siguiente texto:
        <Route path="/producto/:idProducto" element={<ProductPage />} />
        para que se pueda acceder a la pagina de un producto en especifico
        y se pueda ver la informacion de este, para poder hacerlo se tuvo que
        crear un componente que se llama ProductPage.tsx, este componente
        es el que se encarga de mostrar la informacion de un producto en especifico
        y se le pasa el id del producto para que pueda mostrar la informacion
    */}

    {/* Se arma el path para pasarselo al link ya que si se le pasa en el componente directo peta */}
    const path = '/producto/' + props.idProducto;
    const uniqueLayoutId = `productCardImage-${props.idProducto}`;

  return (
    <motion.div className="max-w-fit">
        <Card isFooterBlurred radius="lg" className="border-none  bg-brand-dark-shades/60 dark:bg-brand-light-shades/60 p-2">
            {/* Se le pasa el path al link para que pueda redirigir a la pagina de producto en especifico */}
            <Link to={path}>
                <div>
                    <motion.img layoutId={uniqueLayoutId} alt="main product card" className="object-cover w-52 h-52 rounded-2xl" src={props.imagen} />
                </div>
            </Link>

            <section className="flex justify-between border border-white/20 bg-brand-dark-shades/60 dark:bg-brand-light-shades/60 backdrop-blur-sm bottom-3 absolute rounded-xl py-1 w-[calc(100%-24px)] shadow-small ml-1 z-10 p-1 gap-1">
                <ButtonWithState Icon={<CashIcon />} onClick={comprarClick} />                
                <ButtonWithState Icon={<CartIcon />} onClick={agregarCarritoClick} />
            </section>
            
        </Card>
    </motion.div>
  );
}

export default ProductCardComponent;
