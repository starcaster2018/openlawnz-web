import React, { useState } from "react";
import classNames from "classnames";
import "../../../scss/Input.scss";
import PropTypes from "prop-types";

const Input = props => {
	const [value, setValue] = useState("");

	function handleEnter(e) {
		if (e.keyCode === 13) {
			props.onEnter && props.onEnter();
			setValue("");
		}
	}

	function handleChange(e) {
		setValue(e.target.value);
	}

	return (
		<input
			onKeyUp={handleEnter}
			value={value}
			className={classNames("input", props.className)}
			type="text"
			placeholder={props.placeholder || "Please input here"}
			onChange={handleChange}
		/>
	);
};

export default Input;

Input.propTypes = {
	placeholder: PropTypes.string,
	onEnter: PropTypes.func,
	className: PropTypes.string
};
