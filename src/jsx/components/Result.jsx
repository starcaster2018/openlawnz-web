import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			perPage: 25,
			offset: 0,
			page: 1,
            query: "",
            length: 0
		};
	}

	doSearch(query) {
		return fetch(API_URL + "/search?q=" + query + `&p=${this.state.page}`).then(results => {
			results.json().then(data => {
				this.setState({
                    results: data,
                    length: data.length
				});
			});
		});
	}

	componentDidMount() {
		this.doSearch(this.props.query);
		this.setState({ query: this.props.query });
	}

	handlePageClick(data) {
		const selected = data.selected;
		const offset = Math.ceil(selected * this.state.perPage);

		this.setState({ offset: offset }, () => {
			this.doSearch(this.state.query);
		});
	}

	render() {
		console.log(this.state);

		return (
			<div>
				<div>
					<ReactPaginate
						previousLabel={"previous"}
						nextLabel={"next"}
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
				<table className="table">
					<thead>
						<tr>
							<th>Case Name</th>
							<th>Citation</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{this.state.results.map(result => {
							return (
								<tr>
									<td className="caseName">{result.case_name}</td>
									<td>{result.citation}</td>
									<td calssName="caseDate">{result.case_date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
