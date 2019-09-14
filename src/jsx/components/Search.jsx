import React, { Component } from "react";
import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";
import { Link } from "react-router-dom";

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			currentSearchQuery: ""
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.props);
		this.props.history.replace(`/search?q=${this.state.currentSearchQuery}`);
	}

	handleChange(e) {
		this.setState({ currentSearchQuery: e.target.value });
	}

	render() {
		return (
			<div className="search-container">
				<div className="search">
					<form className="search-input" onSubmit={this.handleSubmit.bind(this)}>
						<div className="input-wrapper">
							<input
								type="text"
								className="search-term"
								placeholder="Search legal cases"
								onChange={this.handleChange.bind(this)}
								value={this.state.currentSearchQuery}
							/>
							<button type="submit" className="search-button">
								<SearchIcon />
							</button>
						</div>
						<button type="submit" className="search-submit-button">
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}
