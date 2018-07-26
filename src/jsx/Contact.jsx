import React, { Component } from 'react';
import { Button, Container, Card, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Andy from '../img/andy.jpg';
import Will from '../img/will.jpg';

class About extends Component {
	render() {
		return (
			<React.Fragment>
				
				<Header as='h2'>Contact us</Header>

				<p>We'd love to hear feedback, and things you have done with the platform.</p>

				<Header as='h3'>Media, Legal enquiries &amp; Sponsorship</Header>

				<p>If you're a Government department representative and would like to know more about open data, please get in touch.</p>

				<p>Andrew Easterbrook: <a href="mailto:andrew@openlaw.nz">andrew@openlaw.nz</a></p>

				<Header as='h3'>Technology &amp; Contributing</Header>

				<p>Developers and designers are very welcome to contribute to the project. For more information check out the Github or contact William.</p>

				<p>William Parry: <a href="mailto:william@openlaw.nz">william@openlaw.nz</a></p>

			</React.Fragment>
		);
	}
}

export default About;
