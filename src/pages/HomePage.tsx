import { CarouselComponent } from '../components/CarouselComponent'
import ProductoCard from '../components/ProductoCard'

export default function HomePage() {

    return (
      <div>
      <h1>hola</h1>
      <section className='flex-grow flex items-center justify-center'>
        <CarouselComponent />
      </section>
      <section className='bg-white  mb-16'>
        <ProductoCard imagen='https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024' titulo='xd' descripcion='xd' categoria='xd' />
      </section>
      </div>
    )
}