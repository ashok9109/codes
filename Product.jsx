import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Product = () => {
    const navigate  = useNavigate();
    const [product, setproduct] = useState(null)

    const fetchallproduct = async () => {
        try {
            const respones = await axios.get("https://fakestoreapi.com/products")
            if (respones && respones.data) {
                setproduct(respones.data)
            }
        } catch (error) {
            console.log("error hai -", error)
        }
    }

    useEffect(() => {
        fetchallproduct();
    }, [])

    return (
        <>
            {product?.map((product, ind) => (
                <div id={ind} 
                className='p-2 text-red-400 bg-gray-300'>
                    <h1 
                    onClick={()=>navigate(`/product/details/${product.id}`)}
                    className=''
                     >{product.title}</h1>
                </div>
            ))}
        </>
    );
};


export default Product
