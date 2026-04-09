import "../../App.css";
import { useState } from "react";
import Profile from "../../assets/img/profile.jpg";

export default function Home() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<section className="About">

            <div className="flex justify-center text-white">
                <div className="w-full">
                    <div className={`grid grid-flow-col grid-rows-3 gap-4 mt-64 mb-4 mx-4 ${isExpanded ? "expanded" : ""}`} onClick={() => setIsExpanded(!isExpanded)}>

                        <div className="row-span-3">
                            <img src={Profile} alt="Profile Picture" className="w-128 h-128 rounded-full object-cover object-[45%_35%] 2xl:mx-16 mt-16 mb-16 mx-auto" />
                        </div>

                        <div className="col-span-2 flex">
                            <h1 className="text-6xl md:text-9xl lg:text-9xl font-black noselect mt-auto">Habib Ullah</h1>
                        </div>

                        <div className="col-span-2 row-span-2">
                            <p className="text-2xl md:text-4xl lg:text-4xl font-black noselect mt-8 mx-8">
                                Hi, I'm a UK-based Full-Stack Web Developer and community leader who thrives exactly where logic meets creativity. I specialize in bridging visually engaging UI/UX design with robust backend architecture using React, Django, Python, and Tailwind CSS.
                                From architecting comprehensive full-stack applications like Mind-Embodyy-Spirit to developing elegant platforms for freelance art clients, I don't just write code—I build scalable digital ecosystems. Beyond development, I am the founder of Future Coders, where I organize dynamic hackathons and build custom team-judging systems to bring tech communities together.
                                Whether I'm designing custom vector graphics or deep in a late-night debugging session, I bring a unique blend of creative vision and technical problem-solving to everything I build on the modern web.
                            </p>
                        </div>

                        <div className={`col-span-2 expand-indicator-wrapper ${isExpanded ? "expanded" : ""}`}>
                            <div className={`expand-indicator ${isExpanded ? "expanded" : ""}`}>
                                ▼
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex justify-center text-white">
                <div className="w-full">
                </div>
            </div>

		</section>
	);
    }