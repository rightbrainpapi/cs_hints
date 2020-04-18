import React, { Component } from "react";

import "./styles/Page.css";
import SearchResults from "./SearchResults";

class ResourcePage extends Component {
	render() {
		return (
			<div className="ResourcePage">
				<h1>We are still on the resource page</h1>
				<SearchResults />
			</div>
		);
	}
}

export default ResourcePage;
