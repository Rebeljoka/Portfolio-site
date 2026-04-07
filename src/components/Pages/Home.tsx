import "../../App.css";
import TextType from "../TextType";

export default function Home() {
	return (
		<section className="w-screen h-screen flex justify-center text-white text-center">

            <div className="m-auto">

                <div>
                    <h1 className="text-6xl md:text-9xl lg:text-9xl font-black noselect">Habib Ullah</h1>
                </div>

                <div>
                    <TextType className="text-6xl md:text-9xl lg:text-9xl font-black noselect"
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
