import React from "react";
import './registerpage.css';
import communitypic from './images/Group-5.png';
import propertypic from './images/Group-12.png';
import { Navigate,useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
    return(
        <div>
            <div className="comimage">
             <img src={communitypic} alt="3DImage" width={383} height={264}/>
            </div>
            <div className="proimage">
             <img src={propertypic} alt="3DImage" width={128} height={172}/>
            </div>
            <div className="Ellipse8"></div>
            <div className="Ellipse9"></div>
            <div className="glassmorphismrectangle3"></div>
            <div className="glassmorphismrectangle4"></div>
            <div className="ComText">
                <p> Haven’t registered your community yet ?
                    register and be a part in bringing the <span>transperency</span> in your community.</p>
            </div>
            <div className="ProText">
                <p>Be a part of a community and easily bring <span>tracebililty</span> in your community.</p>
            </div>
            <button  onClick={() => navigate("/formcommunity")} className="regbutton2"> Register </button>
            <button  onClick={() => navigate("/formuser")} className="regbutton3"> Register </button>
        </div>

    );
}
export default RegisterPage;