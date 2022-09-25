import React from "react";
import './formuserinp.css';
import saly from "./images/Saly-7.png";
import {useState} from "react";
function FormUserInp() {
    const[name,setName]=useState('Enter Your Name Here')
    const[Address1,setAddress1]=useState('Address Line 1')
    const[Address2,setAddress2]=useState('Address Line 2')
    const[City,setCity]=useState('City')
    const[State,setState]=useState('State')
    const[Country,setCountry]=useState('Country')
    const[NooP,setNoop]=useState('Enter Your Number Here')
    function getNoop(val){
        setNoop(val.target.value)
    }
    function getName(val)
    {
        setName(val.target.value)

    }
    function getCountry(val){
        setCountry(val.target.value)
    }
    function getState(val){
        setState(val.target.value)
    }
    function getCity(val){
        setCity(val.target.value)
    }
    function getAddress2(val){
        setAddress2(val.target.value)
    }
    function getAddress1(val){
        setAddress1(val.target.value)
    }
    return (
        <div>
             
        <form action="">
            
            <div className="ForNo">
               <div className="ForNoText"> <label htmlFor="Noofprop">Number of property</label></div>
                <input type="text" value={NooP} onChange={getNoop} name="NoofP" id="NoofP" className="ForNoInput"/>
            </div>
            <div className="ForName">
                <div className="ForNameText"><label htmlFor="Name">Name</label></div>
                <input type="text" value={name} onChange={getName} name="Name" id="Name" className="ForNameInput"/>
            </div>
            <div className="ForAmount">
                
                <input type="text" name="Amount" id="Amount" className="ForAmountInput"/>
            </div>
            <div className="Uniq">
                
                <input type="text" name="Uniq" id="Uniq" className="ForUniqInput"/>
            </div>
            <div className="RectangleForForm"></div>
              <input type="text" value={Address1} onChange={getAddress1} name="Address1" id="Address1" className="ForAddressLine1"/>
              <input type="text" value={Address2} onChange={getAddress2} name="Address2" id="Address2" className="ForAddressLine2"/>
              <input type="text" value={City} onChange={getCity} name="City" id="City" className="ForCity"/>
              <input type="text" value={State} onChange={getState}name="State" id="State" className="ForState"/>
              <input type="text" value={Country} onChange={getCountry} name="Country" id="Country" className="ForCountry"/>
              <button className="CYL"> Confirm Your Location </button>
              <button className="RegisterProperty"> Register Property </button>
              <div className="imagesaly">
                 <img src={saly} alt="3DImage" width={622} height={602}/>
              </div>

            
        </form>
        </div>
    );

}
export default FormUserInp;