import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import Logo from "-!svg-react-loader?name=Logo!../../img/openlaw-logo.svg";

class App extends Component {
	render() {
		const { pathname } = this.props.location;

		return (
			<div className="nav-container">
				<div className="nav-items">
					<div className="nav-logo">
						<Link to="/">
							<Logo alt="OpenLaw NZ" className="main-logo" />
						</Link>
					</div>
					<div className="nav-links">
						<ul>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<Link to="/news">News</Link>
							</li>
							<li>
								<Link to="/spotlight">Spotlight</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/volunteers">Volunteers</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
