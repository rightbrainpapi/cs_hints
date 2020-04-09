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
			value: 0,
			message: "default click state",
			page: "",
		};
	}

	onClickfn = (e) => {
		console.log(e.target.name);
		const clickedPage = e.target.name;
		this.setState((prevState, props) => ({
			value: prevState.value + 1,
			page: clickedPage,
		}));

		this.setState((prevState, props) => ({
			page: prevState.page,
		}));

		this.setState(
			(prevState, props) => ({
				message: `click-state ${prevState.value}`,
			}),
			() => {
				this.logStat();
			}
		);
	};

	logStat = () => {
		console.log(`After update: ${this.state.value}`);
	};

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
									onClick={this.onClickfn}
									type="button"
									buttonStyle="btn--nav--solid"
									text={buttons[i]}
									name={buttons[i]}
								/>
							);
						})}
					</div>
					<div>
						render->state={this.state.value} -{this.state.message}
					</div>

					<button onClick={this.onClickfn}>Click-setState fn</button>
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
