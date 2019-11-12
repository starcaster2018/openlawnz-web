import React from "react";
import { Link } from "react-router-dom";

import Logo from "-!svg-react-loader?name=Logo!../../img/openlaw-logo.svg";
import External from "-!svg-react-loader?name=External!../../img/external.svg";

// login
import { useAuth0 } from "../../js/react-auth0-spa";

const MainNav = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const [checked, setChecked] = React.useState(false);
	const checkHandler = event => {
		if (checked) setChecked(false);
		else setChecked(true);
	};

	return (
		<header role="banner" className="nav-container">
			<div className="nav-items">
				<div className="nav-logo">
					<Link to="/">
						<span className="visuallyhidden">Open Law</span>
						<Logo alt="OpenLaw NZ" className="main-logo" />
					</Link>
				</div>
				<nav className="nav-links" id="menuToggle">
					<input type="checkbox" checked={checked} onChange={() => checkHandler()} />
					<span></span>
					<span></span>
					<span></span>

					<ul id="menu">
						<li onClick={() => checkHandler()}>
							<Link to="/about">About Us</Link>
						</li>
						<li onClick={() => checkHandler()}>
							<Link to="/news">News</Link>
						</li>
						<li onClick={() => checkHandler()}>
							<Link to="/plugins">Plugins</Link>
						</li>
						<li onClick={() => checkHandler()}>
							<Link to="/developers">Developers</Link>
						</li>
						<li onClick={() => checkHandler()}>
							<a href="https://donorbox.org/openlaw-nz-3" target="_blank" rel="noopener noreferrer">
								Support Us{" "}
								<sup>
									<External className="icon icon-small white" alt="External" />
								</sup>
							</a>
						</li>
						{!isAuthenticated && (
							<li
								onClick={() => {
									checkHandler();
									loginWithRedirect({});
								}}
							>
								<span>Log in</span>
							</li>
						)}
						{isAuthenticated && (
							<li
								onClick={() => {
									checkHandler();
									logout();
								}}
							>
								<span>Log out</span>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainNav;
