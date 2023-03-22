import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";


const UpdateProduct = (props) => {
    // destructure from props the id
    const {id} = useParams();
    // Set state setters and getters
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // redirection
    const navigate = useNavigate();
    //State to capture and display document title upon render 
    const [headerTitle, setHeaderTitle] = useState("");

    // OneProduct request to auto-populate inputs
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                // maintain constant title heading while editing
                setHeaderTitle(res.data.title);
            })
            .catch((err)=>console.log(err));
    },[id]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`,{
            title, 
            price, 
            description
            })
            .then((res)=>{
              console.log(res);
              console.log(res.data);
              navigate("/"); /**trigger a total rerender of DisplayAll which updates list via useEffect in Display */
            })
            .catch((err)=>{
              console.log(err);
            });
        };


    return(
        <div>
            <header>Edit {headerTitle}</header>

            <form onSubmit={submitHandler}>
                <div className="form-field">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>
                <br />
                <div className="form-field">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>
                <br />
                <div className="form-field">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>
                <br/>
                <input className="submit-input" type="submit" value="Update"/>

            </form>
        </div>
    );

};

export default UpdateProduct;