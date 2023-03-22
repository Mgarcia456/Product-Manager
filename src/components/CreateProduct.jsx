import React, { useState,useEffect } from "react";
import axios from "axios";

const CreateProduct = (props) => {
  // Refresh the Product list on submission - destructure Product list getters and setters
  const {productList,setProductList} = props;

  // Lifted state from App.js and destructure from props
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
      axios.post("http://localhost:8000/api/postProducts",{
        title, 
        price, 
        description
        })
        .then((res)=>{
          console.log(res);
          console.log(res.data);
          // clear form on post & refresh the product list<<<<<<<<<
          setProductList([...productList, res.data]) /**spread and add new product */
          setTitle("");
          setPrice("");
          setDescription("");
        })
        .catch((err)=>{
          console.log(err);
        })
      }

      return (
          <div>
              
              <header>
                Product Manager
              </header>

              <form onSubmit={submitHandler}>
                  <div className="form-fields">
                      <label>Title</label>
                      <input
                          onChange={(e) => setTitle(e.target.value)}
                          //We set our value to title here mainly to help us clear out the inputs on submission
                          value={title}
                          name="title"
                          type="text"
                      />
                  </div>

                  <br />

                  <div className="form-fields">
                      <label>Price</label>
                      <input
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}
                          name="price"
                          type="number"
                      />
                  </div>

                  <br />

                  <div className="form-fields">
                      <label>Description</label>
                      <input
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                          name="description"
                          type="text"
                      />
                  </div>

                  <br />
                  <input className="submit-input" type="submit" value="Create" />
              </form>
          </div>
    );
};

export default CreateProduct;