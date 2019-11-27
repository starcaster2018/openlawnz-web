import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const ButtonGroup = props => {
	function clickFirst(e) {
		props.clickFirst && props.clickFirst(e);
	}

	function clickLast(e) {
		props.clickLast && props.clickLast(e);
	}

	return (
		<div className={"button-group"}>
			<div className={classNames({ "button-selected": props.collected === "first" })} onClick={clickFirst}>
				{props.first || "first button"}
			</div>
			<div className={classNames({ "button-selected": props.collected === "last" })} onClick={clickLast}>
				{props.last || "last button"}
			</div>
		</div>
	);
};

export default ButtonGroup;

ButtonGroup.propTypes = {
	first: PropTypes.string,
	last: PropTypes.string,
	collected: PropTypes.string,
	clickFirst: PropTypes.func,
	clickLast: PropTypes.func
};
