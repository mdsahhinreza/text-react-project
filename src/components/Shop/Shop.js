import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Porducts from "../Porducts/Porducts";
import "./Shop.css";
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddtoCart = (product) => {
        // cartProducts.push(product)
        // console.log(cartProducts);

        const isExist = carts[product];
        if (isExist) {
            console.log('Its Exits');
        }
        const newCarts = [...carts, product];
        setCarts(newCarts);
        addToDb(product.id);
    };

    return (
        <div className="content-body">
            <div className="products container">
                <div className="row mt-5">
                    {products.map((product) => (
                        <Porducts key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Porducts>
                    ))}
                </div>
            </div>
            <div className="cart mt-5 rounded ">                
                        <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;
