import React from 'react';
import './Carts.css';
const Carts = (props) => {
    const {cart} = props;
    
    let total = 0;
    let shipping = 0;
    for(const items of cart){
        total = total+items.price;
        shipping = shipping+items.shipping;
    }
    let tax = parseFloat((total*0.1).toFixed(2));
    let totalPrice = (total+shipping+tax).toFixed(2);

    return (
        <div className="order-summery-container">
        <h3>Order Summery</h3>
        <p>Selected Itmes : {cart.length}</p>
        <p>Total Price : ${total} </p>
        <p>Total Shipping : ${shipping} </p>
        <p>Tax : ${tax} </p>
        <h3>Grand Total : ${totalPrice} </h3>
    </div>
    );
};

export default Carts;