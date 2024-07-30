import  { CreateIcon, DeleteIcon, ReadIcon, UpdateIcon }  from "../components/Icons"
import CRUDButton from '../components/CRUDButton'
import productsList from "../data/productsList"

export default function CRUDPage() {

  return (
    <div className="w-full bg-red-600 p-4 overflow-x-auto">
      <section className="flex justify-center items-center mb-4 gap-5">
        <button className="block bg-blue-gray-400 px-4 py-2 rounded text-white hover:bg-white hover:text-deep-orange-900 transition ease-in-out delay-75">Lupita</button>
        <input className="border-2 border-blue-100 px-2 py-1 rounded outline-none" type="text" />
        <button className='transition hover:scale-150 hover:border-teal-500'><CreateIcon width={30} height={30}/></button>
      </section>

      {/* Inicio de la tabla */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg">
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