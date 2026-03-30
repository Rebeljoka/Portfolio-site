import "./Navbar.css";
import logo from "../assets/logo.webp";
import { useLocation, Link } from "react-router-dom";
import BorderGlow from "./BorderGlow";

export default function Navbar() {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={logo} alt="Logo" className="logo" />
			</div>

			<ul className="navbar-menu">
				<li><BorderGlow>
                    <Link className={`navbar-link ${isActive("/") ? "active" : ""}`} to="/">Home</Link>
                </BorderGlow></li>
				<li><BorderGlow>
                    <Link className={`navbar-link ${isActive("/projects") ? "active" : ""}`} to="/projects">Projects</Link>
                </BorderGlow></li>
				<li><BorderGlow>
                    <Link className={`navbar-link ${isActive("/about") ? "active" : ""}`} to="/about">About Me</Link>
                </BorderGlow></li>
				<li><BorderGlow>
                    <Link className={`navbar-link ${isActive("/contact") ? "active" : ""}`} to="/contact">Contact</Link>
                </BorderGlow></li>
			</ul>
		</nav>
	);
}
