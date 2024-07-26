import { useParams } from 'react-router-dom';

export default function ProductPage() {
    const { idProducto } = useParams();

    return (
        <section className='flex-grow flex items-center justify-center'>
            <h2 className='text-white'>Página de producto (hacer lógica) - ID: {idProducto}</h2>
        </section>
    );
}