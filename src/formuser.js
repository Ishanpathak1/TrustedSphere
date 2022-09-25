import React from "react";
import NavBar from "./NavBar";
import "./formuser.css";
import FormUserInp from "./formforuserinp";
import "./NavBar.css";
import "./formuserinp.css";



function Formuser() {
  return (
    <div>
      <button className="ConnectWalletButton">Connect Wallet</button>
        
      <p className="Tagline">
        Now you will be able to <span className="tarce">trace</span> each
        transaction on the go
      </p>
      <div className="rectangle1"></div>
      

      <div className="glassmorphismrectangle1"></div>
      <FormUserInp />
      
      <div className="Ellipse5"></div>
    </div>
  );
}
export default Formuser;
