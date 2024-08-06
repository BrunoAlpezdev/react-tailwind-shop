import { ProductCardComponent } from '@components/index'
import productsList from '@data/productsList'

export default function HomePage() {
  return (
    <main className="flex justify-center items-center">
      <section className="w-[100vw] max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 place-items-center">
        {productsList
          .filter((product) => product.categoria === 'destacado')
          .map((product) => (
            <ProductCardComponent
              key={product.idProducto}
              idProducto={product.idProducto}
              imagen={product.imagen}
              nombreProducto={product.nombreProducto}
              descripcion={product.descripcion}
              categoria={product.categoria}
            />
          ))}
      </section>
    </main>
  )
}
