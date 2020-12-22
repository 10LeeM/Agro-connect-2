import React from "react";
import {NavLink} from "react-router-dom";

function HeaderComponent() {
    return (
        //Agro-connect navigation links
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="active" to="services">
                Services
            </NavLink>
            <NavLink exact activeClassName="active" to="smartMarket">
                Smart Market
            </NavLink>
            <NavLink exact activeClassName="active" to="contact">
                Contact US
            </NavLink>
            
        </nav>
    )
}

export default HeaderComponent;