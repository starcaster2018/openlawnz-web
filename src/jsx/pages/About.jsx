import React, { Component } from "react";
import InfoCard from "../components/InfoCard.jsx";
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import GenericAvatar from "../../img/about-us/avatar.png";
import Andy from "../../img/about-us/andrew-easterbrook.png";
import Will from "../../img/about-us/will.png";
import Tian from "../../img/about-us/tian-bai.png";
import Caio from "../../img/about-us/caio-nunes.png";
import Terence from "../../img/about-us/terence-zhong.png";
import AlexH from "../../img/about-us/alex-huang.png";
import Noel from "../../img/about-us/noel-soong.png";
import AlexC from "../../img/about-us/alex-chan.png";
import Limei from "../../img/about-us/limei.png";
import April from "../../img/about-us/april-liau.png";
import Lina from "../../img/about-us/lina-xie.png";
import David from "../../img/about-us/david-paitai.png";
import Hanbyul from "../../img/about-us/hanbyul-son.png";
import Infra from "../../img/about-us/openlaw-infrastructure.png";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						<h1 className="no-margin">About Us</h1>
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
								services. For an example, see our <Link to="/plugins">chrome extension</Link>.
							</p>
							<h2>Our data</h2>
							<div className="paragraph-with-figure">
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
											<img src={Infra} alt="Infrastructure" title="Click to enlarge the image" />
										</a>
									</div>
								</div>
								<div aria-hidden="true" id="infrastructure" className="modal-window">
									<div>
										<a href="#" title="Close" className="modal-close">
											Close
										</a>
										<img src={Infra} alt="Infrastructure" />
									</div>
								</div>
							</div>
							<h2>Who we are</h2>
							<p>
								OpenLaw NZ is a registered charity. We’re operated by a fantastic group of volunteers,
								helping with code, design, orchestration, data parsing, machine learning and devops.
							</p>
							<p>
								Our volunteers receive real-world experience in react, node.js, python and a range of
								other technologies. If you’d like to get involved, drop us a line <a href="mailto:enquiries@openlaw.nz">here</a>.
							</p>

							<hr className="divider" />

							<h2>Directors</h2>

							<div className="cards-list">
								<div className="card-item">
									<img src={Andy} alt="Andrew Easterbrook, CEO" />
									<strong>Andrew Easterbrook, CEO</strong>
									<p>
										Andrew is a lawyer, and has worked in technology law, civil litigation and
										family law since 2009. He has been a Member of the Auckland District Law Society
										Technology &amp; Law Committee since 2012, and is experienced in web and software
										development. Andrew went to university at Victoria, Wellington, and now lives in
										Whangarei.
									</p>
								</div>
								<div className="card-item">
									<img src={Will} alt="Willian Parry, CTO" />
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
										<img src={GenericAvatar} alt="Blaine Western" />
										<strong>Blaine Western</strong>
									</div>
									<p>
										Lead web developer - Blaine is a programmer and developer with a background in
										the visual arts. He is passionate about developing web technologies that strive
										towards social justice and equality.
									</p>
								</div>

								<div className="card-item-small">
									<div>
										<img src={Tian} alt="Tian Bai" />
										<strong>Tian Bai</strong>
									</div>
									<p>A passionate Software Developer who graduated with a major in Computer Science and Statistics from Victoria University of Wellington.</p>
								</div>
							</div>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={Caio} alt="Caio Nunes" />
										<strong>Caio Nunes</strong>
									</div>
									<p>
										Caio is a Front End Developer who decided to give something back to New
										Zealand&apos;s community after living in Auckland.
									</p>
								</div>

								<div className="card-item-small">
									<div>
										<img src={Terence} alt="Terence Zhong" />
										<strong>Terence Zhong</strong>
									</div>
									<p></p>
								</div>
							</div>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={AlexH} alt="Alex Huang" />
										<strong>Alex Huang</strong>
									</div>
									<p>
										Alex is a web developer with a passion to create cool apps to change
										people&apos;s life.
									</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src={GenericAvatar} alt="Chanil Park" />
										<strong>Chanil Park</strong>
									</div>
									<p>
										Chanil is a developer who has completed a Computer Science Major at Victoria
										University of Wellington. He has volunteered to obtain more development
										experience and to use his skills to help  New Zealand's community.
									</p>
								</div>
							</div>

							<h3>API</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={Noel} alt="Noel Soong" />
										<strong>Noel Soong</strong>
									</div>
									<p>
										Noel is a full stack developer hungry to expand his knowledge for the whole
										technology stack. He helped develop, deploy and maintain the GraphQL api. He has also
										worked on the documentation on Github. Graduated from the University of
										Canterbury and Dev Academy.
									</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src={Hanbyul} alt="Hanbyul Son" />
										<strong>Hanbyul Son</strong>
									</div>
									<p>Hanbyul is a mission-driven developer who always looks for opportunities to gain more in-depth software development knowledge, and turn it into innovative solutions to support communities.</p>
								</div>
							</div>

							<h3>Devops &amp; Orchestration</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={AlexC} alt="Alex Chan" />
										<strong>Alex Chan</strong>
									</div>
									<p>
										Alex has more than 10 years of experience in the IT industry covering software
										development, project management and operational support. He is also a Certified
										Project Manager and ScrumMaster, and hold other qualifications related to data
										analytics and business.
									</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src={Limei} alt="Limei" />
										<strong>Limei</strong>
									</div>
									<p>
										Limei is a skilled DevOps Engineer with in-depth professional experience with
										several major corporations in China. In order to experience different life, she
										came to New Zealand to study, work and live. She lives in Auckland with her
										family.
									</p>
								</div>
							</div>

							<h3>Data</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={GenericAvatar} alt="Ed Haslam" />
										<strong>Ed Haslam</strong>
									</div>
									<p></p>
								</div>
							</div>

							<h3>Design</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={April} alt="April Liau" />
										<strong>April Liau</strong>
									</div>
									<p>
										April is a visual designer who believes in enhancing experiences and making
										impacts through design.
									</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src={Lina} alt="Lina Xie" />
										<strong>Lina Xie</strong>
									</div>
									<p>
										Lina is enthusiastic when it comes to web/graphic design. She likes taking on
										challenges and pursues the production of good results for end users.
									</p>
								</div>
							</div>

							<h3>Finance</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={David} alt="David Paitai" />
										<strong>David Paitai</strong>
									</div>
									<p>
										David is a Community Advisor for Te Tari Taiwhenua (Internal Affairs) providing
										advisory services for whānau, hapū, iwi, communities and community
										organisations. He&apos;s also a volunteer fire fighter, marae trustee and as a
										self-professed accounting geek.
									</p>
								</div>
							</div>
							<h3>Legal</h3>
							<div className="cards-list">
								<div className="card-item-small">
									<div>
										<img src={GenericAvatar} alt="Benedict Stewart" />
										<strong>Benedict Stewart</strong>
									</div>
									<p>
										Benedict leads product &amp; growth strategy at Dacreed, a regtech startup based
										in Auckland. Previously a lawyer at Chapman Tripp, Benedict leverages his deep
										domain expertise to solve customer problems. Benedict holds a BA/LLB(Hons) from
										the University of Auckland.
									</p>
								</div>
								<div className="card-item-small">
									<div>
										<img src={GenericAvatar} alt="Emma Burke" />
										<strong>Emma Burke</strong>
									</div>
									<p>
									Emma has a background in law and botany. She has worked in general practice, primarily in property for two years.
									</p>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default About;
