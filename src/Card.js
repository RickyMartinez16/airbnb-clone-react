import "./App.css";
import "./card.css"
import katie from "./katieL.webp"
import star from "./Red_star.svg.png"

function Card(props){
    return(
        <div className="card">
            <img src={katie} alt="kaite ledecky" className="katie"></img>
                <div className="stars-and-rating">
                    <img src={star} alt="red star" className="red-star"></img>
                    <span>{props.rating}</span>
                    <span className="gray">{props.reviewCount} • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p className="activity-text">{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card