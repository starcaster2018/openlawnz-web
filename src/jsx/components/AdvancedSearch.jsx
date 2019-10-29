import React, { Component } from "react";
import produce from "immer";
import queryString from "query-string";

const DefaultInput = ({ value, id, onChange, className }) => (
	<div className={className}>
		<input required id={`simple-${id}`} value={value} onChange={ev => onChange(id, ev.target.value)} />
	</div>
);

const JudgementDate = ({ value, id, onChange, className }) => (
	<div className={className}>
		<div className="compound-field">
			<label htmlFor={`from-${id}`}>From</label>
			<input
				type="date"
				value={value.from || ""}
				id={`from-${id}`}
				onChange={ev => onChange(id, ev.target.value, "from")}
			/>
		</div>
		<div className="compound-field">
			<label htmlFor={`to-${id}`}>To</label>
			<input
				type="date"
				value={value.to || ""}
				id={`to-${id}`}
				onChange={ev => onChange(id, ev.target.value, "to")}
			/>
		</div>
	</div>
);

const Legislation = ({ value, id, onChange, className }) => (
	<div className={className}>
		<div className="compound-field">
			<label htmlFor={`act-${id}`}>Act</label>
			<input
				type="text"
				value={value.act || ""}
				id={`act-${id}`}
				onChange={ev => onChange(id, ev.target.value, "act")}
			/>
		</div>
		<div className="compound-field">
			<label htmlFor={`section-${id}`}>Section</label>
			<input
				type="text"
				value={value.section || ""}
				id={`section-${id}`}
				onChange={ev => onChange(id, ev.target.value, "section")}
			/>
		</div>
	</div>
);

const relationOfTypes = {
	any: { Component: DefaultInput, text: "Any Field" },
	case_title: { Component: DefaultInput, text: "Case Title" },
	court: { Component: DefaultInput, text: "Court" },
	judge: { Component: DefaultInput, text: "Judge" },
	judgement_date: { Component: JudgementDate, text: "Judgment Date" },
	legislation: { Component: Legislation, text: "Legislation" },
	case_content: { Component: DefaultInput, text: "Case Content" }
};

const relationOfSubTypes = {
	judgement_date_from: { ...relationOfTypes.judgement_date, type: "judgement_date", sub_value: "from" },
	judgement_date_to: { ...relationOfTypes.judgement_date, type: "judgement_date", sub_value: "to" },
	legislation_act: { ...relationOfTypes.legislation, type: "legislation", sub_value: "act" },
	legislation_section: { ...relationOfTypes.legislation, type: "legislation", sub_value: "section" }
};

const typesOfFields = Object.keys(relationOfTypes).map(type => ({
	...relationOfTypes[type],
	value: type
}));

class AdvancedSearch extends Component {
	constructor(props) {
		super(props);
		this.defaultSearchFieldFormat = { id: 0, value: "", type: "any", Component: DefaultInput };
		this.containerRef = React.createRef();
		this.state = { searchFields: props.searchFields || [this.defaultSearchFieldFormat] };

		this.onFieldSelectChange = this.onFieldSelectChange.bind(this);
		this.onFieldValueChange = this.onFieldValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onAddField = this.onAddField.bind(this);
		this.onRemoveField = this.onRemoveField.bind(this);
		this.handleGlobalNavHeight = this.handleGlobalNavHeight.bind(this);
	}

	componentDidMount() {
		setTimeout(this.handleGlobalNavHeight, 300);
		const urlParams = queryString.parse(location.search);
		const prevState = [];
		Object.keys(urlParams).forEach((key, idx) => {
			let field;
			if (relationOfTypes[key]) {
				prevState.push({ ...relationOfTypes[key], type: key, value: urlParams[key], id: idx });
				return;
			}

			if (!relationOfSubTypes[key]) return;

			field = prevState.find(({ type }) => type === relationOfSubTypes[key].type);
			if (field) field.value[relationOfSubTypes[key].sub_value] = urlParams[key];
			else {
				field = {
					...relationOfTypes[relationOfSubTypes[key].type],
					type: relationOfSubTypes[key].type,
					value: {},
					id: idx
				};
				field.value[relationOfSubTypes[key].sub_value] = urlParams[key];
				prevState.push(field);
			}
		});

		if (prevState.length) {
			this.setState({ searchFields: prevState });
		}
	}

	componentWillUnmount() {
		this.handleGlobalNavHeight(true);
	}

	getParamsAsString() {
		return this.state.searchFields.reduce((acc, sf, sfIdx) => {
			if (typeof sf.value === "object" && sf.value !== null) {
				const keys = Object.keys(sf.value);
				keys.forEach((key, keyIdx) => {
					acc += `${sf.type}_${key}=${sf.value[key]}`;
					if (keyIdx < keys.length - 1 || sfIdx < this.state.searchFields.length - 1) acc += "&";
				});
			} else {
				acc += `${sf.type}=${sf.value}`;
				if (sfIdx < this.state.searchFields.length - 1) acc += "&";
			}

			return acc;
		}, "");
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.props.onAdvancedSubmit) {
			this.props.onAdvancedSubmit(this.getParamsAsString());
			return;
		}
		this.props.history.push(`/search?${this.getParamsAsString()}`);
	}

	handleGlobalNavHeight(unmount) {
		const containerBounding = this.containerRef.current.getBoundingClientRect();
		const containerBottomBounding = containerBounding.y + window.pageYOffset + containerBounding.height;
		const navContainer = document.getElementById("nav-container");
		if (!navContainer) return;

		navContainer.style = unmount ? "" : `height: ${containerBottomBounding}px`;
	}

	onFieldValueChange(id, value, valueInObject) {
		this.setState(
			produce(draft => {
				const searchField = draft.searchFields.find(sf => sf.id === id);
				let newValue = value;
				if (valueInObject) {
					newValue = { ...searchField.value };
					newValue[valueInObject] = value;
				}

				searchField.value = newValue;
			})
		);
	}

	onAddField() {
		this.setState(
			produce(draft => {
				const { searchFields } = draft;
				const newSearchField = {
					...this.defaultSearchFieldFormat,
					id: searchFields[searchFields.length - 1].id + 1
				};
				searchFields.push(newSearchField);
			}),
			this.handleGlobalNavHeight
		);
	}

	onRemoveField(id) {
		this.setState(prevState => ({
			searchFields: prevState.searchFields.filter(item => item.id !== id)
		}));
	}

	onFieldSelectChange(value, id) {
		const type = this.props.typesOfFields.find(t => t.value === value);
		this.setState(
			produce(draft => {
				const searchField = draft.searchFields.find(sf => sf.id === id);
				searchField.Component = type.Component;
				searchField.value = "";
				searchField.type = type.value;
			}),
			this.handleGlobalNavHeight
		);
	}

	render() {
		return (
			<div ref={this.containerRef} className="advanced-search">
				<form className="box" onSubmit={this.handleSubmit}>
					<h2 className="title">Advanced Search</h2>
					<span className="subtitle">Please select:</span>

					{this.state.searchFields.map(({ type, id, value, Component }, index) => (
						<div className="search-field" key={id}>
							<select
								className="search-field-select"
								value={type}
								onChange={ev => this.onFieldSelectChange(ev.target.value, id)}
							>
								{this.props.typesOfFields.map(type => (
									<option key={`searchField${id}-${type.value}`} value={type.value}>
										{type.text}
									</option>
								))}
							</select>

							<Component
								className="search-field-input"
								id={id}
								value={value}
								onChange={this.onFieldValueChange}
							/>

							<div className="search-field-button">
								{index > 0 && (
									<button
										type="button"
										className="action-button simple large-font"
										onClick={() => this.onRemoveField(id)}
									>
										x
									</button>
								)}
							</div>
						</div>
					))}

					<div className="search-field">
						<button type="button" className="action-button large-font" onClick={this.onAddField}>
							+
						</button>
					</div>

					<div className="action-container">
						<button type="button" className="action-button simple" onClick={this.props.onCancelSearch}>
							Cancel
						</button>

						<button type="submit" className="action-button large">
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}

AdvancedSearch.defaultProps = {
	typesOfFields,
	onCancelSearch: () => {}
};

export default AdvancedSearch;
