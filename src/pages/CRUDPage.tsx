import  { CreateIcon, DeleteIcon, ReadIcon, UpdateIcon, SearchIcon }  from "../components/Icons.Component"
import { CRUDButton } from '../components/Buttons.Component'
import productsList from "../data/productsList"

export default function CRUDPage() {

  return (
    <div className="w-full p-4 overflow-x-auto">
      <section className="flex justify-center items-center mb-4 gap-5">
        <button className="block p-1 rounded transition ease-in-out delay-75 bg-brand-light-accent text-brand-light-shades hover:bg-brand-light-accent-600 dark:bg-brand-dark-accent dark:hover:bg-brand-dark-accent-600"><SearchIcon width={28} height={28}/></button>
        <input className="border-2 border-brand-light-accent dark:border-brand-dark-accent px-2 py-1 rounded outline-none" type="text" />
        <button className='transition hover:scale-150 hover:border-teal-500'><CreateIcon width={30} height={30}/></button>
      </section>

      {/* Inicio de la tabla */}
      <div className="w-full overflow-x-auto border-1 rounded-sm ">
        <table className="w-full shadow-lg dark:bg-brand-dark-shades">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 w-[164px] hover:underline">Acción</th>
              <th className="p-2 hover:underline">ID</th>
              <th className="p-2 hover:underline">Imagen</th>
              <th className="p-2 hover:underline">Nombre</th>
              <th className="p-2 hover:underline">Descripción</th>
              <th className="p-2 hover:underline">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {/* Por cada producto, estamos generando esta sección */}
            {productsList.map((product) => (
              <tr className="border-b">
              <td className="w-fit p-2">
                <section className='flex justify-center w-fit border rounded-[100px] z-50'>
                  <CRUDButton key={`${product.idProducto}-read`} Icon={<ReadIcon width={28} height={28} />} bgColor="Read" productId={product.idProducto} />
                  <CRUDButton key={`${product.idProducto}-update`} Icon={<UpdateIcon width={28} height={28} />} bgColor="Update" productId={product.idProducto} />
                  <CRUDButton key={`${product.idProducto}-delete`} Icon={<DeleteIcon width={28} height={28} />} bgColor="Delete" productId={product.idProducto} />
                </section>
              </td>
              <td className="p-2 text-center">{product.idProducto}</td>
              <td className="p-2 text-center">
                <img className="h-8 mx-auto" src={product.imagen} alt="" />
              </td>
              <td className="p-2 text-center">{product.nombreProducto}</td>
              <td className="p-2 text-center">{product.descripcion}</td>
              <td className="p-2 text-center">{product.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Fin de la tabla */}
    </div>
  )
}