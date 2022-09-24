import "./Home.css";
import { Navigate,useNavigate } from 'react-router-dom';
import building from "./images/screenshot-20220916-at-2114-1@2x.png";
import "./NavBar.css";
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
    </div>
  );
}

export default Home;
