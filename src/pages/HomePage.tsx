import { getSubCollection } from '@/services/firebase'
import { ProductCardComponent } from '@components/index'
import productsList from '@data/productsList'

export default function HomePage() {
  async function name() {
    const data = await getSubCollection(
      'products',
      '0375ff6d-aeaf-4e0c-9c20-2aaf2cb28fcd'
    )
    console.log(data)
    return data
  }

  return (
    <main className=''>
      <div className='flex justify-center items-center flex-col bg-brand-light-accent-400/20 dark:bg-brand-dark-accent-400/20'>
        <section className='w-screen text-center bg-brand-light-accent-400/40 dark:bg-brand-dark-accent-400/40 py-6 text-2xl'>
          <h2>¡Destacados!</h2>
        </section>
        <section className='w-[100vw] max-w-[100dvw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  2xl:grid-cols-7 gap-4 p-4 place-items-center'>
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
          <button onClick={name}>ver si llegan cositasss</button>
        </section>
      </div>
    </main>
  )
}
