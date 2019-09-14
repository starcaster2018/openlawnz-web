import React, { Component } from "react";
import Search from "../components/Search.jsx";
import Mission from "../components/Mission.jsx";
import Footer from "../components/Footer.jsx";
import InfoCard from "../components/InfoCard.jsx";
import InfoCardUnit from "../components/InfoCardUnit.jsx";
import ContactUs from "../components/ContactUs.jsx";
import News from "../components/News.jsx";

class Home extends Component {
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<h1 className="header-title">OpenLaw NZ is a new, free legal research platform for New Zealand.</h1>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard>
						<InfoCardUnit one="17,605" two="CASES" />
						<div className="border"></div>
						<InfoCardUnit one="20,261" two="CASE-TO-CASE RELATIONSHIPS" />
						<div className="border"></div>
						<InfoCardUnit one="190,324" two="CASE-TO-LEGISLATION RELATIONSHIPS" />
					</InfoCard>
					<Mission />
					<News />
					<ContactUs />
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
