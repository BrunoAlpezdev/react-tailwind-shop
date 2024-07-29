import { CarouselComponent } from '../components/CarouselComponent'
import ProductCardComponent from '../components/ProductCardComponent.tsx'
import productsList from '../data/productsList.ts'
import FooterComponent from '../components/FooterComponent.tsx'

export default function HomePage() {

    return (
      <div>
      <section className=''>
        <CarouselComponent />
      </section>
      <section className='flex justify-between mt-6 mb-4pt-8 pb-12'>
        {productsList.map((product) => (
          <ProductCardComponent key={product.idProducto} idProducto={product.idProducto} imagen={product.imagen} nombreProducto={product.nombreProducto} descripcion={product.descripcion} categoria={product.categoria} />
        ))}
      </section>
      <section className='xd'>
      <FooterComponent />
      </section>
      </div>
      <div>
        <h1>Home Page</h1>
        <p>Esta es la página de inicio</p>
      </div>
    )
}