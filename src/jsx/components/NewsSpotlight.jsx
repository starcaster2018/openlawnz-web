import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsSpotlight extends Component {
	render() {
		return (
			<div className="news-spotlights-container">
				<div className="cards-wrapper">
					<div className="card__news">
						<h2>News</h2>
						<div className="picture"></div>
						<h3>Heading</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla reiciendis ab fugiat,
							corporis ea similique, neque blanditiis possimus cupiditate, natus deserunt laudantium
							consequatur veritatis ullam quis quas optio reprehenderit?
						</p>
						<div className="link">
							<Link to="/news">Find out more</Link>
						</div>
					</div>
					<div className="card__spotlight">
						<h2>Spotlight</h2>
						<div className="picture"></div>
						<h3>Heading</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla reiciendis ab fugiat,
							corporis ea similique, neque blanditiis possimus cupiditate, natus deserunt laudantium
							consequatur veritatis ullam quis quas optio reprehenderit?
						</p>
						<Link to="/spotlight">Find out more</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsSpotlight;
