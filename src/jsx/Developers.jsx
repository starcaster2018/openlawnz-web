import React, { Component } from "react";
import { Header, Icon, Message } from "semantic-ui-react";

class Developers extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h2">Developers</Header>

        <p>
          At its core, OpenLaw NZ is a series of data services built for developers
          such as yourself to use.
        </p>
        <p>
          While our API and search engine is free for non-profit &amp;
          open-source projects, commercial usage requires a separate license.{" "}
          <a href="contact">Contact us</a> for more details
        </p>

        <Header as="h3">API</Header>
		<p>By using our API you agree to the <a href="https://docs.google.com/document/d/1ozEwsJG0m_9Yw1jqSCLROFqV5YZyJ3kQF5AScpchRQs/edit?usp=sharing">API Terms of Use</a></p>
        <p>
          Perform expressive queries using our{" "}
          <a href="https://api.openlaw.nz/graphql">
            GraphQL API &nbsp;<Icon name="external" fitted />
          </a>
        </p>
		<Header as="h4">Code Example</Header>
		<p>From our Chrome Extension:</p>
    <Message compact>
<pre>
{`const formatQuery = (legislationTitle) => {
	return \`{ 
		legislation(title: "'\${legislationTitle}'") { 
			caseReferences { 
				case_id,
				count,
				section,
				case {
					case_name,
					citations {
						citation
					}
				}
			}
		}
	}\`
}

fetch(\`https://api.openlaw.nz?query=\${formatQuery(legislationTitle)}\`);
`}
</pre></Message>

        {/* <Header as="h3">Search</Header>

        <p>
          Powered by Algolia, you can perform{" "}
          <a href="hhttps://search.openlaw.nz?q=2017">
            case search queries &nbsp;<Icon name="external" fitted />
          </a>
        </p> */}
      </React.Fragment>
    );
  }
}

export default Developers;
