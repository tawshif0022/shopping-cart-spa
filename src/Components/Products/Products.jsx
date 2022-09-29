import React from 'react';
import './Products.css';
const Products = (props) => {
    const {name, img, seller, ratings,price} = props.product;
    return (
        <div className="product">
            <img src={img} alt="My Products"></img>

        <div className="product-info">
        <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Ratings : {ratings} Stars</small></p>
        </div>
        <button className="add-to-cart-btn" onClick={()=>props.addtohandleClick(props.product)}>
            <p>Add To Cart</p>
        </button>
        </div>
    );
};

export default Products;
