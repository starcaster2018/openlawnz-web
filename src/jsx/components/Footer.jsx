import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-items">
				<ul>
					<li><Link to="/plugins">Plugins</Link></li>
					<li><a href="https://github.com/openlawnz" target="_blank">GitHub</a></li>
					<li><Link to="/sponsors">Sponsors</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</div>
    )
}
