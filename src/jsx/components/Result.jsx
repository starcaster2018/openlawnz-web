import React, { Component } from "react";
import resultsData from "../../../data/results";

const totalPage = Math.ceil(resultsData.results.length / 9);
console.log(totalPage);
var pageNumber = [];
for (let i = 1; i <= totalPage; i++) {
	pageNumber.push(i);
}

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			pageResult: []
		};
	}
	getResultsByPage(number) {
		if (resultsData.results.length <= 9) {
			this.setState({ pageResult: resultsData.results });
		} else {
			this.setState({ pageResult: resultsData.results.slice((number - 1) * 9, number * 9) });
		}
	}

	handleClick(number) {
		this.setState({ page: number }, () => {});
		this.getResultsByPage(this.state.page);
	}

	render() {
		console.log(this.state);

		return (
			<div>
				<div>
					{pageNumber.map(number => {
						return (
							<button
								className="pageNumber"
								value={number}
								key={number}
								onClick={() => this.handleClick(number)}
							>
								{number}
							</button>
						);
					})}
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
						{this.state.pageResult.map(result => {
							return (
								<tr>
									<td>{result.case_name}</td>
									<td>{result.citation}</td>
									<td>{result.case_date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
