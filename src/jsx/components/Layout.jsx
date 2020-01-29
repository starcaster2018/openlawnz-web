import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "normalize.css";
import "../../scss/App.scss";

import createBrowserHistory from "history/createBrowserHistory";

import MainNav from "./MainNav";
import SearchContainer from "./SearchContainer";
import Footer from "./Footer";
import InfoCard from "./InfoCard";
const history = createBrowserHistory();

class Layout extends React.Component {
  static SpecialHeading = props => {
    return <h1 className="header-title">{props.children}</h1>;
  };

  static Search = () => {
    return <SearchContainer history={history} />;
  };

  static PageHeader = props => {
    return (
      <InfoCard classModifier="info-card info-card--large info-card--title info-card--column">
        {props.children}
      </InfoCard>
    );
  };

  static PageContent = props => {
    return (
      <div className="home-wrapper">
        <div className="container main">
          <div className="content">{props.children}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        <Helmet>
          <title>OpenLaw NZ</title>
          <meta
            name="openlaw"
            content="open-source legal data platform, free to use"
          />
        </Helmet>
        <MainNav />
        <div className="highlighted-content">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
