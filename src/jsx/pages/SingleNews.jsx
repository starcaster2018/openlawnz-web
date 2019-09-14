import React from "react";

import { getNews } from "../../js/ApiNews";
import Search from "../components/Search.jsx";
import InfoCard from "../components/InfoCard.jsx";
import Footer from "../components/Footer.jsx";
import NewsContext from "../NewsContext.jsx";

const selectNews = (news = [], id) => news.find(item => item.id === id);

class News extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		};
	}

	async componentDidMount() {
		const newsId = this.props.match.params.id;

		if (!this.context.data) {
			const data = await getNews();
			this.context.updateData(data.items);
			this.setState({ data: selectNews(data.items, newsId) });
		} else {
			this.setState({ data: selectNews(this.context.data, newsId) });
		}
	}

	render() {
		const { title = "", formattedDate = "", image_url = null, content_html = "" } = this.state.data;

		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						<h1>{title}</h1>
						<span>{formattedDate}</span>
					</InfoCard>
					<div className="container main">
						<div className="content">
							{image_url && (
								<React.Fragment>
									<div className="image-container">
										<img src={image_url} />
									</div>
									<hr className="divider" />
								</React.Fragment>
							)}
							<div
								dangerouslySetInnerHTML={{
									__html: content_html
								}}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

News.contextType = NewsContext;

export default News;
