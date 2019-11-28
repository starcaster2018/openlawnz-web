import React, { Component } from "react";
import DeleteFolder2x from "../../img/delete-folder2x.png";
import DeleteFolder3x from "../../img/delete-folder3x.png";
import LargeFolder2x from "../../img/large-folder2x.png";
import LargeFolder3x from "../../img/large-folder3x.png";
import SmallFolder2x from "../../img/small-folder2x.png";
import SmallFolder3x from "../../img/small-folder3x.png";
import Footer from "../components/Footer.jsx";

function FoldersHead() {
	return <div className="folder-head">Folders</div>;
}

function FoldersNavBar() {
	return (
		<div className="folder-navbar">
			<FoldersNavBarTitle />
			<FoldersList />
			<CreateFolder />
		</div>
	);
}

function FoldersNavBarTitle() {
	return (
		<div className="folder-navbar-title-container">
			<img src={LargeFolder2x} alt="Large Folder 2x" className="large-folder2x" />
			<span className="folder-navbar-title">All Saved Cases</span>
		</div>
	);
}

function FoldersList() {
	return (
		<div className="folder-list">
			<ul>
				<li>
					<img src={SmallFolder2x} alt="Small Folder 2x" className="small-folder2x" />
					<span className="folder-name">Custody</span>
				</li>
				<li>
					<img src={SmallFolder2x} alt="Small Folder 2x" className="small-folder2x" />
					<span className="folder-name">Claims</span>
				</li>
			</ul>
		</div>
	);
}

function CreateFolder() {
	return <div className="create-folder"> + Create folder</div>;
}

function FolderTableTitle() {
	return (
		<div className="folder-table-title-container">
			<div className="folder-table-title">Custody Folder</div>
			<div className="folder-privacy">(private)</div>
			<span className="folder-edit">Edit</span>
			<img src={DeleteFolder2x} alt="Delete 2x" className="delete-folder2x" />
		</div>
	);
}

function FolderTableHead() {
	return (
		<thead>
			<tr className="folder-table-head">
				<th>Case Name</th>
				<th>Citation</th>
				<th>Date</th>
				<th>Remove</th>
			</tr>
		</thead>
	);
}

function FolderTableContent() {
	return (
		<tbody>
			<tr className="folder-table-content">
				<td>SEMPLE V WILSON</td>
				<td>CIV-2017-404-176 [2018] NZHC 992</td>
				<td>23/7/2019</td>
				<td>x</td>
			</tr>
			<tr className="folder-table-content">
				<td>SEMPLE V WILSON</td>
				<td>CIV-2017-404-176 [2018] NZHC 992</td>
				<td>23/7/2019</td>
				<td>x</td>
			</tr>
			<tr className="folder-table-content">
				<td>SEMPLE V WILSON</td>
				<td>CIV-2017-404-176 [2018] NZHC 992</td>
				<td>23/7/2019</td>
				<td>x</td>
			</tr>
			<tr className="folder-table-content">
				<td>SEMPLE V WILSON</td>
				<td>CIV-2017-404-176 [2018] NZHC 992</td>
				<td>23/7/2019</td>
				<td>x</td>
			</tr>
		</tbody>
	);
}

function FolderTable() {
	return (
		<div className="folder-table-container">
			<FolderTableTitle />
			<table>
				<FolderTableHead />
				<FolderTableContent />
			</table>
		</div>
	);
}

function FolderContent() {
	return (
		<div className="content">
			<FoldersNavBar />
			<FolderTable />
		</div>
	);
}

class ProfilePage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="profile-container">
					<div className="folder-wrapper">
						<FoldersHead />
						<FolderContent />
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default ProfilePage;
