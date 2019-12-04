import React from "react";
import classnames from "classnames";
import ButtonGroup from "./ButtonGroup";
import PropTypes from "prop-types";

const Button = props => {
	const isColored = props.colored ? "button-colored" : "button-white";

	return (
		<button className={classnames("button", isColored, props.className)} onClick={props.onclick}>
			{props.title}
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

Button.defaultProps = {
	onclick: () => {},
	title: "Button"
};
