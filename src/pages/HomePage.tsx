import { CarouselComponent } from '../components/CarouselComponent'
import ProductCardComponent from '../components/ProductCardComponent.tsx'
import productsList from '../types/products'
import FooterComponent from '../components/FooterComponent.tsx'

export default function HomePage() {

    return (
      <div>
      <section className=''>
        <CarouselComponent />
      </section>
      <section className='flex justify-between mt-6 mb-4pt-8 pb-12'>
        {productsList.map((product) => (
          <ProductCardComponent idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
        ))}
      </section>
      <section className='xd'>
      <FooterComponent />
      </section>
      </div>
    )
}