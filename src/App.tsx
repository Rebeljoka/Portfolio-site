import "./App.css";
import Iridescence from "./components/Iridescence";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Iridescence color={[0.5, 0.6, 0.8]} mouseReact amplitude={0.1} speed={1} />
            <Navbar />
		</>
	);
}

export default App;
