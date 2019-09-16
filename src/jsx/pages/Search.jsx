import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import ReactPaginate from "react-paginate";
import InfoCard from "../components/InfoCard.jsx";
import { Link } from "react-router-dom";

import moment from "moment";

import SearchIcon from "-!svg-react-loader?name=Logo!../../img/search-icon.svg";
import Next from "-!svg-react-loader?name=Logo!../../img/next-page.svg";
import Previous from "-!svg-react-loader?name=Logo!../../img/previous-page.svg";

const queryString = require("query-string");

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
			paginationInProgress: false
		};
		this.handlePageClick = this.handlePageClick.bind(this);
		this.Results = this.Results.bind(this);
		this.Search = this.Search.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	doSearch(query, offset) {
		return fetch(
			`https://search.openlaw.nz/cases?search=${query}&start=${offset}&end=${offset + this.state.perPage}`
		).then(results => {
			results.json().then(data => {
				this.setState({
					results: data.results,
					length: parseInt(data.total),
					pageCount: parseInt(data.total) / this.state.perPage,
					paginationInProgress: false
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
		this.doSearch(this.state.query, 0);
		this.setState({ currentPage: 0, query: "", currentSearchQuery: this.state.query });
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

	render() {
		if (!this.state.currentSearchQuery) {
			return <p className="loading-text">Loading</p>;
		}
		return (
			<React.Fragment>
				<this.Search />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						<h1>{this.state.length}</h1>
						<span>
							SEARCH RESULTS FOR <b>{`"${this.state.currentSearchQuery.toUpperCase()}"`}</b>
						</span>
					</InfoCard>
					<div className="results-wrapper">
						{this.state.length >= this.state.perPage && (
							<div className="page-number">
								<ReactPaginate
									previousLabel={<Previous />}
									nextLabel={<Next />}
									breakLabel={"..."}
									breakClassName={"break-me"}
									pageCount={this.state.pageCount}
									forcePage={this.state.currentPage}
									marginPagesDisplayed={1}
									pageRangeDisplayed={5}
									onPageChange={this.handlePageClick}
									containerClassName={"pagination"}
									subContainerClassName={"pages pagination"}
									activeClassName={"active"}
								/>
							</div>
						)}
						<table className="table">
							<thead>
								<tr>
									<th>Case Name</th>
									<th>Citation</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody className={this.state.paginationInProgress && "loading"}>
								{this.state.length === 0 ? <this.NoResults /> : <this.Results />}
							</tbody>
						</table>
						{this.state.length >= this.state.perPage && (
							<div className="page-number">
								<ReactPaginate
									previousLabel={<Previous />}
									nextLabel={<Next />}
									breakLabel={"..."}
									breakClassName={"break-me"}
									pageCount={this.state.pageCount}
									forcePage={this.state.currentPage}
									marginPagesDisplayed={2}
									pageRangeDisplayed={5}
									onPageChange={this.handlePageClick}
									containerClassName={"pagination"}
									subContainerClassName={"pages pagination"}
									activeClassName={"active"}
								/>
							</div>
						)}
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
