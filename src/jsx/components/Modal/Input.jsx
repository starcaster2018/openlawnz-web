import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Input = props => {
	function handleEnter(e) {
		if (e.keyCode === 13) {
			props.onEnter();
			// setValue("");
		}
	}

	return (
		<input
			onKeyUp={handleEnter}
			value={props.value}
			className={classNames("input", props.className)}
			type="text"
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};

export default Input;

Input.propTypes = {
	placeholder: PropTypes.string,
	onEnter: PropTypes.func,
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
};

Input.defaultProps = {
	onEnter: () => {},
	placeholder: "Please input here",
	onChange: () => {}
};
