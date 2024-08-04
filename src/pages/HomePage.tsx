import { CarouselComponent, ProductCardComponent } from '@components/index'
import productsList from '@data/productsList'

export default function HomePage() {

    return (
      <main>
        
        <section className='flex justify-center gap-2 mt-6 mb-6'>
          {productsList.map((product) => (
            <ProductCardComponent key={product.idProducto} idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
          ))}
        </section>
      </main>
    )
}