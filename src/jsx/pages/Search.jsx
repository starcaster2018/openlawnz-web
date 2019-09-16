import React, { Component } from "react";
import memoize from "fast-memoize";
import Footer from "../components/Footer.jsx";
import ReactPaginate from "react-paginate";
import InfoCard from "../components/InfoCard.jsx";
import { Link } from "react-router-dom";

import moment from "moment";

import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";
import Next from "-!svg-react-loader?name=Logo!../../img/next-page.svg";
import Previous from "-!svg-react-loader?name=Logo!../../img/previous-page.svg";

const queryString = require("query-string");
const memoizedFetch = memoize((query, offset, end) =>
	fetch(`https://search.openlaw.nz/cases?search=${query}&start=${offset}&end=${end}`)
);

class SearchPage extends Component {
	constructor() {
		super();
		this.state = {
			currentSearchQuery: null,
			query: null,
			results: [],
			perPage: 10,
			offset: 0,
			currentPage: 0,
			length: 0,
			pageCount: 0,
			searchInProgress: true,
			paginationInProgress: false
		};
		this.handlePageClick = this.handlePageClick.bind(this);
		this.Results = this.Results.bind(this);
		this.Search = this.Search.bind(this);
		this.Pagination = this.Pagination.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	doSearch(query, offset) {
		return memoizedFetch(query, offset, offset + this.state.perPage).then(results => {
			results
				.clone() // Necessary because of memoization of fetch
				.json()
				.then(data => {
					this.setState({
						results: data.results,
						length: parseInt(data.total),
						pageCount: parseInt(data.total) / this.state.perPage,
						paginationInProgress: false,
						searchInProgress: false
					});
				});
		});
	}

	handlePageClick(data) {
		const selected = data.selected;
		const offset = selected * this.state.perPage;

		this.setState({ offset: offset, currentPage: selected, paginationInProgress: true }, () => {
			this.doSearch(this.state.currentSearchQuery, this.state.offset);
		});
	}

	Results() {
		return this.state.results.map((result, index) => {
			return (
				<tr key={index}>
					<td className="caseName">
						<Link to={`/case/${result.caseId}`}>{result.caseName}</Link>
					</td>
					<td>{result.citation === null ? "N / A" : result.citation}</td>
					<td className="caseDate">{moment(result.date).format("DD/MM/YYYY")}</td>
				</tr>
			);
		});
	}

	NoResults() {
		return (
			<tr>
				<td className="caseName">-------</td>
				<td>-------</td>
				<td className="caseDate">-------</td>
			</tr>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.history.replace(`/search?q=${this.state.query}`);
		this.setState({ currentPage: 0, query: "", currentSearchQuery: this.state.query, searchInProgress: true });
		this.doSearch(this.state.query, 0);
	}

	handleChange(e) {
		this.setState({ query: e.target.value });
	}

	componentDidMount() {
		const searchQuery = queryString.parse(location.search);
		this.doSearch(searchQuery.q, this.state.offset);
		if (searchQuery.q) {
			this.setState({
				currentSearchQuery: searchQuery.q
			});
		}
	}

	Search() {
		return (
			<div className="search-container">
				<div className="search">
					<form className="search-input" onSubmit={this.handleSubmit.bind(this)}>
						<div className="input-wrapper">
							<input
								type="text"
								className="search-term"
								placeholder="Search legal cases"
								onChange={this.handleChange}
								value={this.state.query}
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

	Pagination() {
		return (
			<div className="page-number">
				<ReactPaginate
					previousLabel={<Previous />}
					nextLabel={<Next />}
					breakLabel={"..."}
					breakClassName={"break-me"}
					pageCount={this.state.pageCount}
					forcePage={this.state.currentPage}
					marginPagesDisplayed={1}
					pageRangeDisplayed={window && window.innerWidth < 450 ? 3 : 5} // Fewer items provide better view on mobile
					onPageChange={this.handlePageClick}
					containerClassName={"pagination"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"}
				/>
			</div>
		);
	}

	render() {
		if (!this.state.currentSearchQuery) {
			return <p className="loading-text">Loading</p>;
		}
		return (
			<React.Fragment>
				<this.Search />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						{this.state.searchInProgress ? (
							<span>
								SEARCHING RESULTS FOR <b>{`"${this.state.currentSearchQuery.toUpperCase()}"`}</b>
							</span>
						) : (
							<React.Fragment>
								<h1>{this.state.length}</h1>
								<span>
									SEARCH RESULTS FOR <b>{`"${this.state.currentSearchQuery.toUpperCase()}"`}</b>
								</span>
							</React.Fragment>
						)}
					</InfoCard>
					<div className="container">
						{this.state.length >= this.state.perPage && <this.Pagination />}
						<table className="table">
							<thead>
								<tr>
									<th>Case Name</th>
									<th>Citation</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody
								className={
									this.state.paginationInProgress || this.state.searchInProgress
										? "loading"
										: undefined
								}
							>
								{this.state.length === 0 ? <this.NoResults /> : <this.Results />}
							</tbody>
						</table>
						{this.state.length >= this.state.perPage && <this.Pagination />}
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
