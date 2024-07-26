import { CarouselComponent } from '../components/CarouselComponent'
import ProductCardComponent from '../components/ProductCartComponent'
import productsList from '../types/products'

export default function HomePage() {

    return (
      <div>
      <section className=''>
        <CarouselComponent />
      </section>
      <section className='flex justify-between mt-6 mb-4'>
        {productsList.map((product) => (
          <ProductCardComponent idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
        ))}
      </section>
      </div>
    )
}