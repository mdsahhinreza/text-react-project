import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const carts = props.cart;

    // console.log(carts);
    let total = 0;
    let totalShipping = 0;
    for(const product of carts){
        total += product.price;
        totalShipping += product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total+tax+totalShipping;
    return (
            <div className="cart-content py-3 sticky-top">
                    <h3>Order Summary</h3> <hr />
                    <div className="text-start px-3">
                        <h5 className="">Selected Items: {carts.length}</h5>
                        <h5 className="">Total Price:  ${total}</h5>
                        <h5 className="">Total Shipping Charge: ${totalShipping}</h5>
                        <h5 className="">Tax: ${tax}</h5>
                        <h3 className="">Grand Total: ${grandTotal}</h3> <br /> <br />
                        <h6>Item Name:</h6> <hr />


                        {/* {
                            carts.map(product => <p> {product.name}</p>)
                        } */}
                    </div>
                </div>
    );
};

export default Cart;