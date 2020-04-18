import React from "react";

//Personal Imports
// import WeatherCard from "./WeatherCard";
import "./App.css";
import UserView from "./cs_hints/UserView";
import GuestView from "./cs_hints/components/GuestView";
import Header from "./cs_hints/components/Header";
import UserHeader from "./cs_hints/components/UserHeader";
import Footer from "./cs_hints/components/Footer";

function App() {
	// whenClicked is a property not an event, per se

	function UserInterface(props) {
		return (
			<UserView
				userName="Darnell"
				userPicSrc="https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fdarnell.png?v=1584322716006"
			/>
		);
	}

	function GuestInterface(props) {
		return (
			<div>
				<Header />
				<GuestView />
			</div>
		);
	}

	function Greeting(props) {
		const isLoggedIn = props.isLoggedIn;
		if (isLoggedIn) {
			return (
				<div>
					<UserHeader />
					<UserInterface />
				</div>
			);
		}
		return <GuestInterface />;
	}
	return (
		<div className="App">
			<Greeting isLoggedIn={true} />
			<Footer />
		</div>
	);
}

export default App;
