export type products = {
  idProducto: string
  imagen: string
  nombreProducto: string
  descripcion: string
  categoria: string
}

export type Category = {
  idCategoria: string
  nombreBoton: string
  categorias: subCategories[]
}

export type subCategories = {
  idSubCategoria: string
  nombreSubCategoria: string
}

export type Variant = {
  variantId: string
  variantName: string
  variantStock: number
}

export type user = {
  login: true
}
