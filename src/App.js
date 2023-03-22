// dont' forget to npm i axios react-router-dom
import "./App.css";
import axios from 'axios'
// A view component enables multiple components to display together
import Main from "./views/Main";
import NavBar from "./components/NavBar";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>}/> 
                    <Route path="/product/:id" element={<OneProduct/>}/>
                    <Route path="/product/edit/:id" element={<UpdateProduct/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;