import React, { useEffect, useState } from 'react'
import './Product.css'

const Product = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(responce => responce.json())
            .then(json => setData(json))
    } , [])
    
    return (
        <section id='raiyan_product'>
        <div className="container">
            <div className="product_row flex gap-11 flex-wrap">
                {
                    data.map((data)=>{
                        return(
                            <div key={data.id} className="single_product_card">
                                <div className="product_image">
                                    <img className='w-full' src={data.images[0]} alt="" />
                                </div>
                                <div className="details">
                                    <h2>${data.price}</h2>
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Product