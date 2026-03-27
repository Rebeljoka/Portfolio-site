import "./Navbar.css";
import logo from "../assets/logo.webp";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className="navbar">
			<div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>

			<ul className="navbar-menu">
				<li><Link className={`navbar-link ${isActive("/") ? "active" : ""}`} to="/">Home</Link></li>
				<li><Link className={`navbar-link ${isActive("/projects") ? "active" : ""}`} to="/projects">Projects</Link></li>
				<li><Link className={`navbar-link ${isActive("/about") ? "active" : ""}`} to="/about">About Me</Link></li>
				<li><Link className={`navbar-link ${isActive("/contact") ? "active" : ""}`} to="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}