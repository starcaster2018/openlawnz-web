import React, { Component } from "react";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import MainNav from "./components/MainNav.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import SingleCase from "./pages/SingleCase.jsx";
import Plugins from "./pages/Plugins.jsx";
import Developers from "./pages/Developers.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Container, Header, Segment } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../scss/App.scss";

import Logo from "-!svg-react-loader?name=Logo!../img/openlaw-logo.svg";

class App extends Component {
	render() {
		const MainNavWithRouter = withRouter(props => <MainNav {...props} />);

		return (
			<Router>
				<Container>
					<div className="main-header">
						<Header as="h1" icon textAlign="center">
							<Logo alt="OpenLaw NZ" className="main-logo" />
							<Header.Subheader>New Zealand case law and legislation metadata platform</Header.Subheader>
						</Header>
					</div>

					<MainNavWithRouter />

					<Segment attached="bottom" padded="very">
						<Route exact path="/" component={Home} />
						<Route exact path="/search" component={Search} />
						<Route exact path="/case/:id" component={SingleCase} />
						<Route exact path="/developers" component={Developers} />
						<Route exact path="/plugin" component={Plugins} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/about" component={About} />
					</Segment>
					<footer>
						<p>
							&copy; 2018 OpenLaw NZ |{" "}
							<a href="https://www.register.charities.govt.nz/Charity/CC55967" rel="noopener noreferrer">
								Registered NZ Charity
							</a>
						</p>
					</footer>
				</Container>
			</Router>
		);
	}
}

export default hot(module)(App);
