import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

class App extends Component {
	render() {
		const { pathname } = this.props.location;

		return (
			<Menu attached="top" stackable>
				<Menu.Item active={pathname === "/"} as={Link} to="/">
					Home
				</Menu.Item>
				<Menu.Item active={pathname === "/developers"} as={Link} to="/developers">
					Developers
				</Menu.Item>
				<Menu.Item active={pathname === "/search" || pathname.includes("/case")} as={Link} to="/search">
					Search
				</Menu.Item>

				<Menu.Item active={pathname === "/plugin"} as={Link} to="/plugin">
					Plugins
				</Menu.Item>
				<Menu.Item active={pathname === "/about"} as={Link} to="/about">
					About us
				</Menu.Item>
				<Menu.Item active={pathname === "/contact"} as={Link} to="/contact">
					Contact
				</Menu.Item>

				<Menu.Item onClick={() => (window.location.href = "https://github.com/openlawnz")}>
					Github &nbsp;
					<Icon name="external" fitted />
				</Menu.Item>
			</Menu>
		);
	}
}

export default App;
