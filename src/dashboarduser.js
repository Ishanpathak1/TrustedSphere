import React from "react";
import './dashboarduser.css';
import {useState} from "react";
import { Navigate,useNavigate } from 'react-router-dom';
function DashboardUser(){
    const navigate = useNavigate();
    const[TypeHere,setTypeHere]=useState('Type Message Here')
    const[Search,setSearch]=useState('Search')
    function getSearch(val){
        setSearch(val.target.value)
    }
    function getTypeHere(val){
        setTypeHere(val.target.value)
    }
    return(
        
        <div>
            
            <div className="Ellipse12"></div>
            <div className="Ellipse13"></div>
            <div className="GR6">
            
            </div>
            <p className="ProDash">Property Dashboard</p>
            <p className="TD">Total Dues:</p>
            <button className="PA">Pay All</button>
            <p className="LP">Last Payments:</p>
            <p className="AdminYes">Are you a admin? If yes</p>
            <button onClick={() => navigate("/dashboardadmin")} className="CM">Click Me</button>
            <p className="R">Receipts:</p>
            <input type="text" value={Search} onChange={getSearch} name="Search" id="Search" className="Search"/>
            <button className="S"></button>
            <p className="SM">Send message to Admin:</p>
            <input type="text" value={TypeHere} onChange={getTypeHere} name="TypeHere" id="TypeHere" className="TypeHere"/>
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