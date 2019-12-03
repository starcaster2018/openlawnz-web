import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFolder } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { casesArrays } from "../../../mock/ProfileData";
import FolderBig from "-!svg-react-loader?name=FolderBig!../../img/folder-big.svg";
import FolderSmall from "-!svg-react-loader?name=FolderSmall!../../img/folder-small.svg";
import Close from "-!svg-react-loader?name=Close!../../img/close.svg";

const FoldersHead = () => {
	return (
		<div className="profile-header clearfix">
			Folders
			<div className="profile-header-close">
				<Link to="/about">
					<Close />
				</Link>
			</div>
		</div>
	);
};

const FoldersNavMenu = props => {
	const classType = props.type === "big" ? "profile-nav-big" : "profile-nav-small";

	return (
		<div onClick={props.onClick} className={classnames(classType, props.className)}>
			{props.type === "big" ? <FolderBig /> : <FolderSmall />}
			<span>{props.name}</span>
		</div>
	);
};

const FoldersNavBar = props => {
	const { data, onClick, activeMenu } = props;

	const onMenuClick = v => () => onClick(v);

	return (
		<div className="profile-nav">
			<FoldersNavMenu className="profile-nav-title" type="big" name="All Saved Cases" />
			<div className="profile-nav-list">
				{data.map(item => {
					const activeClass = activeMenu === item.uuid ? "profile-nav-menu-active" : "";
					return (
						<FoldersNavMenu
							onClick={onMenuClick(item.uuid)}
							className={classnames("profile-nav-menu", activeClass)}
							key={item.uuid}
							type="small"
							name={item.folder_name}
						/>
					);
				})}
			</div>
			<div onClick={() => console.log("click on +create folder")} className="profile-create-folder">
				{" "}
				+ Create folder
			</div>
		</div>
	);
};

class Profile extends Component {
	constructor(props) {
		super(props);

		this.clickMenu = this.clickMenu.bind(this);

		this.state = {
			data: [],
			activeMenu: ""
		};
	}

	componentDidMount() {
		// todo: waiting for API, applying data here
		this.setState({
			data: casesArrays,
			activeMenu: casesArrays[0].uuid
		});
	}

	clickMenu(v) {
		this.setState({
			activeMenu: v
		});
	}

	render() {
		const { data } = this.state;

		return (
			<div className="profile">
				<div className="profile-wrapper">
					<FoldersHead />
					<div className="profile-content">
						<FoldersNavBar activeMenu={this.state.activeMenu} onClick={this.clickMenu} data={data} />
						{/* <FolderTable data={data} /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
