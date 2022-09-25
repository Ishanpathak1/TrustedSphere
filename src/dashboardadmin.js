import React from "react";
import './dashboardadmin.css'
function DashboardAdmin(){
    return(
        <div>
            <p className="AdminTitle">Admin Dashboard</p>
            <div className="Ellipse14"></div>
            <div className="Ellipse15"></div>
            <p className="DT">Debtors</p>
            <div className="GR11"></div>
            <p className="RS">Register Supplier</p>
            <button className="RB">Register</button>
            <div className="GR12"></div>
            <p className="RM">Recieved Messages:</p>
            <button className="SB">Send Message</button>
            <div className="GR13"></div>
            <p className="PTS">Pay to Supplier</p>
            <button className="PayAll">Pay All</button>
            <div className="GR14"></div>
            <button className="PLIA">Provide Liquidity In Aave</button>


        </div>
    );
}
export default DashboardAdmin;