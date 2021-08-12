import React from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";

function Payment(){

    const[{basket,user},dispatch]=useStateValue();
    return(
        <div className="payment">
            <div className="payment_container">

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                        <p>No 36 PV Iyer Street</p>
                        <p>Broadway</p>
                        <p>Chennai</p>
                    </div>
                    <div className="payment_address">
                        <p>{!user ? "" : user.email}</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map((item)=> {
                            return(
                                <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                            );
                            
                        })}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment_details">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;