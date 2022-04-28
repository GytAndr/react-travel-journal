import "./navbar.css";
import world from "../images/world.png";
export default function Nav() {
	return (
		<nav>
			<img src={world}></img>
			<p className="nav--title">my travel journal.</p>
		</nav>
	);
}
