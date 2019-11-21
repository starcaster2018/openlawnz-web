import React, { useState, useEffect, useRef, useReducer } from "react";
import produce from "immer";
import queryString from "query-string";
import DatePicker from "react-date-picker";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isValidDate from "date-fns/isValid";
import DOMPurify from "dompurify";

const DefaultInput = ({ value, id, onChange, className }) => (
	<div className={className}>
		<input required id={`simple-${id}`} value={value} onChange={ev => onChange({ id, value: ev.target.value })} />
	</div>
);

const JudgmentDate = ({ value, id, onChange, className }) => {
	const dateFormat = "y-M-dd";
	const startingDateFrom = value.from ? parse(value.from, dateFormat, new Date()) : startOfMonth(new Date());
	const startingDateTo = value.to ? parse(value.to, dateFormat, new Date()) : endOfMonth(new Date());
	const [dateFrom, setDateFrom] = useState(startingDateFrom);
	const [dateTo, setDateTo] = useState(startingDateTo);

	const onDateChange = (date, type) => {
		if (type === "from") {
			setDateFrom(date);
		} else {
			setDateTo(date);
		}
		onChange({ id, valueInObject: type, value: format(date, dateFormat) });
	};

	useEffect(() => {
		onChange({ id, value: format(startingDateFrom, dateFormat), valueInObject: "from" });
		onChange({ id, value: format(startingDateTo, dateFormat), valueInObject: "to" });
	}, []);

	return (
		<div className={className}>
			<div className="compound-field">
				<label htmlFor={`from-${id}`}>From</label>
				<DatePicker
					showLeadingZeros
					required
					maxDate={dateTo}
					onChange={date => onDateChange(date, "from")}
					value={dateFrom}
				/>
			</div>
			<div className="compound-field">
				<label htmlFor={`to-${id}`}>To</label>
				<DatePicker
					showLeadingZeros
					required
					minDate={dateFrom}
					onChange={date => onDateChange(date, "to")}
					value={dateTo}
				/>
			</div>
		</div>
	);
};

const Legislation = ({ value, id, onChange, className }) => (
	<div className={className}>
		<div className="compound-field">
			<label htmlFor={`act-${id}`}>Act</label>
			<input
				type="text"
				value={value.act || ""}
				id={`act-${id}`}
				onChange={ev => onChange({ id, value: ev.target.value, valueInObject: "act" })}
			/>
		</div>
		<div className="compound-field">
			<label htmlFor={`section-${id}`}>Section</label>
			<input
				type="text"
				value={value.section || ""}
				id={`section-${id}`}
				onChange={ev => onChange({ id, value: ev.target.value, valueInObject: "section" })}
			/>
		</div>
	</div>
);

const relationOfTypes = {
	any: { Component: DefaultInput, text: "Any Field" },
	case_title: { Component: DefaultInput, text: "Case Title" },
	court: { Component: DefaultInput, text: "Court" },
	// judge: { Component: DefaultInput, text: "Judge" },
	judgment_date: { Component: JudgmentDate, text: "Judgment Date" },
	legislation: { Component: Legislation, text: "Legislation" }
	// case_content: { Component: DefaultInput, text: "Case Content" }
};

const relationOfSubTypes = {
	judgment_date_from: { ...relationOfTypes.judgment_date, parentType: "judgment_date", prop: "from" },
	judgment_date_to: { ...relationOfTypes.judgment_date, parentType: "judgment_date", prop: "to" },
	legislation_act: { ...relationOfTypes.legislation, parentType: "legislation", prop: "act" },
	legislation_section: { ...relationOfTypes.legislation, parentType: "legislation", prop: "section" }
};

const validateValueOnPopulate = {
	judgment_date: value => isValidDate(new Date(value))
};

const defaultSearchFieldFormat = { id: 0, value: "", type: "any", Component: DefaultInput };

const searchReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_FIELD_VALUE":
			return produce(state, draft => {
				const { id, value, valueInObject } = action.payload;
				const searchField = draft.searchFields.find(sf => sf.id === id);
				let newValue = DOMPurify.sanitize(value, { ALLOWED_TAGS: ["&"] });

				if (valueInObject) {
					newValue = { ...searchField.value };
					newValue[valueInObject] = DOMPurify.sanitize(value);
				}

				searchField.value = newValue;
			});
		case "EMPTY_FIELDS":
			return {
				...state,
				searchFields: []
			};
		case "ADD_FIELD":
			return produce(state, draft => {
				const { type: fieldType } = action.payload.field;
				const type = draft.typesOfFields.find(t => t.value === fieldType);

				draft.searchFields.push(action.payload.field);
				if (type) type.visible = false;
			});
		case "ADD_EMPTY_FIELD":
			return produce(state, draft => {
				draft.searchFields.push({
					...defaultSearchFieldFormat,
					id: state.searchFields[state.searchFields.length - 1].id + 1
				});
			});
		case "REMOVE_FIELD":
			return produce(state, draft => {
				const { type, id } = action.payload;
				const typeOfField = draft.typesOfFields.find(t => t.value === type);

				draft.searchFields = draft.searchFields.filter(item => item.id !== id);
				if (typeOfField) typeOfField.visible = true;
			});
		case "UPDATE_FIELD_COMPONENT_AND_SELECT":
			return produce(state, draft => {
				let newType, currentType;
				const { value, id } = action.payload;
				const searchField = draft.searchFields.find(sf => sf.id === id);
				draft.typesOfFields.forEach(type => {
					if (type.value === value) newType = type;
					if (type.value === searchField.type) currentType = type;
				});

				searchField.Component = newType.Component;
				searchField.value = "";
				searchField.type = newType.value;

				newType.visible = newType.value === "" || false;
				if (currentType) currentType.visible = true;
			});
		default:
			throw new Error();
	}
};

const AdvancedSearch = ({ onSubmit, toggleTypeOfSearch, populateComponent, history }) => {
	const containerRef = useRef(null);
	const [state, dispatch] = useReducer(searchReducer, {
		searchFields: [defaultSearchFieldFormat],
		typesOfFields: Object.keys(relationOfTypes).map(type => ({
			...relationOfTypes[type],
			visible: true,
			value: type === "any" ? "" : type
		}))
	});

	useEffect(() => {
		handleGlobalNavHeight();
		return () => handleGlobalNavHeight(true);
	});

	useEffect(() => {
		setTimeout(handleGlobalNavHeight, 300);
		if (!populateComponent) return;

		const urlParams = queryString.parse(location.search);
		const prevState = [];
		Object.keys(urlParams).forEach((key, idx) => {
			let field;
			const value = DOMPurify.sanitize(urlParams[key]);
			const type = relationOfTypes[key];
			const subType = relationOfSubTypes[key];
			if (type) {
				// Validate format if necessary before saving it
				if (validateValueOnPopulate[type] && !validateValueOnPopulate[type](value)) return;
				field = { ...type, value, type: key, id: idx };
				prevState.push(field);
				return;
			}

			if (!subType) return;

			// Validate format if necessary before saving it
			if (validateValueOnPopulate[subType.parentType] && !validateValueOnPopulate[subType.parentType](value))
				return;
			field = prevState.find(({ type }) => type === subType.parentType) || {
				...relationOfTypes[subType.parentType],
				type: subType.parentType,
				value: {},
				id: idx
			};
			field.value[subType.prop] = value;
			if (Object.keys(field.value).length <= 1) prevState.push(field);
		});

		if (prevState.length) {
			triggerDispatch("EMPTY_FIELDS");
			prevState.forEach(field => triggerDispatch("ADD_FIELD", { field }));
		}
	}, []);

	const getParamsAsString = () => {
		return state.searchFields.reduce((acc, sf, sfIdx) => {
			if (typeof sf.value === "object" && sf.value !== null) {
				const keys = Object.keys(sf.value);
				keys.forEach((key, keyIdx) => {
					acc += `${sf.type}_${key}=${sf.value[key]}`;
					if (keyIdx < keys.length - 1 || sfIdx < state.searchFields.length - 1) acc += "&";
				});
			} else {
				acc += `${sf.type}=${sf.value}`;
				if (sfIdx < state.searchFields.length - 1) acc += "&";
			}

			return acc;
		}, "");
	};

	const handleSubmit = e => {
		e.preventDefault();
		const paramsAsString = getParamsAsString();

		return onSubmit
			? onSubmit(paramsAsString, paramsAsString, "advancedQuery")
			: history.push(`/search?${getParamsAsString()}`);
	};

	const handleGlobalNavHeight = unmount => {
		const bounding = {};
		const navContainer = document.getElementById("nav-container");
		if (unmount && navContainer) {
			navContainer.style = "";
			return;
		} else if (!navContainer) return;

		bounding.container = containerRef.current.getBoundingClientRect();
		bounding.containerBounding = bounding.container.y + window.pageYOffset + bounding.container.height;

		navContainer.style = unmount ? "" : `height: ${bounding.containerBounding}px`;
	};

	const triggerDispatch = (type, payload) => {
		dispatch({ type, payload });
	};

	return (
		<div ref={containerRef} className="advanced-search">
			<form className="box" onSubmit={handleSubmit}>
				<h2 className="title">Advanced Search</h2>
				<span className="subtitle">Please select:</span>

				{state.searchFields.map(({ type, id, value, Component }, index) => (
					<div className="search-field" key={id}>
						<select
							className="search-field-select"
							value={type}
							required
							onChange={ev =>
								triggerDispatch("UPDATE_FIELD_COMPONENT_AND_SELECT", { id, value: ev.target.value })
							}
						>
							{state.typesOfFields.map(
								t =>
									(t.value === type || t.visible) && (
										<option key={`searchField${id}-${t.value}`} value={t.value}>
											{t.text}
										</option>
									)
							)}
						</select>

						<Component
							className="search-field-input"
							id={id}
							value={value}
							onChange={payload => triggerDispatch("UPDATE_FIELD_VALUE", payload)}
						/>

						<div className="search-field-button">
							{index > 0 && (
								<button
									type="button"
									className="action-button simple large-font"
									onClick={() => triggerDispatch("REMOVE_FIELD", { id, type })}
								>
									x
								</button>
							)}
						</div>
					</div>
				))}

				<div className="search-field">
					<button
						disabled={state.typesOfFields.length - 1 === state.searchFields.length || false}
						type="button"
						className="action-button large-font"
						onClick={() => triggerDispatch("ADD_EMPTY_FIELD", null)}
					>
						+
					</button>
				</div>

				<div className="action-container">
					<button type="button" className="action-button simple" onClick={toggleTypeOfSearch}>
						Cancel
					</button>

					<button type="submit" className="action-button large">
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

AdvancedSearch.defaultProps = {
	toggleTypeOfSearch: () => {}
};

export default AdvancedSearch;
