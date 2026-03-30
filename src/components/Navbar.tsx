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
				<li>
					<BorderGlow edgeSensitivity={30} glowColor="40 80 80" backgroundColor="transparent" borderRadius={20} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} colors={["#c084fc", "#f472b6", "#38bdf8"]}>
						<Link className={`navbar-link ${isActive("/") ? "active" : ""}`} to="/">
							Home
						</Link>
					</BorderGlow>
				</li>
				<li>
					<BorderGlow edgeSensitivity={30} glowColor="40 80 80" backgroundColor="transparent" borderRadius={20} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} colors={["#c084fc", "#f472b6", "#38bdf8"]}>
						<Link className={`navbar-link ${isActive("/projects") ? "active" : ""}`} to="/projects">
							Projects
						</Link>
					</BorderGlow>
				</li>
				<li>
					<BorderGlow edgeSensitivity={30} glowColor="40 80 80" backgroundColor="transparent" borderRadius={20} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} colors={["#c084fc", "#f472b6", "#38bdf8"]}>
						<Link className={`navbar-link ${isActive("/about") ? "active" : ""}`} to="/about">
							About Me
						</Link>
					</BorderGlow>
				</li>
				<li>
					<BorderGlow edgeSensitivity={30} glowColor="40 80 80" backgroundColor="transparent" borderRadius={20} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} colors={["#c084fc", "#f472b6", "#38bdf8"]}>
						<Link className={`navbar-link ${isActive("/contact") ? "active" : ""}`} to="/contact">
							Contact
						</Link>
					</BorderGlow>
				</li>
			</ul>
		</nav>
	);
}
