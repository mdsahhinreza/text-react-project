import React from "react";
import "./Porducts.css";

const Porducts = (props) => {
    
  const { name, img, price ,seller,ratings,ratingsCount} = props.product;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <img src={img} alt={name} className="card-img-top p-1 rounded" />
        <div className="card-body p-0">
          <div className="cart-info p-3 text-start">
            <h5 className="card-title">{name}</h5>
            <p className="card-text fw-bold">Price : ${price}</p>
            <small>Manufacturer :{seller}</small> <br />
            <small>Ratting {ratings}<i className="fa-solid fa-star"></i>/{ratingsCount}</small>
          </div>
          <button onClick={ ()=>{props.handleAddtoCart(props.product)}} className="btn btn-primary w-100 cart-button">
            Add To Cart <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Porducts;
