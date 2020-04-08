import React from "react";
import { FaEdit } from "react-icons/fa";

const CsHints = () => {
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
					<button className="navBtn">CS Hints</button>
					<button className="navBtn">Profile</button>
					<button className="navBtn">Resources</button>
					<button className="navBtn">News</button>
					<button className="navBtn">Logout</button>
				</div>
			</div>
			<div className="displaySec"></div>
		</div>
	);
};

export default CsHints;
