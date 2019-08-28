import React, { Component } from "react";
import { Statistic, Header, List, Segment } from "semantic-ui-react";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Header as="h1">Welcome</Header>
				<p>OpenLaw NZ is a new, free legal research platform for New Zealand.</p>
				<Header as="h2">Our Mission</Header>

				<List relaxed="very" size="large">
					<List.Item>
						<List.Icon name="universal access" />
						<List.Content>Improve access to justice and education for all New Zealanders</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="database" />
						<List.Content>Spur innovation with a freely available relational database</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="dollar sign" />
						<List.Content>
							Fund future development by providing services using the OpenLaw NZ platform
						</List.Content>
					</List.Item>
				</List>
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
				</Segment>
			</React.Fragment>
		);
	}
}

export default Home;
