import React from "react";
import Layout from "../jsx/components/Layout";

const News = () => (
  <Layout>
    <Layout.Search />
    <Layout.PageHeader>
      <h1>News</h1>
      <span>Stay up to date with us.</span>
    </Layout.PageHeader>
    <Layout.PageContent>Content Here</Layout.PageContent>
  </Layout>
);

export default News;
