import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import data from "./Data";

export default function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} item={item} />;
	});
	return (
		<div className="app-container">
			<Navbar />
			<section className="cards-list">{cards}</section>
		</div>
	);
}
