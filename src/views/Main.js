import React, {useState,useEffect} from "react";
import axios from "axios";
import CreateProduct from "../components/CreateProduct";
import DisplayAllProducts from "../components/DisplayAllProducts";


const Main = (props)=>{

    // Lift state
    const [productList,setProductList] = useState([]);
    // Remove from state when deleted
    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId));
    }

    return(
        <div>
            <CreateProduct productList={productList} setProductList={setProductList}/>
            <DisplayAllProducts productList={productList} setProductList={setProductList} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;