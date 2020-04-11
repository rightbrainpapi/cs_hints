import React, { Component } from "react";

import "./styles/Page.css";
import ProfilePage from "./ProfilePage";
import ResourcePage from "./ResourcePage";
import CsHintsPage from "./CsHintsPage";
import NewsPage from "./NewsPage";

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
					return <CsHintsPage />;
			}
		}

		return (
			<div className="PagesSection">
				<SwitchPage selectedPage={this.props.selectedPage} />
			</div>
		);
	}
}

export default Page;
