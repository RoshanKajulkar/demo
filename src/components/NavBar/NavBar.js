import React from "react";

//css
import "./NavBar.css";

//icon
import { UilPlus } from "@iconscout/react-unicons";
import { UilBars } from '@iconscout/react-unicons'

const NavBar = () => {
  return (

    <>
    <div className="Nav">
      <div className="offer">
        <div className="option">
          <p className="text">
            Enjoy complimentary standard shipping on all orders.
          </p>
          <UilPlus fill="rgba(255,255,255,0.9)" className="plus" />
        </div>
      </div>
      <span className="body">
        <span className="left-menu">
          <div className="menu">Shop</div>
          <div className="menu">Read</div>
          <div className="menu">Stores</div>
          <div className="menu">Search</div>
        </span>
        <span className="left-company-name">
          <span className="menu">Aesop.</span>
        </span>
        
        <span className="right-menu">
          <div className="menu">Login</div>
          <div className="menu">Cart</div>
        </span>
        <span className="right-company-name">
          <div className="menu">Cart</div>
          <div>
            <UilBars className=""/>
          </div>
        </span>
      </span>
    </div>
    </>
  );
};

export default NavBar;
