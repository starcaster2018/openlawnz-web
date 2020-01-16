import React, { Component } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { RadioGroup } from "./Radio";
import PropTypes from "prop-types";

class ProfileEdit extends Component {
	constructor(props) {
		super(props);

		this.handleVisible = this.handleVisible.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.clickMask = this.clickMask.bind(this);
		this.reset = this.reset.bind(this);
		this.handleInput = this.handleInput.bind(this);

		this.state = {
			visible: false,
			folderName: "",
			folderOptions: ["Private", "Listed", "Unlisted"],
			subFolderOptions: ["Viewable to only you", "Available in public search", "Available as an URL"]
		};
	}

	componentDidMount() {
		this.setState({
			folderName: this.props.folderName
		});
	}

	handleVisible() {
		this.setState({ folderName: this.props.folderName, visible: true });
	}

	onConfirm() {
		console.log("click on profile edit confirm");
		this.setState({ visible: false });
	}

	onCancel() {
		console.log("click on profile edit cancel");
		this.reset();
	}

	clickMask() {
		this.reset();
	}

	reset() {
		const folderName = this.props.folderName;
		this.setState({ folderName, visible: false });
	}

	handleInput(e) {
		this.setState(
			{
				folderName: e.target.value
			},
			() => console.log(`handleInput: ${this.state.folderName}`)
		);
	}

	render() {
		return (
			<>
				<span onClick={this.handleVisible}>edit</span>
				<Modal
					className="profile-modal"
					onConfirm={this.onConfirm}
					onCancel={this.onCancel}
					clickMask={this.clickMask}
					reset={this.reset}
					visible={this.state.visible}
					id={this.props.id}
					key={this.props.id}
				>
					<div className="profile-modal-header">Edit Folder</div>
					<div className="profile-modal-input-wrapper">
						<span>Folder Name: </span>
						<Input
							className="profile-modal-input"
							id={this.props.id}
							value={this.state.folderName}
							onChange={this.handleInput}
						/>
					</div>
					<RadioGroup
						className="profile-modal-radio"
						title="Folder Privacy"
						options={this.state.folderOptions}
						onChange={e => console.log(e.target.value)}
						subValues={this.state.subFolderOptions}
					/>
				</Modal>
			</>
		);
	}
}

export default ProfileEdit;

ProfileEdit.propTypes = {
	folderName: PropTypes.string
};
