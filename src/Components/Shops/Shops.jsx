import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Products from './../Products/Products';
import './Shops.css';
const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    function AddtoCart(product){
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        

        <div className="shops-container">
            <div className="product-container">
            {
                products.map(product=><Products
                key={product.id}
                product={product}
                addtohandleClick = {AddtoCart}
                ></Products>)
            }
            </div>
            <Carts cart={cart}></Carts>
        </div>
    );
};

export default Shops;