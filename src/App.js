import React, { Component } from "react";
// import { Auth } from "aws-amplify";

//Personal Imports
// import WeatherCard from "./WeatherCard";
import "./App.css";
import UserView from "./cs_hints/UserView";
import GuestView from "./cs_hints/components/GuestView";
import Header from "./cs_hints/components/Header";
import UserHeader from "./cs_hints/components/UserHeader";
import Footer from "./cs_hints/components/Footer";
import Modal from "./cs_hints/components/Modal";

class App extends Component {
	state = {
		username: "",
		password: "",
		email: "",
		phone_number: "",
		authenticationCode: "",
		step: 0,
		show: false,
	};
	showModal = (e) => {
		this.setState({
			show: !this.state.show,
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// signUp = async () => {
	// 	const { username, password, email, phone_numer } = this.state;
	// 	try {
	// 		await Auth.signUp({ username, password });
	// 		console.log('successfully signed up!');
	// 	this.setState({step: 1})
	// 	} catch (err) {
	// 		console.log("error signing up: ", err);
	// 	}
	// };

	// confirmSignUp = async () => {
	// 	const { username, authenticationCode } = this.state;
	// 	try {
	// 		await Auth.confirmSignUp(username, authenticationCode);
	// 		console.log('user successfully signed up!')
	// 	} catch (err) {console.log("error confirming signing up: ", err);}
	// };

	render() {
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
				<Greeting isLoggedIn={false} onClick={this.showModal} />
				<Modal onClose={this.showModal} show={this.state.show}>
					Message in Modal
				</Modal>
				<button
					className="toggle-button"
					id="centered-toggle-button"
					onClick={(e) => {
						this.showModal(e);
					}}
				>
					{" "}
					open
				</button>
				<Footer />
			</div>
		);
	}
}

export default App;
