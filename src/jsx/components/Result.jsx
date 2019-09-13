import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import InfoCard from "../components/InfoCard.jsx";
import InfoCardUnit from "../components/InfoCardUnit.jsx";

import Next from "-!svg-react-loader?name=Logo!../../img/next-page.svg";
import Previous from "-!svg-react-loader?name=Logo!../../img/previous-page.svg";

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			perPage: 10,
			offset: 0,
			page: 1,
			query: "",
			length: 0,
			pageCount: 0
		};
	}

	doSearch(query, offset) {
		return fetch(
			`http://search.openlaw.nz/cases?search=${query}&start=${offset}&end=${offset + this.state.perPage}`
		).then(results => {
			results.json().then(data => {
				console.log(data);
				this.setState({
					results: data.results,
					length: parseInt(data.total),
					pageCount: parseInt(data.total) / this.state.perPage
				});
			});
		});
	}

	componentDidMount() {
		this.doSearch(this.props.query);
		this.setState({
			query: this.props.query
		});
	}

	handlePageClick(data) {
		const selected = data.selected;
		const offset = Math.ceil(selected * this.state.perPage);

		this.setState({ offset: offset }, () => {
			this.doSearch(this.state.query, offset);
		});
	}

	Results(props) {
		props.results.map(result => {
			return (
				<tr key={result.caseId}>
					<td className="caseName">{result.case_name}</td>
					<td>{result.citation}</td>
					<td calssName="caseDate">{result.case_date}</td>
				</tr>
			);
		});
	}

	NoResults() {
		return (
			<tr>
				<td className="caseName">-------</td>
				<td>-------</td>
				<td calssName="caseDate">-------</td>
			</tr>
		);
	}

	render() {
		console.log(this.state.results);

		return (
			<React.Fragment>
				<InfoCard>
						<InfoCardUnit one={`"${this.state.query}"`} two="SEARCH TERM" />
						<div className="border" />
						<InfoCardUnit one={this.state.length} two="SEARCH RESULTS" />
				</InfoCard>
				<div>
					{this.state.length >= this.state.perPage && (
						<div className="page-number">
							<ReactPaginate
								previousLabel={<Previous />}
								nextLabel={<Next />}
								breakLabel={"..."}
								breakClassName={"break-me"}
								pageCount={this.state.pageCount}
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
						<tbody>
							{this.state.length === 0 ? (
								<this.NoResults />
							) : (
								<this.Results results={this.state.results} />
							)}
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

// export default class Result extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			results: [],
// 			perPage: 10,
// 			offset: 0,
// 			page: 1,
// 			query: "",
// 			length: 0,
// 			pageCount: 0
// 		};
// 	}

// 	doSearch(query, offset) {
// 		return fetch(
// 			`http://search.openlaw.nz/cases?search=${query}&start=${offset}&end=${offset + this.state.perPage}`
// 		).then(results => {
// 			results.json().then(data => {
// 				console.log(data);
// 				this.setState({
// 					results: data.results,
// 					length: parseInt(data.total),
// 					pageCount: parseInt(data.total) / this.state.perPage
// 				});
// 			});
// 		});
// 	}

// 	componentDidMount() {
// 		this.doSearch(this.props.query);
// 		this.setState({
// 			query: this.props.query
// 		});
// 	}

// 	handlePageClick(data) {
// 		const selected = data.selected;
// 		const offset = Math.ceil(selected * this.state.perPage);

// 		this.setState({ offset: offset }, () => {
// 			this.doSearch(this.state.query, offset);
// 		});
// 	}

// 	render() {
// 		console.log(this.state.results);

// 		return (
// 			<div>
// 				{this.state.length >= this.state.perPage && (
// 					<div className="page-number">
// 						<ReactPaginate
// 							previousLabel={<Previous />}
// 							nextLabel={<Next />}
// 							breakLabel={"..."}
// 							breakClassName={"break-me"}
// 							pageCount={this.state.pageCount}
// 							marginPagesDisplayed={2}
// 							pageRangeDisplayed={5}
// 							onPageChange={this.handlePageClick}
// 							containerClassName={"pagination"}
// 							subContainerClassName={"pages pagination"}
// 							activeClassName={"active"}
// 						/>
// 					</div>
// 				)}
// 				<table className="table">
// 					<thead>
// 						<tr>
// 							<th>Case Name</th>
// 							<th>Citation</th>
// 							<th>Date</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{ if (this.state.length === 0) {
// 								<tr>
// 									<td className="caseName">---</td>
// 									<td>---</td>
// 									<td calssName="caseDate">---</td>
// 								</tr>
// 						} else {
// 						this.state.results.map(result => {
// 							return (
// 								<tr key={result.caseId}>
// 									<td className="caseName">{result.case_name}</td>
// 									<td>{result.citation}</td>
// 									<td calssName="caseDate">{result.case_date}</td>
// 								</tr>
// 							);
// 						})}
// 						}
// 					</tbody>
// 				</table>
// 			</div>
// 		);
// 	}
// }
