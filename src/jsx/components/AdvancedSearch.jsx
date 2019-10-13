import React, { Component } from "react";

const DefaultInput = ({ value, id, onChange }) => (
	<div>
		<input id={`simple-${id}`} value={value} onChange={ev => onChange(id, ev.target.value)} />
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

const typesOfFields = [
	{ value: "any", Component: DefaultInput, text: "Any Field" },
	{ value: "caseTitle", Component: DefaultInput, text: "Case Title" },
	{ value: "court", Component: DefaultInput, text: "Court" },
	{ value: "judge", Component: DefaultInput, text: "Judge" },
	{ value: "judgementDate", Component: JudgementDate, text: "Judgment Date" },
	{ value: "legislation", Component: Legislation, text: "Legislation" },
	{ value: "caseContent", Component: DefaultInput, text: "Case Content" }
];

class AdvancedSearch extends Component {
	constructor(props) {
		super(props);
		this.defaultSearchFieldFormat = { id: 0, value: "", type: "any", Component: DefaultInput };
		this.state = { searchFields: props.searchFields || [this.defaultSearchFieldFormat] };

		this.onFieldSelectChange = this.onFieldSelectChange.bind(this);
		this.onFieldValueChange = this.onFieldValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onAddField = this.onAddField.bind(this);
		this.onRemoveField = this.onRemoveField.bind(this);
	}

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

	onAddField() {
		this.setState(({ searchFields }) => ({
			searchFields: [
				...searchFields,
				{ ...this.defaultSearchFieldFormat, id: searchFields[searchFields.length - 1].id + 1 }
			]
		}));
	}

	onRemoveField(id) {
		this.setState({
			searchFields: this.state.searchFields.filter(item => item.id !== id)
		});
	}

	onFieldSelectChange(value, id) {
		const type = this.props.typesOfFields.find(t => t.value === value);
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
					<form className="search-input" onSubmit={this.handleSubmit}>
						<div className="input-wrapper">
							{this.state.searchFields.map(({ type, id, value, Component }, index) => (
								<React.Fragment key={id}>
									<select onChange={ev => this.onFieldSelectChange(ev.target.value, id)}>
										{this.props.typesOfFields.map(type => (
											<option key={`searchField${id}-${type.value}`} value={type.value}>
												{type.text}
											</option>
										))}
									</select>

									<Component id={id} value={value} onChange={this.onFieldValueChange} />
									<div>
										<button
											type="button"
											onClick={
												index === 0
													? this.onAddField
													: () => {
															this.onRemoveField(id);
													  }
											}
										>
											{index === 0 ? "+" : "x"}
										</button>
									</div>
								</React.Fragment>
							))}
							<button type="submit" className="search-button">
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

AdvancedSearch.defaultProps = {
	typesOfFields
};

export default AdvancedSearch;
