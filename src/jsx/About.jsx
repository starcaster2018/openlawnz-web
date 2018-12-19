import React, { Component } from "react";
import { Header, Item } from "semantic-ui-react";
import Andy from "../img/andy.jpg";
import Will from "../img/will.jpg";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Header as="h2">About us</Header>
				<p>
					Andy and Will met at Weir House during their first year at Victoria University back in 2004 and
					became fast friends. Over the past 14 years they've played music together, lived together, and
					travelled together.
				</p>
				<p>Now they are embarking on a project to open access to legal data in New Zealand.</p>
				<Item.Group divided relaxed="very">
					<Item>
						<Item.Image src={Andy} />
						<Item.Content>
							<Item.Header>Andrew Easterbrook</Item.Header>
							<Item.Meta>
								<span className="date">CEO</span>
							</Item.Meta>
							<Item.Description>
								<p>
									Andrew is a lawyer, and has worked in technology law, civil litigation and family
									law since 2009.
								</p>
								<p>
									He's been a Member of the Auckland Distrct Law Society Technology &amp; Law
									Committee since 2012, and is experienced in web and software development.
								</p>
								<p>Andrew went to university at Victoria, Wellington, and now lives in Whangarei.</p>
							</Item.Description>
						</Item.Content>
					</Item>
					<Item>
						<Item.Image src={Will} />
						<Item.Content>
							<Item.Header>William Parry</Item.Header>
							<Item.Meta>
								<span className="date">CTO</span>
							</Item.Meta>
							<Item.Description>
								<p>
									William brings 15 years of tech experience across enterprise, advertising and small
									businesses including 8 years working with open data in projects and hackathons.
								</p>
								<p>
									He has run community coding classes and is passionate about empowering disadvantaged
									people with technology.
								</p>
								<p>William went to university at Victoria, Wellington, and now lives in Sydney.</p>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</React.Fragment>
		);
	}
}

export default About;
