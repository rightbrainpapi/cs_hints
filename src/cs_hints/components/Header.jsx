import React, { Component } from "react";
import Modal from "./Modal";

// import "./styles/TopNav.css";

class Header extends Component {
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
		console.log("This is working");
		this.setState({
			show: !this.state.show,
		});
	};
	render() {
		return (
			<div className="header">
				<nav className="navBar">
					<div className="left">
						<div className="logo">
							<a href="https://cshints.com/">
								<h1>CS Hints</h1>
								<p>Search | Save | Share</p>
							</a>
							<img
								src="https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FcsHintsFavIcon.png?v=1585942167355"
								className="headerLogo"
								alt=""
							/>
						</div>
						<div className="nav-search-form">
							<form action="#">
								<input
									type="text"
									placeholder="Search for excellent coding resources"
								/>
							</form>
						</div>
					</div>
					<ul className="nav active">
						<li>
							<a href="https://cshints.com/">Login</a>
						</li>
						<li>
							{/* <a href="https://cshints.com/" id="buttonTrig" className="button">
								Join Free
							</a> */}
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
								Join Free
							</button>
						</li>
					</ul>
				</nav>
				<div className="category-nav">
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> General Tools</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Coding Styles</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Cryptocurrency</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Coding Practice</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Current News</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Magazines</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Coding Advice</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Tutorials</a>
					</div>
					<div href="https://cshints.com/" className="category">
						<a href="https://cshints.com/"> Books</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
