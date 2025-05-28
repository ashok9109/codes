import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetails = () => {
    let { id } = useParams();

    const [details, setdetails] = useState(null);
    console.log(details)




    const fetchalldetails = async () => {
        try {
            const respones = await axios.get("https://fakestoreapi.com/products")

            if (respones && respones.data) {
                setdetails(respones.data)
            }
        } catch (error) {
            console.log("error hai -", error)
        }
    }

    useEffect(() => {
        fetchalldetails();
    })

    return (
        <>
            <div >
                <h1>Product details {id}</h1>
                <h2>{details?.title}</h2>
                <img  src={details?.image} alt=" image" />
                <p>Category = {details?.category}</p>
            </div>

        </>
    )
}

export default ProductDetails;
