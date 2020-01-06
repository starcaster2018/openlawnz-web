import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class Select extends Component {
	constructor(props) {
		super(props);

		this.clickSelect = this.clickSelect.bind(this);
		this.clickOption = this.clickOption.bind(this);
		this.clickMask = this.clickMask.bind(this);

		this.state = {
			value: null,
			placeholder: "Please select...",
			showOptions: false
		};
	}

	componentDidMount() {
		const { placeholder } = this.props;
		this.setState({ placeholder });
	}

	clickOption(e) {
		const { value } = e.target;
		const { onSelect } = this.props;

		this.setState({
			value,
			placeholder: value,
			showOption: false
		});

		onSelect(value);
	}

	clickSelect() {
		this.setState(({ showOptions }) => ({
			showOptions: !showOptions
		}));
	}

	clickMask() {
		this.setState({
			showOptions: false
		});
	}

	render() {
		const { options, size = "big", className } = this.props;
		return (
			<div>
				<div onClick={this.clickSelect} className={classnames("select", `select-${size}`, className)}>
					<p>{this.state.placeholder}</p>
					<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.49986 7L0.602745 0.249999L8.39697 0.25L4.49986 7Z" fill="#959595" />
					</svg>
					{this.state.showOptions ? (
						<ul>
							{options.map(item => {
								return (
									<li key={item} value={item} onClick={this.clickOption}>
										{item}
									</li>
								);
							})}
						</ul>
					) : (
						""
					)}
				</div>
				{this.state.showOptions ? <div className="select-mask" onClick={this.clickMask} /> : ""}
			</div>
		);
	}
}

export default Select;

Select.propTypes = {
	options: PropTypes.array.isRequired,
	size: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string
};
