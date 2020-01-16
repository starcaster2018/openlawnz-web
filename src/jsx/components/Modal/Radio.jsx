import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Radio = props => {
	const { value, checked, subValue } = props;

	return (
		<div className="radio-wrapper">
			<div className="radio-combo">
				<input readOnly checked={!!checked} type="radio" id={value} value={value} name="age" />
				<span className="radio-target" />
			</div>
			<label className="radio-label" htmlFor={value}>
				{value}
			</label>
			{subValue ? <span className="radio-sub-value">{`(${subValue})`}</span> : null}
		</div>
	);
};

export const RadioGroup = props => {
	const { options, onChange, title, className, subValues } = props;
	const [value, setValue] = useState(options[0]);

	const handleChange = e => {
		setValue(e.target.value);
		onChange(e);
	};

	return (
		<div className={classnames("radio-group-wrapper",className)}>
			<span className="radio-title">{`${title} : `}</span>
			<div className="radio-group" onChange={handleChange}>
				{options.map((item, index) => {
					return <Radio checked={value === item} key={index} value={item} subValue={subValues[index]} />;
				})}
			</div>
		</div>
	);
};

Radio.propTypes = {
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	subValue: PropTypes.string
};

RadioGroup.propTypes = {
	options: PropTypes.array.isRequired,
	subValues: PropTypes.array,
	onChange: PropTypes.func,
	title: PropTypes.string,
	className: PropTypes.string
};
