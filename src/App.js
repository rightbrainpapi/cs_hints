import React from "react";

//Personal Imports
import WeatherCard from "./WeatherCard";
import "./App.css";
import CsHints from "./cs_hints/CsHInts";

function App() {
	// whenClicked is a property not an event, per se
	return (
		<div className="App">
			{/* <WeatherCard /> */}
			<CsHints />
		</div>
	);
}

export default App;
