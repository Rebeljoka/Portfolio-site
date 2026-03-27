import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iridescence from "./components/Iridescence";
import Navbar from "./components/Navbar";

// Placeholder pages - replace with your actual components
const Home = () => <div>Home Page</div>;
const Projects = () => <div>Projects Page</div>;
const About = () => <div>About Me Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
	return (
		<Router>
			<Iridescence color={[0.5, 0.6, 0.8]} mouseReact amplitude={0.1} speed={1} />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
