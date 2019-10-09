import React, { Component } from "react";

const DefaultInput = props => (
	<div>
		<input value={props.value} onChange={props.onChange} />
	</div>
);

const JudgementDate = props => (
	<div>
		<label htmlFor="from">From</label>
		<input type="date" value={props.value} id="from" onChange={props.onChange} />
		<label htmlFor="to">To</label>
		<input type="date" value={props.value} id="to" onChange={props.onChange} />
	</div>
);

const Legislation = props => (
	<div>
		<label htmlFor="act">Act</label>
		<input type="text" value={props.value} id="act" onChange={props.onChange} />
		<br />
		<label htmlFor="section">Section</label>
		<input type="text" value={props.value} id="section" onChange={props.onChag} />
	</div>
);

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			types: [
				{ value: "caseTitle", Component: DefaultInput, text: "Case Title" },
				{ value: "court", Component: DefaultInput, text: "Court" },
				{ value: "judge", Component: DefaultInput, text: "Judge" },
				{ value: "judgementDate", Component: JudgementDate, text: "Judgment Date" },
				{ value: "legislation", Component: Legislation, text: "Legislation" },
				{ value: "caseContent", Component: DefaultInput, text: "Case Content" }
			],
			searchFields: [{ id: 0, type: "default", value: null, Component: DefaultInput }],
			currentSearchQuery: ""
		};

		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	onInputChange() {}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.currentSearchQuery === "") {
			alert("Please enter a search term");
		} else {
			this.props.history.replace(`/search?q=${this.state.currentSearchQuery}`);
		}
	}

	handleChange(e) {
		this.setState({ [currentSearchQuery]: e.target.value });
	}

	handleAdd() {
		const fieldValues = [...searchField];
		fieldValues.push({});
		this.setState({ fieldValues });
	}

	handleSelectChange(value, id) {
		const type = this.state.types.find(t => t.value === value);
		this.setState({
			searchFields: this.state.searchFields.map(sf => {
				if (sf.id === id) {
					return {
						id,
						Component: type.Component,
						value: null,
						type: type.value
					};
				}
				return sf;
			})
		});
	}

	render() {
		return (
			<div className="search-container">
				<div className="search">
					<form className="search-input" onSubmit={this.handleSubmit.bind(this)}>
						<div className="input-wrapper">
							{this.state.searchFields.map(({ type, id, Component }) => (
								<React.Fragment>
									<select onChange={ev => this.handleSelectChange(ev.target.value, id)}>
										<option value="">Any Field</option>
										{console.log(this.state.types)}
										{this.state.types.map(type => (
											<option value={type.value}>{type.text}</option>
										))}
									</select>

									{<Component />}
								</React.Fragment>
							))}
							{/* <select>
								<option value="">Any Field</option>
								<option value="Case Title">Case Title</option>
								<option value="Court">Court</option>
								<option value="Judge">Judge</option>
								<option value="Legislation">Legislation</option>
								<option value="Judgment Date">Judgment Date</option>
								<option value="Case Content">Case Content</option>
							</select>
							<input
								type="text"
								className="search-term"
								placeholder="Search legal cases"
								onChange={this.handleChange.bind(this)}
								value={this.state.currentSearchQuery}
							/> */}
							<button type="submit" className="search-button">
								{/* <SearchIcon /> */}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
