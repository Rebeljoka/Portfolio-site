import "./Navbar.css";
import logo from "../assets/logo.webp";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>

			<ul className="navbar-menu">
				<li><a className="navbar-link" href="/">Home</a></li>
				<li><a className="navbar-link" href="/projects">Projects</a></li>
				<li><a className="navbar-link" href="/about">About Me</a></li>
				<li><a className="navbar-link" href="/contact">Contact</a></li>
			</ul>
		</nav>
	);
}