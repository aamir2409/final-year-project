import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase"

function Header(){
    const[{basket,user},dispatch]=useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }

    return(
        <div className="header">
            {/* <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="pic" /> */}
            <Link to="/" style={{color:"#131921"}}>
            <h1 style={{color:"white"}}>Trademetria</h1>
            </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} style={{color:"#131921"}}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">
                        Hello {!user ? "Guest" : user.email}
                    </span>
                    <span className="header_optionLineTwo">
                        {user ? "SIGN OUT" : "SIGN IN"}
                    </span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                
                <Link to="/checkout" style={{color:"#131921"}}>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_BasketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;