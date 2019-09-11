import React, { Component } from "react";
import { Header, Input, Icon, Table, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

const queryString = require("query-string");

class Search extends Component {
	constructor() {
		super();
		this.state = {
			currentSearchQuery: "",
			results: null
		};
	}

	doSearch(query) {
		return fetch(API_URL + "/search?q=" + query).then(results => {
			results.json().then(data => {
				this.setState({
					results: data
				});
			});
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push({
			search: "?q=" + this.state.currentSearchQuery
		});

		this.doSearch(this.state.currentSearchQuery);
	}

	handleChange(e) {
		this.setState({ currentSearchQuery: e.target.value });
	}

	componentDidMount() {
		const searchQuery = queryString.parse(location.search);
		if (searchQuery.q) {
			this.setState({
				currentSearchQuery: searchQuery.q
			});

			this.doSearch(searchQuery.q);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header as="h2">Search</Header>

				<Form onSubmit={this.handleSubmit.bind(this)}>
					<Input
						fluid
						focus
						value={this.state.currentSearchQuery}
						onChange={this.handleChange.bind(this)}
						icon={<Icon name="search" inverted color="teal" circular link />}
						placeholder="Search cases..."
					/>
				</Form>
				{this.state.results && this.state.results.length == 0 && (
					<Message>
						<p>No results found.</p>
					</Message>
				)}
				{this.state.results && this.state.results.length > 0 && (
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Case Name</Table.HeaderCell>
								<Table.HeaderCell>Date</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{this.state.results.map((result, i) => (
								<Table.Row key={`result-${i}`}>
									<Table.Cell>
										<Link to={`/case/${result.id}`}>{result.case_name}</Link>
									</Table.Cell>
									<Table.Cell>{result.case_date}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				)}
			</React.Fragment>
		);
	}
}

export default Search;
