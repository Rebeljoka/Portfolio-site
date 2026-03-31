import "../../App.css";
import TextType from "../TextType";

export default function Home() {
	return (
		<div className="w-full min-h-screen flex mt-100 justify-center text-white">
			<h1 className="text-9xl font-black">Habib Ullah</h1>
            <h1 className="text-9xl font-black px-8">|</h1>
            <TextType className="text-9xl font-black"
                text={["Software Developer", "Systems Integrator", "Graphics Designer", "Tech Enthusiast"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
            />
		</div>
	);
    }
