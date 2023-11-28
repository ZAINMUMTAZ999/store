import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { dollarAmount } from '../utils'

const ProductsGrid = () => {
    const { data } = useLoaderData() // from landing 
   
    return (
        <div className='carousel gap-4'>
            {data.map((product) => {

                const { image, title, price, company } = product.attributes
                const dollarAmountt = dollarAmount(price)
                return (
                    <Link key={product.id} to={`products/:${product.id}`} className='card w-full  lg:grid-cols-2-2 sm:grid-cols-1  shadow-xl '>
                        <img src={image} alt={company} className='h-auto' />
                        <b>{title}</b>
               <p>{dollarAmountt}</p>


                    </Link>
                )
            })}

        </div>
    )
}

export default ProductsGrid