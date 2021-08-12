import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}){
    const[{basket}, dispatch]=useStateValue();

    const addToBasket=()=>{
        console.log(basket)
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p classame="product_price">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <p>Rating :{rating}</p>
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;


 

  

 