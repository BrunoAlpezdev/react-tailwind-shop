import { CarouselComponent } from '../components/CarouselComponent'
import ProductCardComponent from '../components/ProductCardComponent.tsx'
import productsList from '../data/productsList.ts'

export default function HomePage() {

    return (
      <main>
        
        <CarouselComponent />

        <section className='flex justify-between mt-6 mb-4pt-8 pb-12'>
          {productsList.map((product) => (
            <ProductCardComponent key={product.idProducto} idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
          ))}
        </section>

      </main>
    )
}