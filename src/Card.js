import "./App.css";
import "./card.css"
import katie from "./katieL.webp"
import star from "./Red_star.svg.png"

function Card(){
    return(
        <div className="card">
            <img src={katie} alt="kaite ledecky" className="katie"></img>
                <div className="stars-and-rating">
                    <img src={star} alt="red star" className="red-star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
                </div>
                <p className="activity-text">Life lessons with Katie Ledecky</p>
                <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card