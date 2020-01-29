import React from "react";
import Layout from "../jsx/components/Layout";

const SingleNews = () => (
  <Layout>
    <Layout.Search />
    <Layout.PageHeader>
      <h1>Single News</h1>
    </Layout.PageHeader>
    <Layout.PageContent>Content Here</Layout.PageContent>
  </Layout>
);

export default SingleNews;
