import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

// eslint-ignore-next-line
function FoldersHead() {
	return (
		<div className="folder-head clearfix">
			Folders
			<div className="folder-head-close">
				<Link to="/about">
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="path-1-inside-1" fill="white">
							<path d="M5.83537 6.99999L0.241204 1.40586C-0.0804069 1.08425 -0.0803992 0.562808 0.241214 0.241202C0.562822 -0.0803996 1.08425 -0.080402 1.40586 0.241203L6.99999 5.83534L12.5941 0.241203C12.9157 -0.080402 13.4371 -0.0803996 13.7587 0.241202C14.0804 0.562808 14.0804 1.08425 13.7587 1.40586L8.1646 6.99999L13.7587 12.5941C14.0803 12.9157 14.0803 13.4371 13.7587 13.7587C13.4371 14.0803 12.9157 14.0803 12.5941 13.7587L6.99999 8.16463L1.40587 13.7587C1.08425 14.0803 0.56283 14.0803 0.241227 13.7587C-0.0803712 13.4371 -0.0803681 12.9157 0.241234 12.5941L5.83537 6.99999Z" />
						</mask>
						<path
							d="M5.83537 6.99999L0.241204 1.40586C-0.0804069 1.08425 -0.0803992 0.562808 0.241214 0.241202C0.562822 -0.0803996 1.08425 -0.080402 1.40586 0.241203L6.99999 5.83534L12.5941 0.241203C12.9157 -0.080402 13.4371 -0.0803996 13.7587 0.241202C14.0804 0.562808 14.0804 1.08425 13.7587 1.40586L8.1646 6.99999L13.7587 12.5941C14.0803 12.9157 14.0803 13.4371 13.7587 13.7587C13.4371 14.0803 12.9157 14.0803 12.5941 13.7587L6.99999 8.16463L1.40587 13.7587C1.08425 14.0803 0.56283 14.0803 0.241227 13.7587C-0.0803712 13.4371 -0.0803681 12.9157 0.241234 12.5941L5.83537 6.99999Z"
							fill="white"
						/>
						<path
							d="M5.83537 6.99999L9.37089 10.5355L12.9064 6.99998L9.37089 3.46444L5.83537 6.99999ZM0.241204 1.40586L-3.29433 4.94139L-3.29432 4.9414L0.241204 1.40586ZM0.241214 0.241202L-3.29428 -3.29437L-3.29428 -3.29437L0.241214 0.241202ZM1.40586 0.241203L-2.12969 3.77673L-2.12968 3.77673L1.40586 0.241203ZM6.99999 5.83534L3.46445 9.37087L6.99999 12.9064L10.5355 9.37087L6.99999 5.83534ZM12.5941 0.241203L16.1296 3.77673L16.1297 3.77664L12.5941 0.241203ZM13.7587 0.241202L10.2231 3.77666L10.2235 3.77708L13.7587 0.241202ZM13.7587 1.40586L10.2235 -2.12999L10.2232 -2.12968L13.7587 1.40586ZM8.1646 6.99999L4.62907 3.46445L1.09353 6.99999L4.62907 10.5355L8.1646 6.99999ZM13.7587 12.5941L17.2943 9.05857L17.2943 9.05856L13.7587 12.5941ZM12.5941 13.7587L16.1296 10.2232L16.1296 10.2232L12.5941 13.7587ZM6.99999 8.16463L10.5355 4.6291L6.99999 1.09358L3.46446 4.62909L6.99999 8.16463ZM1.40587 13.7587L4.94126 17.2944L4.94139 17.2943L1.40587 13.7587ZM0.241227 13.7587L-3.29424 17.2943L-3.29422 17.2944L0.241227 13.7587ZM0.241234 12.5941L3.77668 16.1297L3.77676 16.1296L0.241234 12.5941ZM9.37089 3.46444L3.77673 -2.12969L-3.29432 4.9414L2.29984 10.5355L9.37089 3.46444ZM3.77674 -2.12967C5.4078 -0.498616 5.40772 2.1458 3.77671 3.77677L-3.29428 -3.29437C-5.56852 -1.02018 -5.56861 2.66711 -3.29433 4.94139L3.77674 -2.12967ZM3.77671 3.77677C2.14574 5.40771 -0.498636 5.40779 -2.12969 3.77673L4.9414 -3.29432C2.66714 -5.56859 -1.02009 -5.56851 -3.29428 -3.29437L3.77671 3.77677ZM-2.12968 3.77673L3.46445 9.37087L10.5355 2.29981L4.94139 -3.29433L-2.12968 3.77673ZM10.5355 9.37087L16.1296 3.77673L9.05856 -3.29432L3.46445 2.29981L10.5355 9.37087ZM16.1297 3.77664C14.4987 5.4078 11.8542 5.40777 10.2231 3.77666L17.2943 -3.29425C15.0201 -5.56857 11.3327 -5.56861 9.05847 -3.29423L16.1297 3.77664ZM10.2235 3.77708C8.59212 2.14597 8.59215 -0.498926 10.2235 -2.12999L17.2939 4.94171C19.5686 2.66742 19.5687 -1.02035 17.2939 -3.29468L10.2235 3.77708ZM10.2232 -2.12968L4.62907 3.46445L11.7001 10.5355L17.2943 4.94139L10.2232 -2.12968ZM4.62907 10.5355L10.2232 16.1296L17.2943 9.05856L11.7001 3.46445L4.62907 10.5355ZM10.2232 16.1296C8.59216 14.4986 8.59216 11.8542 10.2232 10.2232L17.2943 17.2943C19.5685 15.0201 19.5685 11.3328 17.2943 9.05857L10.2232 16.1296ZM10.2232 10.2232C11.8542 8.59216 14.4986 8.59216 16.1296 10.2232L9.05857 17.2943C11.3328 19.5685 15.0201 19.5685 17.2943 17.2943L10.2232 10.2232ZM16.1296 10.2232L10.5355 4.6291L3.46446 11.7002L9.05857 17.2943L16.1296 10.2232ZM3.46446 4.62909L-2.12966 10.2232L4.94139 17.2943L10.5355 11.7002L3.46446 4.62909ZM-2.12953 10.2231C-0.498581 8.59224 2.14565 8.59216 3.77668 10.2231L-3.29422 17.2944C-1.01999 19.5685 2.66709 19.5684 4.94126 17.2944L-2.12953 10.2231ZM3.7767 10.2231C5.40783 11.8542 5.40779 14.4987 3.77668 16.1297L-3.29422 9.05848C-5.56852 11.3327 -5.56857 15.0201 -3.29424 17.2943L3.7767 10.2231ZM3.77676 16.1296L9.37089 10.5355L2.29984 3.46445L-3.29429 9.05856L3.77676 16.1296Z"
							fill="white"
							mask="url(#path-1-inside-1)"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
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
