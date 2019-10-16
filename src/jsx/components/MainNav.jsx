import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "-!svg-react-loader?name=Logo!../../img/openlaw-logo.svg";
import External from "-!svg-react-loader?name=External!../../img/external.svg";

class MainNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
		this.checkBoxInput = React.createRef();
		this.checkHandler = this.checkHandler.bind(this);
	}

	checkHandler() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		return (
			<div className="nav-container" id="nav-container">
				<div className="nav-items">
					<div className="nav-logo">
						<Link to="/">
							<Logo alt="OpenLaw NZ" className="main-logo" />
						</Link>
					</div>
					<div className="nav-links" id="menuToggle">
						<input type="checkbox" checked={this.state.checked} onChange={() => this.checkHandler()} />
						<span></span>
						<span></span>
						<span></span>

						<ul id="menu">
							<li onClick={() => this.checkHandler()}>
								<Link to="/about">About Us</Link>
							</li>
							<li onClick={() => this.checkHandler()}>
								<Link to="/news">News</Link>
							</li>
							<li onClick={() => this.checkHandler()}>
								<Link to="/plugins">Plugins</Link>
							</li>
							<li onClick={() => this.checkHandler()}>
								<Link to="/developers">Developers</Link>
							</li>
							<li onClick={() => this.checkHandler()}>
								<a href="https://donorbox.org/openlaw-nz-3" target="_blank" rel="noopener noreferrer">
									Support Us{" "}
									<sup>
										<External className="icon icon-small white" alt="External" />
									</sup>
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
