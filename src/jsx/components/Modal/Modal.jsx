import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.clickMask = this.clickMask.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleConfirm() {
		console.log("save");
		const { onConfirm } = this.props;

		onConfirm();
	}

	handleCancel() {
		console.log("cancel");
		const { onCancel } = this.props;

		onCancel();
	}

	clickMask(e) {
		const { clickMask, reset } = this.props;
		e.preventDefault();
		clickMask();
		reset();
	}

	render() {
		const { children, visible } = this.props;

		if (visible) {
			document.getElementsByTagName("body")[0].classList.add("prevent-scroll");
		} else {
			document.getElementsByTagName("body")[0].classList.remove("prevent-scroll");
		}

		return visible ? (
			<div className="modal-wrapper">
				<div className="modal">
					{children}
					<div className="modal-button">
						<Button
							className="modal-button-confirm"
							onclick={this.handleConfirm}
							title={"Save"}
							colored={true}
						/>
						<Button
							className="modal-button-cancel"
							onclick={this.handleCancel}
							title={"Cancel"}
							colored={false}
						/>
					</div>
				</div>
				<div onClick={this.clickMask} className="modal-mask" />
			</div>
		) : null;
	}
}

export default Modal;

Modal.propTypes = {
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	title: PropTypes.string,
	visible: PropTypes.bool,
	reset: PropTypes.func
};

Modal.defaultProps = {
	onConfirm: () => {},
	onCancel: () => {}
};
