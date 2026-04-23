import logo from "../assets/img/logo.webp";
import { useLocation, Link } from "react-router-dom";
import BorderGlow from "./BorderGlow";
import { PiHouseLineBold, PiBlueprintBold, PiUserBold, PiAddressBookBold } from "react-icons/pi";

export default function Navbar() {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className="navbar text-center">

			<img src={logo} alt="Logo" className="logo" />

			<ul className="navbar-menu flex">
				<li>
                    <BorderGlow>
                        <Link className={`navbar-link ${isActive("/") ? "active" : ""}`} to="/">
                            <PiHouseLineBold className="mt-1.25 mr-1"/>
                                <span>Home</span>
                        </Link>
                    </BorderGlow>
                </li>
				<li>
                    <BorderGlow>
                        <Link className={`navbar-link ${isActive("/projects") ? "active" : ""}`} to="/projects">
                            <PiBlueprintBold className="mt-1.25 mr-1"/>
                                <span>Projects</span>
                        </Link>
                    </BorderGlow>
                </li>
				<li>
                    <BorderGlow>
                        <Link className={`navbar-link ${isActive("/about") ? "active" : ""}`} to="/about">
                            <PiUserBold className="mt-1.25 mr-1"/>
                            <span>About Me</span>
                        </Link>
                    </BorderGlow>
                </li>
				<li>
                    <BorderGlow>
                        <Link className={`navbar-link ${isActive("/contact") ? "active" : ""}`} to="/contact">
                            <PiAddressBookBold className="mt-1.25 mr-1"/>
                            <span>Contact</span>
                        </Link>
                    </BorderGlow>
                </li>
			</ul>

		</nav>
	);
}
