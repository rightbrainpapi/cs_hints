import React, { Component } from "react";

// import "./styles/TopNav.css";

class TopNav extends Component {
	render() {
		return (
			<div className="topNav">
				<div className="nameLogoContainer">
					<div className="titleSec">
						<h1 className="title"> CS Hints</h1>
						<p className="subTitle"> Search | Save | Share</p>
					</div>

					<div className="topNavIco">
						<img
							src="https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FcsHintsFavIcon.png?v=1585942167355"
							alt=""
						/>
					</div>
				</div>

				<div className="searchField">
					<input
						type="text"
						placeholder="Search for excellent coding resources"
					/>
				</div>

				<div className="buttonContainer">
					<button className="joinBtn">logout</button>
				</div>
			</div>
		);
	}
}

export default TopNav;
