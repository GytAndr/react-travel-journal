import "./Card.css";
import pin from "../images/pin-icon.png";

const Card = (props) => {
	return (
		<div className="card">
			<img className="card--image" src={props.item.imageUrl}></img>
			<div className="card--textbox">
				<p className="card--location">
					<img src={pin} /> {props.item.location.toUpperCase()}{" "}
					<a href={props.item.googleMapsUrl}>View on Google Maps</a>
				</p>
				<h2 className="card--title">{props.item.title}</h2>
				<p className="card-dates">
					{props.item.startDate} - {props.item.endDate}
				</p>
				<p className="card--description">{props.item.description}</p>
			</div>
		</div>
	);
};
export default Card;
