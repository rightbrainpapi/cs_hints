import React, { Component } from "react";
import "./styles/Page.css";

function CsHintsPage(props) {
	return <h1>Cs HInts Page...</h1>;
}

function ProfilePage(props) {
	return <h1>ProfilePage...</h1>;
}

function ResourcePage(props) {
	return <h1>Resources...</h1>;
}

function NewsPage(props) {
	return <h1>News...</h1>;
}

class Page extends Component {
	render() {
		function SwitchPage(props) {
			const selectedPage = props.selectedPage;
			switch (selectedPage.toLowerCase()) {
				case "cs hints":
					return <CsHintsPage />;
				case "profile":
					return <ProfilePage />;
				case "resources":
					return <ResourcePage />;
				case "news":
					return <NewsPage />;
				default:
					//The logout butoon was pressed
					return <ProfilePage />;
			}
		}

		return (
			<div className="resourcesPage">
				<SwitchPage selectedPage={this.props.selectedPage} />
			</div>
		);
	}
}

export default Page;
