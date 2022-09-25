import "./Home.css";
import { Navigate,useNavigate } from 'react-router-dom';
import building from "./images/screenshot-20220916-at-2114-1@2x.png";
import "./NavBar.css";
import polygon from "./images/polygon.png";
import tableland from "./images/Tableland.png";
import aave from "./images/AaveCoin.png";
import ENS from './images/ENS.png';
import EPNS from './images/epns.png';
function Home() {
  const navigate = useNavigate();
  return (
    <div>

      <div className="Ellipse3"></div>
      <div className="Ellipse2"></div>
      
      
      <div className="imagesec">
        <img src={building} height={677} width={655} />
      </div>
      <div>
        <button  onClick={() => navigate("/registerpage")} className="regbutton1"> Register </button>
      </div>
      <p>
        {" "}
        Protocol for managing physical communities bringing{" "}
        <span className="tword">traceability</span> and{" "}
        <span className="tword">transparency</span> to users, payments, and
        governance
      </p>
      <div className="AAVE">
      <img src={aave} height={160} width={200} />
      </div>
      <div className="Polygon">
      <img src={polygon} height={90} width={200} />
      </div>
      <div className="TableLand">
      <img src={tableland} height={100} width={200} />
      </div>
      <div className="ENS">
      <img src={ENS} height={80} width={200} /> 
      </div>
      <div className="EPNS">
      <img src={EPNS} height={90} width={90} />
      </div>

    </div>
  );
}

export default Home;
