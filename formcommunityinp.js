import React from "react";
import './formcommunityinp.css';
import salyfinger from "./images/Saly-37.png";
function FormcommunityInp(){
    return (
        <div>
            <form action="">
            <div className="ForCommName">
               <div className="ForCommNameText"> <label htmlFor="ForName">Name</label></div>
               <input type="text" name="CommName" id="CommName" className="ForCommNameInput"/>
            </div>
            <div className="ForLocation">
                <div className="ForLocationText"><label htmlFor="ForLocation">Location</label></div>
                <input type="text" name="Address1" id="Address1" className="ForLocationInputAddress1"/>
                <input type="text" name="Address2" id="Address2" className="ForLocationInputAddress2"/>
                <input type="text" name="City" id="City" className="ForLocationCity"/>
                <input type="text" name="State" id="State" className="ForLocationState"/>
                <input type="text" name="Country" id="Country" className="ForLocationCountry"/>
            </div>
            <div className="ForTreasuryWallet">
                <div className="ForTreasuryWalletText"><label htmlFor="ForTreasuryWallet">Treasury Wallet</label></div>
                <input type="text" name="TreasuryWallet" id="TreasuryWallet" className="ForTreasuryWalletInput"/>
            </div>
            <div className="ForAdministratorWallet">
                <div className="ForAdministratorWalletText"><label htmlFor="ForAdministratorWallet">Administrator Wallet</label></div>
                <input type="text" name="AdmistratorWallet" id="AdmistratorWallet" className="ForAdmistratorWalletInput"/>
                <input type="text" name="UniqueId" id="UniqueId" className="ForUniqueIdInput"/>
                <button className="SubmitCommunity"> Submit Community </button>
            </div>
            <div className="imagefinger">
                 <img src={salyfinger} alt="3DImage" width={494} height={479}/>
              </div>
            </form>

        </div>
    );
}
export default FormcommunityInp;
