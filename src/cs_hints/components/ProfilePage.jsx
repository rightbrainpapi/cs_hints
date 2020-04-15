import React, { Component } from "react";

import "./styles/Page.css";
import SingleHint from "./SingleHint";

class ProfilePage extends Component {
	constructor() {
		super();
		this.state = {
			myHints: {
				tutorials: [
					{
						title: "Codecademy",
						website: "https://www.codecademy.com/",
						image:
							"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fcode.png?v=1586626920544",
						description:
							"Codecademy is an online catalog of coding course ranging from web development to programming.",
						category: "for-profit",
						tags: "learning",
						cost: "free",
					},
					{
						title: "Hour of Code",
						website: "https://hourofcode.com/us",
						image: "https://hourofcode.com/us/en/images/hour-of-code-logo.png",
						description:
							'The Hour of Code started as a one-hour introduction to computer science, designed to demystify "code", to show that anybody can learn the basics, and to broaden participation in the field of computer science. It has since become a worldwide effort to celebrate computer science, starting with 1-hour coding activities but expanding to all sorts of community efforts.',
						category: "non-profit",
						tags: "learning",
						cost: "free",
					},
					{
						title: "Raspberry Pi",
						website: "https://www.raspberrypi.org/",
						image:
							"https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png",
						description:
							"Raspberry Pi is a UK-based charity that works to put the power of computing and digital making into the hands of people all over the world. They do this so that more people are “able to harness the power of computing and digital technologies for work, to solve problems that matter to them, and to express themselves creatively.”",
						category: "non-profit",
						tags: "learning",
						cost: "free",
					},
					{
						title: "Raspberry Pi",
						website: "https://www.raspberrypi.org/",
						image:
							"https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png",
						description:
							"Raspberry Pi is a UK-based charity that works to put the power of computing and digital making into the hands of people all over the world. They do this so that more people are “able to harness the power of computing and digital technologies for work, to solve problems that matter to them, and to express themselves creatively.”",
						category: "non-profit",
						tags: "learning",
						cost: "free",
					},
				],
				// tools:[]
			},
		};
	}

	render() {
		return (
			<div className="ProfilePage">
				<div className="myHintsSec">
					<h3 className="secTitle">myHintsSec</h3>

					<div className="hintsContainer">
						{this.state.myHints.tutorials.map((tutHints, i) => {
							return (
								<SingleHint
									key={tutHints._id}
									source={tutHints.image}
									name={tutHints.title}
									description={tutHints.description}
									cost={tutHints.cost}
								/>
							);
						})}
					</div>
				</div>
				<div className="myNewsSec">
					<h3 className="secTitle">myNewsSec</h3>
					<div className="hintsContainer">
						{this.state.myHints.tutorials.map((tutHints, i) => {
							return (
								<SingleHint
									key={tutHints._id}
									source={tutHints.image}
									name={tutHints.title}
									description={tutHints.description}
									cost={tutHints.cost}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default ProfilePage;
