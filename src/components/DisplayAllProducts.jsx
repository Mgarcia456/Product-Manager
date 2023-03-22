import React, {useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const DisplayAllProducts = (props)=>{

    const navigate = useNavigate();
    const {removeFromDom, product, setProduct} = props;
    const {productList,setProductList} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/`+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }


    useEffect(()=>{
        axios.get("http://localhost:8000/api/allProducts")
            .then((res)=>{
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=>{console.log(err)});
            
    },[]);

    return(

        <div >
            <header>All Products!!</header>
            {
                productList.map((product,index)=>( /**this is a return parentheses */
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <br/>
                        <button onClick={()=>navigate(`/product/edit/${product._id}`)}>Edit</button>
                        <br/>
                        <button onClick={()=> {deleteProduct(product._id)}}>DELETE</button>

                    </div>
                )

                )
            }

        </div>
    )
}

export default DisplayAllProducts;