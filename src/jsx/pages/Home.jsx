import React, { Component } from "react";
import Search from "../components/Search.jsx"

import MissionAccessLogo from "-!svg-react-loader!../../img/mission-access.svg";
import MissionInnovationLogo from "-!svg-react-loader!../../img/mission-innovation.svg";
import MissionFundLogo from "-!svg-react-loader!../../img/mission-fund.svg";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="home-wrapper">
					<Search/>
				</div>
				<div className='container'>
					<h2 className="section-title is-text-center">Our Mission</h2>
					<h3 className="section-subtitle is-text-center">OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of their citizens.</h3>

					<div className='horizontal-container horizontal-container--spaced'>
						<div className='horizontal-container__item horizontal-container__item--small'>
							<div className='card'>
								<MissionAccessLogo className='mission-icon' />
								<p>Improve access to justive and education for all New Zealanders</p>
							</div>
						</div>

						<div className='horizontal-container__item horizontal-container__item--small'>
							<div className='card'>
								<MissionInnovationLogo className='mission-icon' />
								<p>Spur innovation with a freely available relational database</p>
							</div>
						</div>

						<div className='horizontal-container__item horizontal-container__item--small'>
							<div className='card'>
								<MissionFundLogo className='mission-icon' />
								<p>Fund future development by providing services using the OpenLaw NZ platform</p>
							</div>
						</div>

					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;


				{/* <Header as="h1">Welcome</Header>
				<p>OpenLaw NZ is a new, free legal research platform for New Zealand.</p>

				<h1 className="is-text-center">Our Mission</h1>
				<p className="is-text-center">OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of their citizens.</p>

				<div className='horizontal-container horizontal-container--spaced'>
					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionAccessLogo className='mission-icon' />
							<p>Improve access to justive and education for all New Zealanders</p>
						</div>
					</div>

					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionInnovationLogo className='mission-icon' />
							<p>Spur innovation with a freely available relational database</p>
						</div>
					</div>

					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionFundLogo className='mission-icon' />
							<p>Fund future development by providing services  using the OpenLaw NZ platform</p>
						</div>
					</div>
				</div>
				<br />
				<p>
					<em>
						OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of
						their citizens.
					</em>
				</p>
				<br />
				<Segment>
					<Statistic.Group widths="three">
						<Statistic>
							<Statistic.Value>17,605</Statistic.Value>
							<Statistic.Label>Cases</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>20,261</Statistic.Value>
							<Statistic.Label>Case-to-Case relationships</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>190,324</Statistic.Value>
							<Statistic.Label>Case-to-Legislation relationships</Statistic.Label>
						</Statistic>
					</Statistic.Group>
				</Segment> */}
