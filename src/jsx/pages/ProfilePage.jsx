import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// const casesArrays = [
// 	{
// 		uuid: "daf00807-55a1-4950-85d0-0da1600b699c",
// 		folder_name: "",
// 		cases: [
// 			{
// 				id: 1,
// 				case_name: "Cameron vs Jetstar",
// 				case_date: "2019-11-08T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2923"]
// 			},
// 			{
// 				id: 2,
// 				case_name: "Joe v Joe",
// 				case_date: "2019-11-08T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 1234"]
// 			},
// 			{
// 				id: 3,
// 				case_name: "Cameron vs Jetstar",
// 				case_date: "2019-11-08T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2123"]
// 			}
// 		]
// 	},
// 	{
// 		uuid: "369c13c7-7dcc-4683-98c7-d34848170972",
// 		folder_name: "",
// 		cases: [
// 			{
// 				id: 4,
// 				case_name: "Bevan vs BikeBarn",
// 				case_date: "2019-02-08T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			},
// 			{
// 				id: 5,
// 				case_name: "Gunn vs Bob",
// 				case_date: "2019-12-11T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			},
// 			{
// 				id: 6,
// 				case_name: "Hobbs vs Rock",
// 				case_date: "2019-03-05T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			}
// 		]
// 	},
// 	{
// 		uuid: "b70894ff-6bbc-477e-afc0-73920b55d016",
// 		folder_name: "",
// 		cases: [
// 			{
// 				id: 7,
// 				case_name: "Mike vs Gibbs",
// 				case_date: "2019-09-11T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2132"]
// 			},
// 			{
// 				id: 8,
// 				case_name: "Bevan vs BikeBarn",
// 				case_date: "2019-02-27T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			},
// 			{
// 				id: 9,
// 				case_name: "Cameron vs Teddy",
// 				case_date: "2019-09-22T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			},
// 			{
// 				id: 10,
// 				case_name: "David vs John & Co. Accounting",
// 				case_date: "2019-06-01T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			},
// 			{
// 				id: 4,
// 				case_name: "Bevan vs BikeBarn",
// 				case_date: "2019-02-08T13:00:01Z",
// 				case_text: "",
// 				citations: ["[2019] NZHC 2112"]
// 			}
// 		]
// 	}
// ];

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
			<FontAwesomeIcon icon={faFolder} size="2x" style={{ color: "#3F7578" }} />
			<span className="folder-navbar-title">All Saved Cases</span>
		</div>
	);
}

function FoldersList() {
	return (
		<div className="folder-list">
			<ul>
				<li>
					<FontAwesomeIcon icon={faFolder} size="lg" style={{ color: "#3F7578" }} />
					<span className="folder-name">Custody</span>
				</li>
				<li>
					<FontAwesomeIcon icon={faFolder} size="lg" style={{ color: "#3F7578" }} />
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
			<FontAwesomeIcon icon={faTrashAlt} size="lg" style={{ color: "#3F7578" }} />
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
			<div className="profile-container">
				<div className="folder-wrapper">
					<FoldersHead />
					<FolderContent />
				</div>
			</div>
		);
	}
}

export default ProfilePage;
