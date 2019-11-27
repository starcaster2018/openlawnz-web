import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const options = ["1111", "2222", "3333", "4444"];

class ModalWrapper extends Component {
	constructor(p) {
		super(p);
		this.handleVisible = this.handleVisible.bind(this);
		this.clickButton = this.clickButton.bind(this);
		this.reset = this.reset.bind(this);
		this.clickMask = this.clickMask.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onSelect = this.onSelect.bind(this);

		this.state = {
			visible: false,
			defaultVisible: false,
			buttonID: 0,
			buttonCollected: "existing",
			selectValue: ""
		};
	}

	handleVisible(e) {
		const _this = this;
		this.setState({ buttonID: e.target.id, visible: true }, () => {
			console.log(` ${_this.state.visible}`);
		});
	}

	clickButton(e) {
		let value;
		if (e.target.innerHTML === "Existing Folder") {
			value = "existing";
		} else if (e.target.innerHTML === "New Folder") {
			value = "new";
		} else {
			value = "";
		}
		this.setState({ buttonCollected: value });
	}

	reset() {
		this.setState({ buttonCollected: "existing" });
		this.setState({ visible: false });
	}

	clickMask() {
		this.reset();
	}

	onConfirm() {
		console.log("wrapperModal click save");
		this.reset();
	}

	onCancel() {
		console.log("wrapperModal click cancel");

		this.reset();
	}

	onSelect(v) {
		this.setState({
			selectValue: v
		});
	}

	render() {
		return (
			<>
				<div className="case-save" onClick={this.handleVisible}>
					<svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0 8.67071V2.15809C0 0.964263 0.896666 0 2.00276 0H13L15 4.33535H26.9941C28.1029 4.33535 29 5.30347 29 6.49771V8.67071H0Z" fill="#3F7578" fillOpacity="0.45"/>
						<path d="M29 9.75455V21.6821C29 22.877 28.1076 23.8444 27.0067 23.8444H1.99329C0.899713 23.8444 0 22.8782 0 21.6864V9.75455H29Z" fill="#3F7578" fillOpacity="0.45"/>
						<path d="M9.7356 15.743H14.0856M18.4356 15.743H14.0856M14.0856 15.743V12.4287V19.4716" stroke="white" strokeWidth="1.5"/>
					</svg>
				</div>
				<Modal
					onConfirm={this.onConfirm}
					onCancel={this.onCancel}
					clickMask={this.clickMask}
					reset={this.reset}
					defaultVisible={this.state.defaultVisible}
					visible={this.state.visible}
					id={this.state.buttonID}
					key={this.state.buttonID}
				>
					<div className="modal-title">
						{this.props.caseName || "titletitltitletitleetitletitletitletitletitletitletitletitle"}
					</div>
					<p className="modal-text">Add to: </p>
					<Button.Group
						first={"Existing Folder"}
						last={"New Folder"}
						clickFirst={this.clickButton}
						clickLast={this.clickButton}
						collected={this.state.buttonCollected === "existing" ? "first" : "last"}
					/>
					{this.state.buttonCollected === "existing" ? (
						<>
							<p className="modal-text">Select Folder:</p>
							<Select
								className="modal-select"
								onSelect={this.onSelect}
								size="big"
								options={options}
								placeholder={"placehosererer"}
							/>
						</>
					) : (
						<>
							<p className="modal-text">Enter new folder name: </p>
							<Input onEnter={this.onConfirm} className="modal-input" placeholder={"New folder name"} />
						</>
					)}
				</Modal>
			</>
		);
	}
}

export default ModalWrapper;

ModalWrapper.propTypes = {
	caseName: PropTypes.string
};
