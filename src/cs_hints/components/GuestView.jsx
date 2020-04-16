import React, { Component } from "react";
import TopNav from "./TopNav";
import ProfilePage from "./ProfilePage";

// import "./styles/GuestView.css";

class GuestView extends Component {
	render() {
		return (
			<div className="parentContainer">
				<TopNav />

				<div className="CsHints GuestView">
					<section className="hero">
						<div className="hero-container">
							<div className="hero-content">
								<h1>CS Hints</h1>
								<p>
									The internet's source for excellent programming resources.
									<br />
									Powered by programmers worldwide.
								</p>
								<div className="hero-search-form">
									<form action="#">
										<input
											type="text"
											id="search"
											placeholder="Search for excellent coding resources"
										/>
									</form>
								</div>

								<div id="searchTabContainer">
									<div id="tutorials" className="searchTab">
										Tutorials
									</div>
									<div id="tools" className="searchTab">
										Tools
									</div>
									<div id="weeklys" className="searchTab">
										Weeklys
									</div>
								</div>

								<div className="trending-search-tags">
									<p>
										Trending searches:{" "}
										<a href="https://cshints.com/">tutorials</a>,
										<a href="https://cshints.com/">interview prep</a>,
										<a href="https://cshints.com/">cryptocurrency</a>,
										<a href="https://cshints.com/"> jobs</a>
									</p>
								</div>
							</div>
						</div>
						<div className="hero-overlay"></div>
					</section>
					<ProfilePage />
				</div>
			</div>
		);
	}
}

export default GuestView;
