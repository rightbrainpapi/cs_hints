import React from "react";

//Personal Imports
import WeatherCard from "./WeatherCard";
import "./App.css";
import CsHints from "./cs_hints/CsHInts";

function App() {
	// whenClicked is a property not an event, per se

	function UserInterface(props) {
		return (
			<CsHints
				userName="Darnell"
				userPicSrc="https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fdarnell.png?v=1584322716006"
			/>
		);
	}

	function GuestInterface(props) {
		return <h1>Please sign up.</h1>;
	}

	function Greeting(props) {
		const isLoggedIn = props.isLoggedIn;
		if (isLoggedIn) {
			return <UserInterface />;
		}
		return <GuestInterface />;
	}
	return (
		<div className="App">
			{/* <WeatherCard /> <CsHints />*/}
			<Greeting isLoggedIn={true} />,
		</div>
	);
}

export default App;
