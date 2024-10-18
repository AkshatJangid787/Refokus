import React from 'react'
import Product from './Product'

function Products() {
  var products = [
    {title: "arquitel", description: "Arqu Executive and its employees continue to receive orders for customers and get orders for customers", live: true, case: false},
    {title: "TTR", description: "TTR Executive and its employees continue to receive orders for customers and get orders for customers", live: true, case: false},
    {title: "YIR 2023", description: "YIR 2023 Executive and its employees continue to receive orders for customers and get orders for customers", live: true, case: true},
    {title: "Yahoo", description: "Yahoo Executive and its employees continue to receive orders for customers and get orders for customers", live: true, case: false},
    {title: "Bing", description: "Bing Executive and its employees continue to receive orders for customers and get orders for customers", live: true, case: false},
  ]

  return (
    <div>
        {products.map((val, index)=> <Product val={val}/>)}
    </div>
  )
}

export default Products