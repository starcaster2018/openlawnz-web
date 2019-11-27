import React from "react";
import classnames from "classnames";
import ButtonGroup from "./ButtonGroup";
import PropTypes from "prop-types";

import "../../../scss/Button.scss";

const Button = props => {
	const isColored = props.colored ? "button-colored" : "button-white";

	function onclick(e) {
		props.onclick && props.onclick(e);
	}

	return (
		<button className={classnames("button", isColored, props.className)} onClick={onclick}>
			{props.title || "Button"}
		</button>
	);
};

Button.Group = ButtonGroup;

export default Button;

Button.propTypes = {
	className: PropTypes.string,
	onclick: PropTypes.func,
	colored: PropTypes.bool,
	title: PropTypes.string
};
