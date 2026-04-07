import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Iridescence from "./components/Iridescence";
import Navbar from "./components/Navbar";

// Placeholder pages - replace with your actual components
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About-me";
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
			<Analytics />
		</Router>
	);
}

export default App;
