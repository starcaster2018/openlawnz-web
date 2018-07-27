import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import {
  Link
} from "react-router-dom";

class Plugin extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h2">Plugins</Header>

        <p>We have built a couple of free tools using the OpenLaw NZ API. If you build something with our platform, get in touch and we'll list it here.</p>
        
        <Header as="h3">legislation.govt.nz Chrome Extension</Header>

        <p>
          When looking at a piece of legislation on{" "}
          <a href="https://legislation.govt.nz">legislation.govt.nz</a>, this
          Chrome Extension inserts a button that, when clicked, will show you
          cases that cite the current legislation and section you are looking
          at.
        </p>

        <p><em>- Coming soon -</em></p>

        <Header as="h3">Microsoft Word Auto Citation Linker</Header>

        <p>
          With one click, this plugin will look through your legal document and
          automatically link citations.
        </p>

        <p><a href="https://github.com/openlawnz/openlawnz-word-plugin">Get the source code</a></p>

        <p>
			<em>
          While you can compile this plugin yourself and use it, to help fund
          OpenLaw NZ we also provide a{" "}
          <Link to="/services">linking service for your documents</Link> that uses
          this tool
		  </em>
        </p>
      </React.Fragment>
    );
  }
}

export default Plugin;
