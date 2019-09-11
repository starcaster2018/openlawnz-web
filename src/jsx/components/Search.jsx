import React, { Component } from "react";
import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";

export default class Search extends Component {
	render() {
		return (
			<div className="search-container">
				<div className="search">
					<div className="search-input">
						<input type="text" className="search-term" placeholder="Search legal cases" />
						<button type="submit" className="search-button">
							<SearchIcon />
						</button>
					</div>
					<button type="submit" className="search-submit-button">
						Search
					</button>
				</div>
			</div>
		);
	}
}
