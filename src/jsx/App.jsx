import React, { Component } from "react";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainNav from "./components/MainNav.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import News from "./pages/News.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import SingleCase from "./pages/SingleCase.jsx";
import Plugins from "./pages/Plugins.jsx";
import Developers from "./pages/Developers.jsx";
import About from "./pages/About.jsx";
import NewsContext from "./NewsContext.jsx";

import "normalize.css";
import "../scss/App.scss";

const RouteWithTransition = ({ children }) => (
	<Route
		render={({ location }) => (
			<TransitionGroup>
				<CSSTransition key={location.pathname} classNames="route-transition" timeout={300}>
					<div>{children}</div>
				</CSSTransition>
			</TransitionGroup>
		)}
	/>
);

const MainNavWithRouter = withRouter(props => <MainNav {...props} />);

class App extends Component {
	constructor(props) {
		super(props);
		this.updateNewsData = this.updateNewsData.bind(this);

		this.state = {
			news: null
		};
	}

	updateNewsData(news) {
		this.setState({ news });
	}

	render() {
		return (
			<Router>
				<div>
					<Helmet>
						<meta name="openlaw" content="open law of new zealand" />
					</Helmet>
					<React.Fragment>
						<MainNavWithRouter />
						<div className="content-wrapper">
							<RouteWithTransition>
								<NewsContext.Provider value={{ data: this.state.news, updateData: this.updateNewsData }}>
									<Route exact path="/" component={Home} />
									<Route exact path="/news" component={News} />
									<Route exact path="/news/:id" component={SingleNews} />
								</NewsContext.Provider>
								<Route exact path="/search" component={Search} />
								<Route exact path="/case/:id" component={SingleCase} />
								<Route exact path="/developers" component={Developers} />
								<Route exact path="/plugins" component={Plugins} />
								<Route exact path="/about" component={About} />
							</RouteWithTransition>
						</div>
					</React.Fragment>
				</div>
			</Router>
		);
	}
}

export default hot(module)(App);
