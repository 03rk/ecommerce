import React from "react";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path="/about" element ={<About/>} />
          <Route path="/product" element ={<Products/>} />
          <Route path="/contact" element ={<Contact/>} />
          <Route path="/singleproduct/:id" element ={<SingleProduct/>} />
          <Route path="/cart" element ={<Cart/>} />
          <Route  path="*" element ={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
