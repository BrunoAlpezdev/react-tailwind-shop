import { products } from "@/interfaces/types";
import {DataTable, Columns } from "@components/index";
import productsList from "@data/productsList";
import '@styles/CRUD.css';

async function getData(): Promise<products[]> {
  const data = new Array(productsList.length).fill(productsList).map((product) => ({
    idProducto: product.idProducto,
    imagen: product.imagen,
    nombreProducto: product.nombreProducto,
    descripcion: product.descripcion,
    categoria: product.categoria
  }))

  return data
}

export const CRUDTableComponent = async () => {
  
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable  columns={Columns} data={data} />
      </div>
    </>
  )
} 

