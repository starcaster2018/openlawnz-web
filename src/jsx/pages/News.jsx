import React from "react";
import { Link } from "react-router-dom";

import { getNews } from "../../js/ApiNews";
import Search from "../components/Search.jsx";
import InfoCard from "../components/InfoCard.jsx";
import Footer from "../components/Footer.jsx";
import NewsContext from "../NewsContext.jsx";

const NewsItem = ({ id, title, summary, formattedDate, image_url: imageUrl }) => (
	<div className="item">
		<header>
			<h2>
				<Link to={"/news/" + id}>{title}</Link>
			</h2>
			<span className="date">{formattedDate}</span>
		</header>
		<div className="content">
			<div className="image-container">
				{imageUrl && (
					<Link to={"/news/" + id}>
						<img src={imageUrl} alt={title} />
					</Link>
				)}
			</div>
			<p>
				{summary}
				<br />
				<Link to={"/news/" + id}>Read more</Link>
			</p>
		</div>
	</div>
);

class News extends React.Component {
	async componentDidMount() {
		if (!this.context.data) {
			const data = await getNews();
			this.context.updateData(data.items);
		}
	}

	render() {
		const news = this.context.data;
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title">
						<h1>News</h1>
						<span>Stay up to date with us.</span>
					</InfoCard>
					<div className="container news-list">
						{news && news.map(item => <NewsItem key={item.id} {...item} />)}
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

News.contextType = NewsContext;

export default News;
