import { DeleteIcon, ReadIcon, UpdateIcon, CRUDButton } from "./index";
import productsList from "@data/productsList";
import { Component } from "react";
import '@styles/CRUD.css';

export default class CRUDTableComponent extends Component {
  render() {
    return (
        <main className="flex justify-center items-center">
        <body className="table bg-brand-dark-shades/30 dark:bg-brand-light-shades/30 p-4 rounded-2xl">
          <section className="text-brand-light-shades text-[2rem] text-pretty"><h1>Section header</h1></section>
          
          <section className="table_body shadow-lg ">
            {/* Inicio de la tabla */}
            <table className="w-[90dvw] h-[90dvh]">
              <thead>
                <tr className="bg-gray-900/40 text-white">
                  <th className="w-[164px]">Acción</th>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Categoría</th>
                  <th>Categoría</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              
              <tbody>
                {/* Por cada producto, estamos generando esta sección */}
                {productsList.map((product) => (
                  <tr>
                  <td>
                    <section className='flex justify-center w-fit border rounded-[100px] z-50'>
                      <CRUDButton key={`${product.idProducto}-read`} Icon={<ReadIcon width={28} height={28} />} bgColor="Read" productId={product.idProducto} />
                      <CRUDButton key={`${product.idProducto}-update`} Icon={<UpdateIcon width={28} height={28} />} bgColor="Update" productId={product.idProducto} />
                      <CRUDButton key={`${product.idProducto}-delete`} Icon={<DeleteIcon width={28} height={28} />} bgColor="Delete" productId={product.idProducto} />
                    </section>
                  </td>
                  <td>{product.idProducto}</td>
                  <td>
                    <img className="h-8 mx-auto align-middle" src={product.imagen} alt="" />
                  </td>
                  <td>{product.nombreProducto}</td>
                  <td>{product.descripcion}</td>
                  <td>{product.categoria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          {/* Fin de la tabla */}
        </body>
      </main>

    )
  }
}
