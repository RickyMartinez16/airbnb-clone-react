import "./App.css";
import "./card.css"
import katie from "./katieL.webp"
import star from "./Red_star.svg.png"

function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={katie} alt="kaite ledecky" className="katie"></img>
                <div className="stars-and-rating">
                    <img src={star} alt="red star" className="red-star"></img>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount})</span>
                    <span className="gray">{props.item.location}</span>
                </div>
                <p className="activity-text">{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card