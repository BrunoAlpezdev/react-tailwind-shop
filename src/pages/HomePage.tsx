import { CarouselComponent } from '../components/CarouselComponent'
import ProductCardComponent from '../components/ProductCardComponent.tsx'
import productsList from '../data/productsList.ts'

export default function HomePage() {

    return (
      <main>
        
        <section className='flex justify-center gap-2 mt-6 mb-6'>
          {productsList.map((product) => (
            <ProductCardComponent key={product.idProducto} idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
          ))}
        </section>

        <CarouselComponent />

      </main>
    )
}