import React from "react";
import hImage from "../assets/hd2.jpg"
import "./headerIm.css"

export const HeaderImage = () => {  
    return(
        <>
         <div className="hdim">
            <ul>
                <li id="ttl">aajnew</li>
                <li id="abt">About Us</li>
                <li>Contact</li>
            </ul>
            <img src={hImage} alt = "text" width="100%" height = "500px" />
            <h1>Create your Quote</h1>
         </div>
        </>
    )
}