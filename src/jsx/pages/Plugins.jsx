import React from "react";
import Search from "../components/Search.jsx";
import InfoCard from "../components/InfoCard.jsx";
import Footer from "../components/Footer.jsx";

const Plugin = props => (
	<React.Fragment>
		<Search history={props.history} />
		<div className="home-wrapper">
			<InfoCard classModifier="info-card--large info-card--title info-card--column">
				<h1>Plugins</h1>
			</InfoCard>

			<div className="container main">
				<div className="content">
					<p>
						We built these tools using the OpenLaw NZ API. If you build something with our platform, get in
						touch and we&apos;ll list it here.
					</p>

					<h2>OpenLaw NZ Chrome Extension</h2>
					<p>
						Use our free chrome extension to help find cases related to the piece of legislation you’re
						interested in.{" "}
					</p>

					<p>
						Simply view a section of an Act of Parliament on the official NZ Legislation website
						legislation.govt.nz.
					</p>

					<p>
						You’ll see an OpenLaw logo appear just above the section number. Click that to view an overlay
						with cases that discuss the relevant section and a count of how many times each case mentions
						it.
					</p>

					<p>
						Get the chrome extension from the{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://chrome.google.com/webstore/detail/openlaw-nz-legislation-he/abobmobdjckkdplcdjicelmejdmlleof?hl=en-US"
						>
							chrome web store
						</a>
						.
					</p>
				</div>
			</div>
		</div>

		<Footer />
	</React.Fragment>
);

export default Plugin;
