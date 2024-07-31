import { Category } from "../interfaces/types";

const categoriesList: Category[] = [
    {
        idCategoria: "1",
        nombreBoton: "Hombre",
        categorias: [
            {idSubCategoria: "1", nombreSubCategoria: "Ropa"},
            {idSubCategoria: "2", nombreSubCategoria: "Zapatos"},
            {idSubCategoria: "3", nombreSubCategoria: "Accesorios"}
        ]
    },
    {
        idCategoria: "2",
        nombreBoton: "Mujeres",
        categorias: [
            {idSubCategoria: "4", nombreSubCategoria: "Ropa"},
            {idSubCategoria: "5", nombreSubCategoria: "Zapatos"},
            {idSubCategoria: "6", nombreSubCategoria: "Accesorios"},
            {idSubCategoria: "7", nombreSubCategoria: "Relojes"}
        ]
    },
    {
        idCategoria: "3",
        nombreBoton: "Niños",
        categorias: [
            {idSubCategoria: "8", nombreSubCategoria: "Ropa"},
            {idSubCategoria: "9", nombreSubCategoria: "Zapatos"},
            {idSubCategoria: "10", nombreSubCategoria: "Accesorios"},
            {idSubCategoria: "11", nombreSubCategoria: "Relojes"},
            {idSubCategoria: "12", nombreSubCategoria: "Juguetes"}
        ]
    }
];

export default categoriesList;