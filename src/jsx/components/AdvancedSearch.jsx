import React, { Component } from "react";

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
	}

	componentWillUnmount() {
		this.handleGlobalNavHeight(true);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	handleGlobalNavHeight(unmount) {
		const containerBounding = this.containerRef.current.getBoundingClientRect();
		const containerBottomBounding = containerBounding.y + window.pageYOffset + containerBounding.height;
		const navContainer = document.getElementById("nav-container");
		if (!navContainer) return;

		navContainer.style = unmount ? "" : `height: ${containerBottomBounding}px`;
	}

	onFieldValueChange(id, value, valueInObject) {
		this.setState(prevState => ({
			searchFields: prevState.searchFields.map(sf => {
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
		}));
	}

	onAddField() {
		this.setState(
			({ searchFields }) => ({
				searchFields: [
					...searchFields,
					{ ...this.defaultSearchFieldFormat, id: searchFields[searchFields.length - 1].id + 1 }
				]
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
			prevState => ({
				searchFields: prevState.searchFields.map(sf =>
					sf.id === id
						? {
								...sf,
								Component: type.Component,
								value: "",
								type: type.value
						  }
						: sf
				)
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
