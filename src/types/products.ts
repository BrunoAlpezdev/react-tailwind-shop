type products = {
    idProducto: string,
    imagen: string,
    nombreProducto: string,
    descripcion: string,
    categoria: string
}

const productsList: products[] = [
    {
        idProducto: '1',
        imagen: 'https://falabella.scene7.com/is/image/Falabella/14950203_1?wid=800&hei=800&qlt=70',
        nombreProducto: 'Polera Nike',
        descripcion: 'desc',
        categoria: 'destacado'
    },
    {
        idProducto: '2',
        imagen: 'https://falabella.scene7.com/is/image/Falabella/15345455_1?wid=800&hei=800&qlt=70',
        nombreProducto: 'Polera Puma',
        descripcion: 'desc',
        categoria: 'destacado'
    },
    {
        idProducto: '3',
        imagen: 'https://http2.mlstatic.com/playera-gucci-varios-colores-y-modelos-hombre-envio-gratis-D_NQ_NP_857370-MLM26824870312_022018-F.jpg',
        nombreProducto: 'Polera Gucci',
        descripcion: 'desc',
        categoria: 'destacado'
    },
    {
        idProducto: '4',
        imagen: 'https://www.futuro.cl/wp-content/uploads/2019/07/slayer-polera-1024x1014.jpg',
        nombreProducto: 'Polera Hedionda',
        descripcion: 'desc',
        categoria: 'destacado'
    },
]

export default productsList