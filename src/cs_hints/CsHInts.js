import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";

import Button from "./components/Button.jsx";
import Page from "./components/Page.jsx";

class CsHints extends Component {
	constructor() {
		super();
		this.state = {
			userName: "Darnell",
			userPicSrc:
				"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fdarnell.png?v=1584322716006",
			value: 0,
			message: "default click state",
			buttons: ["CS Hints", "Profile", "Resources", "News", "Logout"],
			page: "profile",
		};
	}

	onClickfn = (e) => {
		console.log(e.target.name);
		const clickedPage = e.target.name;
		this.changePage(clickedPage);

		this.setState(
			(prevState, props) => ({
				message: `click-state ${prevState.page}`,
			}),
			() => {
				this.logStat();
			}
		);
	};

	changePage(page) {
		this.setState((prevState, props) => ({
			page: page,
		}));
	}

	handleChange(e) {
		const page = e.target.value;
		this.changeUserName(page);
	}

	logStat = () => {
		console.log(`After update: ${this.state.value}`);
		console.log(`After update: ${this.state.page}`);
		console.log(this.state.message);
	};

	render() {
		return (
			<div className="parentContainer">
				<div className="topNav">
					<div className="container">
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
					<div className="buttonContainer">
						<button className="joinBtn">logout</button>
					</div>
				</div>
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
							{this.state.buttons.map((button, i) => {
								return (
									<Button
										key={i}
										onClick={this.onClickfn}
										type="button"
										buttonstyle="btn--nav--solid"
										text={button}
										name={button}
									/>
								);
							})}
						</div>
					</div>
					<div className="displaySec">
						<h2>
							{
								//Check if message failed
								this.state.page.toUpperCase() === "LOGOUT"
									? "Profile".toUpperCase()
									: this.state.page.toUpperCase()
							}
						</h2>
						<Page selectedPage={this.state.page} />
					</div>
				</div>
			</div>
		);
	}
}

export default CsHints;
