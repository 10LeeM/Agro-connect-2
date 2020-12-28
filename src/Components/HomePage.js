import React from "react";
import SignupForm from '../Components/Account Setup/FarmersSignupForm';
import BuyersSignupForm from '../Components/Account Setup/BuyersSignupForm';

function HomePage(){
    return(
        <div>
            <h1>Agro-connect</h1>
            <SignupForm/>
            <BuyersSignupForm/>
        </div>
    );
}

export default HomePage;