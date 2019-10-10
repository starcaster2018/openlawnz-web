import React, { Component } from "react";

const DefaultInput = ({ value, id, onChange }) => (
	<div>
		<input id={`default-${id}`} value={value} onChange={ev => onChange(id, ev.target.value)} />
	</div>
);

const JudgementDate = ({ value, id, onChange }) => (
	<div>
		<label htmlFor={`from-${id}`}>From</label>
		<input
			type="date"
			value={value.from || ""}
			id={`from-${id}`}
			onChange={ev => onChange(id, ev.target.value, "from")}
		/>
		<label htmlFor={`to-${id}`}>To</label>
		<input
			type="date"
			value={value.to || ""}
			id={`to-${id}`}
			onChange={ev => onChange(id, ev.target.value, "to")}
		/>
	</div>
);

const Legislation = ({ value, id, onChange }) => (
	<div>
		<label htmlFor={`act-${id}`}>Act</label>
		<input
			type="text"
			value={value.act || ""}
			id={`act-${id}`}
			onChange={ev => onChange(id, ev.target.value, "act")}
		/>
		<br />
		<label htmlFor={`section-${id}`}>Section</label>
		<input
			type="text"
			value={value.section || ""}
			id={`section-${id}`}
			onChange={ev => onChange(id, ev.target.value, "section")}
		/>
	</div>
);

const defaultSearchFieldFormat = { id: 0, type: "default", value: "", Component: DefaultInput };

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			types: [
				{ value: "caseTitle", Component: DefaultInput, text: "Case Title" },
				{ value: "court", Component: DefaultInput, text: "Court" },
				{ value: "judge", Component: DefaultInput, text: "Judge" },
				{ value: "judgementDate", Component: JudgementDate, text: "Judgment Date" },
				{ value: "legislation", Component: Legislation, text: "Legislation" },
				{ value: "caseContent", Component: DefaultInput, text: "Case Content" }
			],
			searchFields: [defaultSearchFieldFormat],
			currentSearchQuery: ""
		};

		this.onFieldSelectChange = this.onFieldSelectChange.bind(this);
		this.onFieldValueChange = this.onFieldValueChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onInputChange() {}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	onFieldValueChange(id, value, valueInObject) {
		this.setState({
			searchFields: this.state.searchFields.map(sf => {
				if (sf.id !== id) return sf;

				let newValue = value;

				if (valueInObject) {
					newValue = { ...sf.value };
					newValue[valueInObject] = value;
				}

				return {
					...sf,
					value: newValue
				};
			})
		});
	}

	onAdd() {
		this.setState(({ searchFields }) => ({
			searchFields: [...searchFields, { ...defaultSearchFieldFormat, id: searchFields.length }]
		}));
	}

	onFieldSelectChange(value, id) {
		const type = this.state.types.find(t => t.value === value);
		this.setState({
			searchFields: this.state.searchFields.map(sf =>
				sf.id === id
					? {
							...sf,
							Component: type.Component,
							value: "",
							type: type.value
					  }
					: sf
			)
		});
	}

	render() {
		return (
			<div className="search-container">
				<div className="search">
					<form className="search-input" onSubmit={this.handleSubmit.bind(this)}>
						<div className="input-wrapper">
							{this.state.searchFields.map(({ type, id, value, Component }) => (
								<React.Fragment key={id}>
									<select onChange={ev => this.onFieldSelectChange(ev.target.value, id)}>
										<option value="">Any Field</option>

										{this.state.types.map(type => (
											<option key={`searchField${id}-${type.value}`} value={type.value}>
												{type.text}
											</option>
										))}
									</select>

									<Component id={id} value={value} onChange={this.onFieldValueChange} />
								</React.Fragment>
							))}
							<button type="button" onClick={this.onAdd}>
								+
							</button>
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
								onChange={this.onFieldValueChange.bind(this)}
								value={this.state.currentSearchQuery}
							/> */}
							<button type="submit" className="search-button">
								Search
								{/* <SearchIcon /> */}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
