import React, { Component } from "react";

// import "./styles/TopNav.css";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navBar userNav">
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
					</div>
					{/*<ul className="nav active">
						<li>
							<a href="https://cshints.com/">Logout</a>
						</li>
		</ul> */}
				</nav>
			</div>
		);
	}
}

export default Header;
