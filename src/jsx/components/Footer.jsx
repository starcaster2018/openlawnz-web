import React from "react";
import { Link } from "react-router-dom";

import Logo from "-!svg-react-loader?name=Logo!../../img/the-law-foundation-logo.svg";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-items">
				<div className="footer-contact-us">
					<p>Contact Us</p>
					<p>
						<a href="mailto:enquiries@openlaw.nz">enquiries@openlaw.nz</a>
					</p>
					<p>&copy; OpenLaw NZ | Registered NZ Charity</p>
				</div>
				<div className="law-foundation-nav-logo">
					<p>Supported by</p>
					<a href="https://www.lawfoundation.org.nz/">
						<Logo alt="The Law Foundation" className="the-law-foundation-logo" />
					</a>
				</div>
			</div>
		</div>
	);
}
