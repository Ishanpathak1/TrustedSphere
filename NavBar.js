import earth from './images/FINAL_LOGOJPG-removebg-preview.png';
function NavBar() {
    return (
        <div >
        <nav className="nav">
            <a href="/" className="sitetitle">
                <p className='Title'>Trusted Sphere</p>
                
            </a>
            <img className='earthimage' src={earth} height={110} width={105}/>
            
        </nav>
        <ul>
        <li>
            <a href="/formcommunity">Register Community</a>
        </li>
        <li>
            <a href="/formuser">Register User</a>
        </li>
       <li>
        <a href="/dashboardcommunity">Dashboard Community</a>
       </li>
       <li>
        <a href="/dashboarduser">Dashboard User</a>
       </li>
       
    </ul>
    <button className='ConnectWalletButtonNav'> Connect Metamask</button>
    </div>
    );
}
export default NavBar;