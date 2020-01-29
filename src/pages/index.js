import React from "React";
import Mission from "../jsx/components/Mission";
import ContactUs from "../jsx/components/ContactUs";
import News from "../jsx/components/News";
import Layout from "../jsx/components/Layout";
import InfoCard from "../jsx/components/InfoCard";
import InfoCardUnit from "../jsx/components/InfoCardUnit";

const Index = () => (
  <Layout>
    <Layout.SpecialHeading>
      OpenLaw NZ is a new, free legal research platform for New Zealand.
    </Layout.SpecialHeading>
    <Layout.Search />

    <InfoCard>
      <InfoCardUnit one="30,141" two="CASES" />
      <div className="border"></div>
      <InfoCardUnit one="25,208" two="CASE-TO-CASE RELATIONSHIPS" />
      <div className="border"></div>
      <InfoCardUnit one="346,395" two="CASE-TO-LEGISLATION RELATIONSHIPS" />
    </InfoCard>

    <div className="page-wrapper">
      <Mission />
      <News />
      <ContactUs />
    </div>
  </Layout>
);

export default Index;
