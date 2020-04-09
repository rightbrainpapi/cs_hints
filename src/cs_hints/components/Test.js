import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";

import Button from "./components/Button.jsx";
import Page from "./components/Page.jsx";
const buttonsMap = [0, 1, 2, 3, 4];

class CsHints extends Component {
	constructor() {
		super();
		this.state = {
			userName: "Darnell",
			userPicSrc:
				"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fdarnell.png?v=1584322716006",
		};
	}

	render() {
		const buttons = ["CS Hints", "Profile", "Resources", "News", "Logout"];

		return (
			<div className="CsHints">
				<div className="leftPanel">
					<div className="userSec">
						<img
							className="userImg"
							src={this.state.userPicSrc}
							alt="userPic"
						/>
						<div className="userEdit">
							<FaEdit className="userEditIco" />
						</div>
						<h1 className="userName"> {this.state.userName}</h1>
					</div>
					<div className="navSec">
						{buttonsMap.map((i) => {
							return (
								<Button
									onClick={() => {
										console.log(`Button: ${buttons[i]} was clicked`);
									}}
									type="button"
									buttonStyle="btn--nav--solid"
									text={buttons[i]}
								/>
							);
						})}
					</div>
				</div>
				<div className="displaySec">
					<h2>Some Title</h2>
					<Page selectedPage="profile" />
				</div>
			</div>
		);
	}
}

export default CsHints;
