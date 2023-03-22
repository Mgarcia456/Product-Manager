import React, {useState,useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";


const OneProduct = (props)=>{
    const navigate = useNavigate();
    const {id} = useParams(); /**destructure id parameter */
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err)=>console.log(err))
    },[id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res)=> {
                navigate('/')
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            <header>{oneProduct.title}</header>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteHandler} className="'btn btn-danger">Delete Product</button>
        </div>
    )
}

export default OneProduct;