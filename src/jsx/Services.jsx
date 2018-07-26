import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class Plugin extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h2">Services</Header>

        <p>Are you tired of manually linking every citation in your legal documents? Want to spend your time doing more meaningful legal work?</p>
        <p>Let us manage your citations for you, powered by the OpenLaw NZ dataset; a new business service unlocked by the power of open data.</p>

        <p>Simply send us your document (e.g. court submissions, advice letters, research papers), along with $300NZD and we will:</p>
        <ul>
          <li>Hyperlink all cited (NZ) cases to an online source</li>
          <li>Or: Download and hyperlink all cited (NZ) cases in a format that complies with the <a href="https://www.courtsofnz.govt.nz/going-to-court/practice-directions/practice-notes/all-benches/SCCEDP.pdf">Senior Courts Electronic Document Protocol</a></li>
        </ul>

        <p><em>All profits OpenLaw NZ makes goes back into funding its development</em></p>

        <Header as="h3">Get started</Header>

        <p>Call Andrew on <a href="tel:+6421926292">+6421926292</a> or email at <a href="mailto:andrew@hartelaw.nz">andrew@hartelaw.nz</a></p>

      </React.Fragment>
    );
  }
}

export default Plugin;
