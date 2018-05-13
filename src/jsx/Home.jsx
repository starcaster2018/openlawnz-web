import React, { Component } from 'react';
import { Button, Container, Segment, Header, Item, Image, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Placeholder from '../img/placeholder.png';

class Home extends Component {
	render() {
		return (
			
			<React.Fragment>
				
				<Header as='h2'>Welcome to OpenLaw NZ</Header>
				<p>OpenLaw NZ is a free, open source, legal research platform.</p>

				<p>We have analysed thousands of cases to find structure and relationships between different cases, and relationships between legislation and cases.</p>

				<p>Use the case search to find a case, and find related cases. Use our <a href="">chrome extension</a> and visit <a href="https://www.legislation.govt.nz">legislation.govt.nz</a> to find cases that relate to a section of an Act.</p>

				<p>There is an API. The API allows you to access our database directly, and build your own applications using OpenLaw NZ data.</p> 
				
				<Header as='h2'>Our Principles</Header>

				<List bulleted>
					<List.Item>Access to legal information should be free</List.Item>
					<List.Item>Legal information should be accessible					
					<List.List>
						<List.Item>For humans and</List.Item>
						<List.Item>For computers</List.Item>
					</List.List>
					</List.Item>
					<List.Item>Legal research software should be open-source</List.Item>
				</List>
				
				<Header as='h2'>Relationship Search</Header>
				<Item.Group>
					<Item>
						<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Cases to legislation</Item.Header>
							<Item.Meta>Links between legislation mentioned in cases with legislation.gov.nz</Item.Meta>
						</Item.Content>
					</Item>

					<Item>
					<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Cases to cases</Item.Header>
							<Item.Meta>Cases have been parsed to find relationships to other cases based on their neutral and double citations</Item.Meta>
						</Item.Content>
					</Item>
					
					<Item>
					<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Legislation to cases</Item.Header>
							<Item.Meta>Download the Chrome extension to use on legislation.gov.nz to see cases related to legislation</Item.Meta>
						</Item.Content>
					</Item>
				</Item.Group>

			</React.Fragment>
		);
	}
}

export default Home;
