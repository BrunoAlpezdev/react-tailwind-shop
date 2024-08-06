import productsList from "@/data/productsList";
import { products } from "@/interfaces/types";
import { useEffect, useState } from "react";

export default function useFetchProductData() {

    const [data, setData] = useState<products[]>([])

    function getData() {
      const originalData = productsList.map((product) => ({
        idProducto: product.idProducto,
        imagen: product.imagen,
        nombreProducto: product.nombreProducto,
        descripcion: product.descripcion,
        categoria: product.categoria
      }))
      return originalData
    }
  
    useEffect(() => {
      async function fetchData() {
        const data = await getData();
        setData(data);
      }
      fetchData();
    }, []);

    return {data}
}