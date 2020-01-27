import React from "React";
import Mission from "../jsx/components/Mission";
import ContactUs from "../jsx/components/ContactUs";
import News from "../jsx/components/News";
import Layout from "../jsx/components/Layout";

const Index = props => (
	<Layout path={props.path} heading="OpenLaw NZ is a new, free legal research platform for New Zealand.">
		<div className="home-wrapper">
			<Mission />
			<News />
			<ContactUs />
		</div>
	</Layout>
);

export default Index;
