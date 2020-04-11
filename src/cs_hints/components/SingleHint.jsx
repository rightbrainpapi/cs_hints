import React, { Component } from "react";

import "./styles/Page.css";

class SingleHint extends Component {
	render() {
		return (
			<div className="hintCard">
				<h3 className="hintCost">{this.props.cost}</h3>
				<h1 className="hintName">{this.props.name}</h1>

				<div className="ImageAndText">
					<div className="hintImg">
						<img className="hintIcon" src={this.props.source} alt="Hint Icon" />
					</div>

					<div className="textInfo">
						<p className="b">{this.props.description}</p>
					</div>
				</div>
				<div className="buttonCon">
					<button>add</button>
					<button>vist</button>
				</div>
			</div>
		);
	}
}

export default SingleHint;
