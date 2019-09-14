import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "-!svg-react-loader?name=Logo!../../img/openlaw-logo.svg";

class MainNav extends Component {
	render() {
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
								<Link to="/plugins">Plugins</Link>
							</li>
							<li>
								<Link to="/contact">Developers</Link>
							</li>
							<li>
								<a href="https://donorbox.org/openlaw-nz-3" target="_blank" rel="noopener noreferrer">
									Support Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MainNav;
