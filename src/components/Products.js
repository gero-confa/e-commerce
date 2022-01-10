import '../scss/app.scss';
import React, {useEffect, useState} from "react";
import Card from "./Card";


export default function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(json=>
      json.forEach(element => {
        let item = {
          id: element.id,
          name: element.title,
          price: element.price,
          description: element.description,
          image: element.image,
        }
        setProducts((products) => [...products, item])
      })
    )
  },[])

  return(
    <>
      {products.length === 0 ? (
        <h2>Cargando</h2>
        ) : (
        products.map((el) => (
          <Card key={el.id} image={el.image} name={el.name} price={el.price} ></Card>
        ))
      )}
    </>
  )
}