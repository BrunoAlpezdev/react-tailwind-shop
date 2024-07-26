interface Category {
    nombreBoton: string;
    categorias: string[];
}

const categoriesList: Category[] = [
    {
        nombreBoton: "Hombre",
        categorias: ["Ropa", "Zapatos", "Accesorios"]
    },
    {
        nombreBoton: "Mujeres",
        categorias: ["Ropa", "Zapatos", "Accesorios", "Relojes"]
    },
    {
        nombreBoton: "Niños",
        categorias: ["Ropa", "Zapatos", "Juguetes", "Accesorios", "Relojes"]
    }
];

export default categoriesList;