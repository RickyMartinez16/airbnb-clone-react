import "./App.css";
import vacationImage from "./vacation.png"
import "./hero.css"

function Hero(){
    return(
        <div className="hero-container">
            <img src={vacationImage} alt="vacations" className="hero-photo"></img>
            <div className="hero-text">
                <h1 className="hero-h1">Online Experiences</h1>
                <p className="hero-p">Join unique interactive activities led by one of a kind hosts - all without leaving home!</p>
            </div>
        </div>
    )
}

export default Hero;