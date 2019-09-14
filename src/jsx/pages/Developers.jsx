import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class Developers extends Component {
	render() {
		return (
			<React.Fragment>
				<Header as="h2">Developers</Header>

				<p>
					At its core, OpenLaw NZ is a series of data services built for developers such as yourself to use.
				</p>
				<p>
					While our API and search engine is free for non-profit &amp; open-source projects, commercial usage
					requires a separate license.
				</p>

				<Header as="h3">API</Header>
				<p>
					By using our API you agree to the{" "}
					<a href="https://s3-ap-southeast-2.amazonaws.com/assets.openlaw.nz/apiterms.pdf">
						API Terms of Use
					</a>
				</p>
				<p>
					Explore our{" "}
					<a href="https://api2.openlaw.nz/graphiql">
						GraphQL API &nbsp;
						<Icon name="external" fitted />
					</a>
				</p>

				<p>
					Check out our{" "}
					<a href="https://github.com/openlawnz">
						Github repositories &nbsp;
						<Icon name="external" fitted />
					</a>
				</p>

				<p>
					If you'd like to volunteer and join our Slack channel please{" "}
					<a href="mailto:william@openlaw.nz">email William</a>.
				</p>
			</React.Fragment>
		);
	}
}

export default Developers;
