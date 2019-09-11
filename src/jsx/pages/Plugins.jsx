import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Plugin extends Component {
	render() {
		return (
			<React.Fragment>
				<Header as="h2">Plugins</Header>

				<p>
					We built these tools using the OpenLaw NZ API. If you build something with our platform, get in
					touch and we&apos;ll list it here.
				</p>

				<Header as="h3">
					<Icon color="teal" name="chrome" />
					legislation.govt.nz Chrome Extension
				</Header>
				<p>
					<a href="https://chrome.google.com/webstore/detail/openlaw-nz-legislation-he/abobmobdjckkdplcdjicelmejdmlleof?hl=en-US">
						Available from the Chrome Web Store.
					</a>
				</p>

				<p>
					When looking at a section of legislation on{" "}
					<a href="https://legislation.govt.nz">legislation.govt.nz</a>, this Chrome Extension inserts a
					button that, when clicked, will give you links to cases that refer to that section, and tell you how
					many times it is mentioned in each case.
				</p>

				<p>It queries our database of 17,000 cases from 2012 onwards.</p>

				<p>
					The <a href="https://github.com/openlawnz/openlawnz-browser-extension">source code is on GitHub</a>,
					if you&apos;d like to improve or contribute.
				</p>
			</React.Fragment>
		);
	}
}

export default Plugin;
