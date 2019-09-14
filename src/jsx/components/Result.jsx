import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import InfoCard from "../components/InfoCard.jsx";
import { Link } from "react-router-dom";

import moment from "moment";

import Next from "-!svg-react-loader?name=Logo!../../img/next-page.svg";
import Previous from "-!svg-react-loader?name=Logo!../../img/previous-page.svg";

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			perPage: 10,
			offset: 0,
			currentPage: 1,
			query: "",
			length: 0,
			pageCount: 0
		};
		this.handlePageClick = this.handlePageClick.bind(this);
		this.Results = this.Results.bind(this);
	}

	doSearch(query, offset) {
		return fetch(
			`http://search.openlaw.nz/cases?search=${query}&start=${offset}&end=${offset + this.state.perPage}`
		).then(results => {
			results.json().then(data => {
				this.setState({
					results: data.results,
					length: parseInt(data.total),
					pageCount: parseInt(data.total) / this.state.perPage
				});
			});
		});
	}

	componentDidMount() {
		this.doSearch(this.props.query, this.state.offset);
		this.setState({
			query: this.props.query
		});
	}

	handlePageClick(data) {
		const selected = data.selected;
		const offset = selected * this.state.perPage;

		this.setState({ offset: offset, currentPage: selected }, () => {
			this.doSearch(this.state.query, this.state.offset);
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

	render() {
		return (
			<React.Fragment>
				<InfoCard classModifier="info-card--large info-card--title info-card--column">
					<h1>{this.state.length}</h1>
					<span>
						SEARCH RESULTS FOR <b>{`"${this.state.query.toUpperCase()}"`}</b>
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
								marginPagesDisplayed={2}
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
						<tbody>{this.state.length === 0 ? <this.NoResults /> : <this.Results />}</tbody>
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
			</React.Fragment>
		);
	}
}
