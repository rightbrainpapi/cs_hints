import React from "react";
import { FaEdit } from "react-icons/fa";

import Button from "./components/Button.jsx";

const CsHints = (props) => {
	return (
		<div className="CsHints">
			<div className="leftPanel">
				<div className="userSec">
					<img
						className="userImg"
						src="https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fdarnell.png?v=1584322716006"
						alt="userPic"
					/>
					<div className="userEdit">
						<FaEdit className="userEditIco" />
					</div>
					<h1 className="userName">Darnell</h1>
				</div>
				<div className="navSec">
					<Button
						onClick={() => {
							console.log("This button was clicked");
						}}
						type="button"
						buttonStyle="btn--nav--solid"
						text="CS Hints"
					></Button>
					<Button
						onClick={() => {
							console.log("This button was clicked");
						}}
						type="button"
						buttonStyle="btn--nav--solid"
						text="Profile"
					></Button>
					<Button
						onClick={() => {
							console.log("This button was clicked");
						}}
						type="button"
						buttonStyle="btn--nav--solid"
						text="Resources"
					></Button>
					<Button
						onClick={() => {
							console.log("This button was clicked");
						}}
						type="button"
						buttonStyle="btn--nav--solid"
						text="News"
					></Button>
					<Button
						onClick={() => {
							console.log("This button was clicked");
						}}
						type="button"
						buttonStyle="btn--nav--solid"
						text="Logout"
					></Button>
				</div>
			</div>
			<div className="displaySec"></div>
		</div>
	);
};

export default CsHints;
