import React, { Component } from "react";
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import InfoCard from "../components/InfoCard.jsx";
import SingleCaseView from "../components/SingleCaseView.jsx";

import ApiService from "../../js/ApiService";

class SingleCase extends Component {
	constructor({ match }) {
		super();
		this.state = {
			id: match.params.id,
			singleCase: null,
			loadingCase: true
		};
	}

	async fetchData(id) {
		const singleCase = await ApiService.getCase({ id: parseInt(id) });
		this.setState({ singleCase, loadingCase: false });
	}

	async componentDidMount() {
		this.fetchData(this.state.id);
		window.scrollTo(0, 0);
	}

	async componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.setState({ loadingCase: true });
			this.fetchData(this.props.match.params.id);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard>
						<h2 className="header-case">
							{this.state.loadingCase ? "Loading..." : this.state.singleCase.caseName}
						</h2>
					</InfoCard>
					{this.state.singleCase && (
						<SingleCaseView isBeingUpdated={this.state.loadingCase} singleCase={this.state.singleCase} />
					)}
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default SingleCase;
