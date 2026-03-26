import "./App.css";
import Iridescence from "./components/Iridescence";

function App() {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<Iridescence color={[1, 1, 1]} speed={1} amplitude={0.1} mouseReact />

			<div className="relative z-10 text-white">
				<h1>Hello world</h1>
			</div>
		</div>
	);
}

export default App;
