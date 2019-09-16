import React from "react";
import Search from "../components/Search.jsx";
import InfoCard from "../components/InfoCard.jsx";
import Footer from "../components/Footer.jsx";

const Developers = props => (
	<React.Fragment>
		<Search history={props.history} />
		<div className="home-wrapper">
			<InfoCard classModifier="info-card--large info-card--title info-card--column">
				<h1>Developers</h1>
			</InfoCard>

			<div className="container main">
				<div className="content">
					<p>
						At its core, OpenLaw NZ is a series of data services built for developers such as yourself to
						use.
					</p>
					<p>
						While our API and search engine is free for non-profit &amp; open-source projects, commercial
						usage requires a separate license.
					</p>

					<h2>API</h2>
					<p>
						By using our API you agree to the{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://s3-ap-southeast-2.amazonaws.com/assets.openlaw.nz/apiterms.pdf"
						>
							API Terms of Use
						</a>
					</p>
					<p>
						Explore our{" "}
						<a rel="noopener noreferrer" target="_blank" href="https://api2.openlaw.nz/graphiql">
							GraphQL API &nbsp;
						</a>
					</p>

					<p>
						Check out our{" "}
						<a rel="noopener noreferrer" target="_blank" href="https://github.com/openlawnz">
							Github repositories &nbsp;
						</a>
					</p>

					<p>
						If you&apos;d like to volunteer and join our Slack channel please{" "}
						<a href="mailto:william@openlaw.nz">email William</a>.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	</React.Fragment>
);

export default Developers;
