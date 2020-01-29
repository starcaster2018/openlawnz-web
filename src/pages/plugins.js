import React from "react";
import Layout from "../jsx/components/Layout";

const Plugins = () => (
  <Layout>
    <Layout.Search />
    <Layout.PageHeader>
      <h1>Plugins</h1>
      <span>These plugins are built using the OpenLaw NZ API.</span>
    </Layout.PageHeader>
    <Layout.PageContent>Content Here</Layout.PageContent>
  </Layout>
);

export default Plugins;
