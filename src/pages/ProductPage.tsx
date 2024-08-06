import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '@data/productsList'

export default function ProductPage() {
  const { idProducto } = useParams()
  const uniqueLayoutId = `productCardImage-${idProducto}`
  const product = products.find((product) => product.idProducto === idProducto)

  return (
    <section className='flex-grow flex items-center justify-center'>
      <h2 className='text-white'>
        Página de producto (hacer lógica) - ID: {idProducto}
      </h2>

      {/* TODO: Esto queda feo aun así que ojito en si darse la flojera de hacerlo o borrarlo */}
      {product && (
        <motion.img
          layoutId={uniqueLayoutId}
          alt='main product card'
          width={400}
          height={400}
          className='object-cover w-96 h-96 rounded-2xl'
          src={product.imagen}
        />
      )}
    </section>
  )
}
