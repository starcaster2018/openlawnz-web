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
			pageResult: []
		};
	}
	getResultsByPage(number) {
		if (resultsData.results.length <= 9) {
			this.setState({ pageResult: resultsData.results });
		} else {
			this.setState({
				pageResult: resultsData.results.slice((number - 1) * 9, number * 9, () => {})
			});
		}
	}
	componentDidMount() {
		this.getResultsByPage(1);
	}
	handleClick(number) {
		this.getResultsByPage(number);
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
