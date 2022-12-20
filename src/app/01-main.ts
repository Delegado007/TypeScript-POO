import axios from "axios"

import { Product } from "./models/products.models";

(async () => {

  async function getProducts(): Promise<Product[]> { // el tipado de esta linea me define que tipo de datos retornara mi funcion afuera
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    // para forzar el tipado de datos se puede usar const data = rta.data as Products[];
    // el forzado de tipado es para los casos en que se usan librerias que no soportan el tipado

    return data;
  }

  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`))

})()
