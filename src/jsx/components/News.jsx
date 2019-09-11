import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsSpotlight extends Component {
	render() {
		return (
			<div className="news-container">
				<div className="news-items">
					<h1>News</h1>
					<div className="news-cards-wrapper">
						<div className="news-card">
							<div className="picture"></div>
							<div>
								<h2>Heading</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla reiciendis ab
									fugiat, corporis ea similique
								</p>

								<Link to="/news" className="link">
									Find out more
								</Link>
							</div>
						</div>
						<div className="news-card">
							<div className="picture"></div>
							<div>
								<h2>Heading</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla reiciendis ab
									fugiat, corporis ea similique
								</p>

								<Link to="/news" className="link">
									Find out more
								</Link>
							</div>
						</div>
						<div className="news-card">
							<div className="picture"></div>
							<div>
								<h2>Heading</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla reiciendis ab
									fugiat, corporis ea similique
								</p>

								<Link to="/news" className="link">
									Find out more
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsSpotlight;
