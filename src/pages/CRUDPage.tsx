import { Columns, DataTable } from "@/components"
import productsList from "@/data/productsList"
import { products } from "@/interfaces/types"
import {CRUDTableComponent}  from "@components/CRUD/CRUDTableComponent"
import { CreateIcon, SearchIcon }  from "@components/IconsComponent"
import '@styles/CRUD.css'
import { useEffect, useState } from "react"

function CRUDPage() {

  const [data, setData] = useState<products[]>([])

  function getData() {
    const originalData = productsList.map((product) => ({
      idProducto: product.idProducto,
      imagen: product.imagen,
      nombreProducto: product.nombreProducto,
      descripcion: product.descripcion,
      categoria: product.categoria
    }))
    return originalData
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="main_body p-4">
      <section className="flex mb-4 gap-5">
        <button className="block p-1 rounded transition ease-in-out bg-brand-light-accent text-brand-light-shades hover:bg-brand-light-accent-600 dark:bg-brand-dark-accent dark:hover:bg-brand-dark-accent-600"><SearchIcon width={28} height={28}/></button>
        <input className="border-2 border-brand-light-accent dark:border-brand-dark-accent px-2 py-1 rounded outline-none" type="text" />
        <button className='transition hover:scale-150 hover:border-teal-500'><CreateIcon width={30} height={30}/></button>
      </section>
      
      <div className="container mx-auto py-10">
        <DataTable  columns={Columns} data={data} />
      </div>

    </div>
  )
}

export default CRUDPage