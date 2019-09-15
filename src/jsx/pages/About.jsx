import React, { Component } from "react";
import InfoCard from "../components/InfoCard.jsx";
import Search from "../components/Search.jsx";
import Andy from "../../img/andy.jpg";
import Will from "../../img/will.jpg";
import Infra from "../../img/about-us/openlaw-infrastructure.png";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						<h1>About Us</h1>
					</InfoCard>

					<div className="container main">
						<div className="content">
							<h2>What we do</h2>
							<p>
								OpenLaw NZ is an open-source legal data platform. Our goal is to improve the
								accessibility of case law and other legal information in New Zealand. We want to make it
								easier for all New Zealanders to understand law.
							</p>
							<p>
								You can use our search to find case law, and navigate between related information. You
								can also use our plugins (or write your own) to aid your research.
							</p>
							<p>
								You can use our API to build case law intelligence into your own applications and
								services. For an example, see our chrome extension.
							</p>
							<h2>Our data</h2>
							<p className="paragraph-with-figure">
								The data we have currently comprises High Court, Court of Appeal and Supreme Court
								decisions from present day back to approximately 2004 (with some exceptions, for example
								some suppressed decisions and other judgments that have not been published).
								<br />
								<br />
								We developed software that extracts data from cases. We extract structured data,
								including references to other cases in our database, and to any Acts of Parliament
								(current or repealed). We use that software to power our search and API.{" "}
								<div className="figure-container">
									<div className="interior">
										<a className="btn" href="#infrastructure">
											<img src={Infra} />
										</a>
									</div>
								</div>
								<div id="infrastructure" className="modal-window">
									<div>
										<a href="#" title="Close" className="modal-close">
											Close
										</a>
										<img src={Infra} />
									</div>
								</div>
							</p>
							<h2>Who we are</h2>
							<p>
								OpenLaw NZ <i></i>s a registered charity. We’re operated by a fantastic group of
								volunteers, helping with code, design, orchestration, data parsing, machine learning and
								devops.
							</p>
							<p>
								Our volunteers receive real-world experience in react, node.js, python and a range of
								other technologies. If you’d like to get involved, drop us a line here.
							</p>

							<hr className="divider" />

							<h2>Directors</h2>

							<div className="cards-list">
								<div className="card-item">
									<img src="" />
									<strong>Andrew Easterbrook, CEO</strong>
									<p>
										Andrew is a lawyer, and has worked in technology law, civil litigation and
										family law since 2009. He has been a Member of the Auckland District Law Society
										Technology & Law Committee since 2012, and is experienced in web and software
										development. Andrew went to university at Victoria, Wellington, and now lives in
										Whangarei.
									</p>
								</div>
								<div className="card-item">
									<img src="" />
									<strong>Willian Parry, CTO</strong>
									<p>
										William brings 15 years of tech experience across enterprise, advertising and
										small businesses including 8 years working with open data in projects and
										hackathons. He has run community coding classes and is passionate about
										empowering disadvantaged people with technology. William went to university at
										Victoria, Wellington, and now lives in Sydney.
									</p>
								</div>
							</div>

							<h2>Current Volunteers</h2>

							<h3>Web Development</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src="" />
										<strong>Blaine Western</strong>
									</div>
									<p>Lead web developer.</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src="" />
										<strong>Tian Bai</strong>
									</div>
									<p></p>
								</div>
								<div className="break"></div>
								<div className="card-item-small">
									<div>
										<img src="" />
										<strong>Tian Bai</strong>
									</div>
									<p></p>
								</div>
								<div className="card-item-small">
									<div>
										<img src="" />
										<strong>Tian Bai</strong>
									</div>
									<p></p>
								</div>
								<div className="break"></div>
								<div className="card-item-small">
									<div>
										<img src="" />
										<strong>Tian Bai</strong>
									</div>
									<p></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default About;
