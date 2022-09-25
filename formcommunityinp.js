import React from "react";
import {useState} from "react";
import './formcommunityinp.css';
import salyfinger from "./images/Saly-37.png";
function FormcommunityInp(){
    const[name,setName]=useState('Enter Your Name Here')
    const[Address1,setAddress1]=useState('Address Line 1')
    const[Address2,setAddress2]=useState('Address Line 2')
    const[City,setCity]=useState('City')
    const[State,setState]=useState('State')
    const[Country,setCountry]=useState('Country')
    const[WalletT,setWalletT]=useState('Treasury Wallet Address')
    const[WalletA,setWalletA]=useState('Administrator Wallet Address')
    const[UniqueId,setUniqueId]=useState('Enter UniqueID here')
    function getUniqueId(val){
        setUniqueId(val.target.value)
    }
    function getWalletA(val){
        setWalletA(val.target.value)
    }
    function getWalletT(val){
        setWalletT(val.target.value)
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
    function getName(val)
    {
        setName(val.target.value)

    }
    return (
        <div>
            <form action="">
                <button className="CW">Connect Wallet</button>
            <div className="ForCommName">
               <div className="ForCommNameText"> <label htmlFor="ForName">Name</label></div>
               <input type="text" value={name} onChange={getName} required name="CommName" id="CommName" className="ForCommNameInput"/>
            </div>
            <div className="ForLocation">
                <div className="ForLocationText"><label htmlFor="ForLocation">Location</label></div>
                <input type="text" required value={Address1} onChange={getAddress1} name="Address1" id="Address1" className="ForLocationInputAddress1"/>
                <input type="text"  value={Address2} onChange={getAddress2} name="Address2" id="Address2" className="ForLocationInputAddress2"/>
                <input type="text" required value={City} onChange={getCity} name="City" id="City" className="ForLocationCity"/>
                <input type="text" required value={State} onChange={getState} name="State" id="State" className="ForLocationState"/>
                <input type="text" required value={Country} onChange={getCountry} name="Country" id="Country" className="ForLocationCountry"/>
            </div>
            <div className="ForTreasuryWallet">
                <div className="ForTreasuryWalletText"><label htmlFor="ForTreasuryWallet">Treasury Wallet</label></div>
                <input type="text" required value={WalletT} onChange={getWalletT} name="TreasuryWallet" id="TreasuryWallet" className="ForTreasuryWalletInput"/>
            </div>
            <div className="ForAdministratorWallet">
                <div className="ForAdministratorWalletText"><label htmlFor="ForAdministratorWallet">Administrator Wallet</label></div>
                <input type="text" required value={WalletA} onChange={getWalletA} name="AdmistratorWallet" id="AdmistratorWallet" className="ForAdmistratorWalletInput"/>
                <input type="text" required value={UniqueId} onChange={getUniqueId} name="UniqueId" id="UniqueId" className="ForUniqueIdInput"/>
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
