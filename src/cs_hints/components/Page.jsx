import React, { Component } from "react";
import "./styles/Page.css";

function ResourcePage(props) {
	return <h1>Resources...</h1>;
}

function NewsPage(props) {
	return <h1>News...</h1>;
}

function ProfilePage(props) {
	return <h1>ProfilePage...</h1>;
}

class Page extends Component {
	render() {
		function SwitchPage(props) {
			const selectedPage = props.selectedPage;
			switch (selectedPage) {
				case "resources":
					return <ResourcePage />;
				case "news":
					return <NewsPage />;
				case "profile":
					return <ProfilePage />;
				default:
					return <h1>This is the default</h1>;
			}
		}
		return (
			<div className="resourcesPage">
				<SwitchPage selectedPage={this.props.selectedPage} />,
			</div>
		);
	}
}

export default Page;
