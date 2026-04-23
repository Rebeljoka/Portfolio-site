import React from "react";
import { useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<footer className={`footer ${isHomePage ? "footer-fixed-home" : ""}`}>
			<div className="footer-content">
				<div className="footer-section Social">
					<h3 className="noselect">Social</h3>
					<ul>
						<li>
							<a href="https://github.com/Rebeljoka" target="_blank" rel="noopener noreferrer">
								<FaGithub /> GitHub
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/your-next-jfssd-habib/" target="_blank" rel="noopener noreferrer">
								<FaLinkedin /> LinkedIn
							</a>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3 className="noselect">Contact</h3>
					<ul>
						<li>
							<a href="mailto:habib.u99@googlemail.com">
								<IoIosMail /> Response Time: 24-48 hours
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<p>&copy; {currentYear} Habib 'Rebel Joka' Ullah. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
