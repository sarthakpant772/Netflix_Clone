import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./nav.css";


function Nav() {
    const [show,handleSchow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>0){
                handleSchow(true);                                                                                                                                                                                                               
            }
            else handleSchow(false);  
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
        alt="Netflix"
      />
      <img
        className="nav__avatar"
        src="data:image/png;base64,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"
        alt="Netflix"
      />
    </div>
  );
}

export default Nav;
