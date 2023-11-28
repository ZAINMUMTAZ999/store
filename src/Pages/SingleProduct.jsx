import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'

export const loader =async({params})=>{
  const response  = await customFetch(`/products/${params.id}`)

  return {product:response.data.data}
}
const SingleProduct = () => {

const {product}=useLoaderData()
console.log(product)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct