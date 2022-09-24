import React from "react";
import './formuserinp.css';
import saly from "./images/Saly-7.png";
function FormUserInp() {
    return (
        <div>
             
        <form action="">
            <div className="ForNo">
               <div className="ForNoText"> <label htmlFor="Noofprop">Number of property</label></div>
                <input type="text" name="NoofP" id="NoofP" className="ForNoInput"/>
            </div>
            <div className="ForName">
                <div className="ForNameText"><label htmlFor="Name">Name</label></div>
                <input type="text" name="Name" id="Name" className="ForNameInput"/>
            </div>
            <div className="ForAmount">
                
                <input type="text" name="Amount" id="Amount" className="ForAmountInput"/>
            </div>
            <div className="Uniq">
                
                <input type="text" name="Uniq" id="Uniq" className="ForUniqInput"/>
            </div>
            <div className="RectangleForForm"></div>
              <input type="text" name="Address1" id="Address1" className="ForAddressLine1"/>
              <input type="text" name="Address2" id="Address2" className="ForAddressLine2"/>
              <input type="text" name="City" id="City" className="ForCity"/>
              <input type="text" name="State" id="State" className="ForState"/>
              <input type="text" name="Country" id="Country" className="ForCountry"/>
              <button className="CYL"> Confirm Your Location </button>
              <button className="RegisterProperty"> Register Property </button>
              <div className="imagesaly">
                 <img src={saly} alt="" width={622} height={602}/>
              </div>

            
        </form>
        </div>
    );

}
export default FormUserInp;