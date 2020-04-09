import React from "react";
import { FaEdit } from "react-icons/fa";

import Button from "./components/Button.jsx";
import Resources from "./components/Resources.jsx";

const buttonsMap = [0, 1, 2, 3, 4];

const CsHints = (props) => {
	const buttons = ["CS Hints", "Profile", "Resources", "News", "Logout"];
	return (
		<div className="CsHints">
			<div className="leftPanel">
				<div className="userSec">
					<img className="userImg" src={props.userPicSrc} alt="userPic" />
					<div className="userEdit">
						<FaEdit className="userEditIco" />
					</div>
					<h1 className="userName"> {props.userName}</h1>
				</div>
				<div className="navSec">
					{buttonsMap.map((i) => {
						return (
							<Button
								onClick={() => {
									console.log("This button was clicked");
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
				<Resources />
			</div>
		</div>
	);
};

export default CsHints;
