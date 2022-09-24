import React from "react";
import './dashboarduser.css';
function DashboardUser(){
    return(
        <div>
            
            <div className="Ellipse12"></div>
            <div className="Ellipse13"></div>
            <div className="GR6">
            
            </div>
            <p className="TD">Total Dues:</p>
            <button className="PA">Pay All</button>
            <p className="LP">Last Payments:</p>
            <p className="AdminYes">Are you a admin? If yes</p>
            <button className="CM">Click Me</button>
            <p className="R">Receipts:</p>
            <input type="text" name="Search" id="Search" className="Search"/>
            <button className="S"></button>
            <p className="SM">Send message to Admin:</p>
            <input type="text" name="TypeHere" id="TypeHere" className="TypeHere"/>
            <button className="SendMessage">Send</button>
            <div className="R7"></div>
            <div className="GR8">
                
            </div>
            <div className="GR9"></div>
            <div className="GR10"></div>
        </div>
    );
}
export default DashboardUser;