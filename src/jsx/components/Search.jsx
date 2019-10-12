import React, { Component } from "react";
import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			currentSearchQuery: ""
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.currentSearchQuery === "") {
			alert("Please enter a search term");
		} else {
			this.props.history.replace(`/search?q=${this.state.currentSearchQuery}`);
		}
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
							<label className="search-label" htmlFor="searchTerm">Search legal cases</label>
							<input
								id="searchTerm"
								type="text"
								className="search-term"
								placeholder="Search legal cases"
								onChange={this.handleChange.bind(this)}
								value={this.state.currentSearchQuery}
							/>
							<button type="submit" className="search-button" title="Search">
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
