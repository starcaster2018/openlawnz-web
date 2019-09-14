import React, { Component } from "react";
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import Result from "../components/Result.jsx";

const queryString = require("query-string");

class SearchPage extends Component {
	constructor() {
		super();
		this.state = {
			currentSearchQuery: null
		};
	}

	componentDidMount() {
		const searchQuery = queryString.parse(location.search);
		if (searchQuery.q) {
			this.setState({
				currentSearchQuery: searchQuery.q
			});
		}
	}

	render() {
		if (!this.state.currentSearchQuery) {
			return <p className="loading-text">Loading</p>;
		}
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<Result query={this.state.currentSearchQuery} />
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
