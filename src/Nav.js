import "./App.css";
import logo from "./Airbnb_Logo_Bélo.svg.png";
import "./nav.css"

function Nav() {
  return (
    <div>
      <nav>
        <img src={logo} alt="airbnb logo" className="navlogo"></img>
      </nav>
    </div>
  );
}

export default Nav
