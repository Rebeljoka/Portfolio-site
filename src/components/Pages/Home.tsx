import "../../App.css";
import TextType from "../TextType";

export default function Home() {
	return (
		<section className="w-full min-h-screen mt-128 flex justify-center text-white text-center">
            <div className="Name">
                <div>
                    <h1 className="text-9xl font-black">Habib Ullah</h1>
                </div>
                <div>
                    <TextType className="text-9xl font-black"
                        text={["Software Developer", "Systems Integrator", "Graphics Designer", "Tech Enthusiast", "Video Editor", "Content Creator"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={50}
                        cursorBlinkDuration={0.5}
                    />
                </div>
            </div>
		</section>
	);
    }
