import React from "react";

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

					<h1 className="userName">Darnell</h1>
				</div>
				<div className="NavSec">
					<button>CS Hints</button>
					<button>Profile</button>
					<button>Resources</button>
					<button>News</button>
					<button>Logout</button>
				</div>
			</div>
			<div className="displaySec"></div>
		</div>
	);
};

export default CsHints;
