import "normalize.css";
import "../../scss/App.scss";

import React from "react";
import { Helmet } from "react-helmet";
import createBrowserHistory from "history/createBrowserHistory";
import MainNav from "./MainNav";
import SearchContainer from "./SearchContainer";
import Footer from "./Footer";
import InfoCard from "./InfoCard";

const history = createBrowserHistory();

const Layout = props => (
  <>
    <Helmet>
      <title>OpenLaw NZ</title>
      <meta
        name="openlaw"
        content="open-source legal data platform, free to use"
      />
    </Helmet>
    <MainNav />
    <div className="highlighted-content">{props.children}</div>
    <Footer />
  </>
);

const Search = () => <SearchContainer history={history} />;

const SpecialHeading = props => (
  <h1 className="header-title">{props.children}</h1>
);

const PageHeader = props => (
  <InfoCard classModifier="info-card info-card--large info-card--title info-card--column">
    {props.children}
  </InfoCard>
);

const PageContent = props => (
  <div className="page-wrapper">
    <div className="container main">
      <div className="content">{props.children}</div>
    </div>
  </div>
);

Layout.SpecialHeading = SpecialHeading;
Layout.Search = Search;
Layout.PageHeader = PageHeader;
Layout.PageContent = PageContent;

export default Layout;
