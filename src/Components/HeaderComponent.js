import React from "react";
import {NavLink, Link} from "react-router-dom";
import '../Components/UpperComponents.css'

function HeaderComponent() {
    return (
        //Agro-connect navigation links
        <div className="header-container">
            <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="active" to="">
                Services
            </NavLink>
            <NavLink exact activeClassName="active" to="smartMarket">
                Smart Market
            </NavLink>
            <NavLink exact activeClassName="active" to="contact">
                FAQ
            </NavLink>
            <NavLink exact activeClassName="active" to="contact">
                Contact US
            </NavLink>
        </nav>
        <div className="header-buttons">
            <Link path="Account Setup/BuyersSignupForm">Sign in</Link>
            <Link path="">Login</Link>
            <Link path="">Cart</Link>
        </div>
        </div>
        


    )
}

export default HeaderComponent;