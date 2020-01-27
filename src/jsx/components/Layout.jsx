import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import "normalize.css";
import "../../scss/App.scss";

import createBrowserHistory from "history/createBrowserHistory";

import MainNav from "./MainNav";
import SearchContainer from "./SearchContainer";
import InfoCard from "./InfoCard";
import InfoCardUnit from "./InfoCardUnit";
import Footer from "./Footer";

const history = createBrowserHistory();

const Layout = ({ path, heading, children, subHeading }) => {
	return (
		<>
			<Helmet>
				<title>OpenLaw NZ</title>
				<meta name="openlaw" content="open-source legal data platform, free to use" />
			</Helmet>
			<MainNav />
			<div className="highlighted-content">
				{path === "/" && <h1 className="header-title">{heading}</h1>}
				<SearchContainer history={history} />
				{path === "/" && <HomePageInfoCards />}
				{path !== "/" && (
					<InfoCard classModifier="info-card info-card--large info-card--title info-card--column">
						<h1>{heading}</h1>
						<span>{subHeading}</span>
					</InfoCard>
				)}
			</div>
			<div className="home-wrapper">
				{path === "/" ? (
					children
				) : (
					<div className="container main">
						<div className="content">{children}</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

const HomePageInfoCards = () => (
	<InfoCard>
		<InfoCardUnit one="30,141" two="CASES" />
		<div className="border"></div>
		<InfoCardUnit one="25,208" two="CASE-TO-CASE RELATIONSHIPS" />
		<div className="border"></div>
		<InfoCardUnit one="346,395" two="CASE-TO-LEGISLATION RELATIONSHIPS" />
	</InfoCard>
);

Layout.propTypes = {
	path: PropTypes.string,
	children: PropTypes.element.isRequired,
	heading: PropTypes.string,
	subHeading: PropTypes.string
};
export default Layout;

export const query = graphql`
	fragment LayoutFragment on Query {
		footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
			edges {
				node {
					id
					frontmatter {
						logoImage {
							image
							imageAlt
							tagline
						}
						socialLinks {
							image
							imageAlt
							label
							linkURL
						}
					}
				}
			}
		}
		navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
			edges {
				node {
					id
					frontmatter {
						logoImage {
							image
							imageAlt
						}
						menuItems {
							label
							linkType
							linkURL
						}
					}
				}
			}
		}
	}
`;
