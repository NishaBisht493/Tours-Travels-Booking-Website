import './mailList.css';
import React, { useState } from "react";

const MailList = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsValid(validateEmail(emailValue));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    };

    const subscribe = () => {
        alert("You have subscribed to the mailList successfully!");
    }

    return(
        <div className="mail">
            <h1 className= "mailTitle">Save Time, Save Money!</h1>
            <span className= "mailDesc">Sign up and we will send the best deals for you</span>
            <div className="mailInputContainer">
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={handleEmailChange} id = "emailBox" placeholder='your email here' />
                    <button type="submit" disabled={!isValid} onClick = {subscribe} id = "emailBtn">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default MailList;