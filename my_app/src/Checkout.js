import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"
import { useRadioGroup } from "@material-ui/core";

function Checkout(){
    const[{basket,user}, dispatch]=useStateValue();

    return(
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    {user? <h3>{user.email}</h3> : null}
                    <h2 className="checkout_title">Your Shopping basket</h2>
                    {basket.map(item=>{
                        return(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                        );
                        
                    })
                    }
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;