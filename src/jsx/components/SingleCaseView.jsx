import React, { Component } from "react";

import { Link } from "react-router-dom";

import Download from "-!svg-react-loader?name=Logo!../../img/download-icon.svg";
import Open from "-!svg-react-loader?name=Logo!../../img/open-details.svg";
import Close from "-!svg-react-loader?name=Logo!../../img/close-details.svg";

class SingleCaseView extends Component {
	constructor() {
		super();
		this.state = {
			showDetails: false
		};
	}

	hideShowDetails() {
		this.setState({ showDetails: !this.state.showDetails });
	}

	render() {
		const { pdf = {}, caseCitations, cites, casesCitedsByCaseCited, legislationToCases } =
			this.props.singleCase || {};

		return (
			<div className="single-case-wrapper">
				<div className="single-case-header">
					<div className="details-open-close-button" onClick={this.hideShowDetails.bind(this)}>
						info {this.state.showDetails ? <Close /> : <Open />}
					</div>
					<div className="download-button">
						<a href={`https://s3-ap-southeast-2.amazonaws.com/openlawnz-pdfs/${pdf.pdfDbKey}`} download>
							<Download alt="Download" className="download-icon" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="case-document-viewer">
						<iframe
							src={`https://docs.google.com/gview?url=https://s3-ap-southeast-2.amazonaws.com/openlawnz-pdfs/${pdf.pdfDbKey}&embedded=true`}
							frameBorder={0}
						/>
					</div>
					<div className={this.state.showDetails ? "case-details" : "hide-case-details"}>
						<h3 className="header">Citations known for this case</h3>
						{caseCitations &&
							(caseCitations === 0 ? (
								<p>None</p>
							) : (
								<div role="listitem" className="item">
									{caseCitations.map(obj => (
										<div role="listitem" className="item" key={`cites-reference-${obj.citation}`}>
											{obj.citation}
										</div>
									))}
								</div>
							))}
						<hr></hr>

						<h3 className="header">Cites</h3>
						{cites &&
							(cites.length === 0 ? (
								<p>No cases</p>
							) : (
								<div role="listitem" className="item">
									{cites.map(obj => (
										<div role="listitem" className="item" key={`cites-reference-${obj.id}`}>
											<Link to={`/case/${obj.id}`}>{obj.caseName}</Link>
										</div>
									))}
								</div>
							))}
						<hr></hr>

						<h3 className="header">Cited by</h3>
						{casesCitedsByCaseCited &&
							(casesCitedsByCaseCited.length === 0 ? (
								<p>No cases</p>
							) : (
								<div role="listitem" className="item">
									{casesCitedsByCaseCited.map(obj => (
										<div
											role="listitem"
											className="item"
											key={`cited-by-reference-${obj.caseByCaseOrigin.id}`}
										>
											<Link to={`/case/${obj.caseByCaseOrigin.id}`}>
												{obj.caseByCaseOrigin.caseName}
											</Link>
										</div>
									))}
								</div>
							))}
						<hr></hr>

						<h3 className="header">Legislation Referenced</h3>
						{legislationToCases &&
							(legislationToCases.length === 0 ? (
								<p>No legislation</p>
							) : (
								<table cellSpacing="0" cellPadding="0">
									<thead className="">
										<tr className="">
											<th className="title">Title</th>
											<th className="section">Section</th>
										</tr>
									</thead>
									<tbody className="">
										{legislationToCases.map((obj, i) => (
											<tr className="" key={`legislation-reference-${i}`}>
												<td className="">{obj.legislation.title}</td>
												<td className="">{obj.section}</td>
											</tr>
										))}
									</tbody>
								</table>
							))}
						<hr></hr>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleCaseView;
