import "../../App.css";
import { useState } from "react";
import Profile from "../../assets/img/profile.jpg";
import LogoLoop from "../LogoLoop";
import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaGithub, } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiTypescript, SiVite, SiVercel, SiCloudflare, SiHeroku, SiPostgresql, SiMongodb, } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const FELogos = [
	{ node: <FaHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ node: <FaCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ node: <FaReact />, title: "React", href: "https://react.dev" },
	{ node: <FaVuejs />, title: "Vue", href: "https://vuejs.org" },
	{ node: <FaBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
	{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
];

const BELogos = [
	{ node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
	{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
	{ node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
	{ node: <FaPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
];

const ToolsLogos = [
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiCloudflare />, title: "Cloudflare", href: "https://www.cloudflare.com" },
    { node: <SiHeroku />, title: "Heroku", href: "https://www.heroku.com" },
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
    { node: <FaGithub />, title: "GitHub", href: "https://github.com" },
    { node: <BiLogoVisualStudio />, title: "Visual Studio Code", href: "https://code.visualstudio.com" },
];

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
							<p className="text-2xl md:text-4xl lg:text-4xl font-black noselect mt-8 mx-8">Hi, I'm a UK-based Full-Stack Web Developer and community leader who thrives exactly where logic meets creativity. I specialize in bridging visually engaging UI/UX design with robust backend architecture using React, Django, Python, and Tailwind CSS. From architecting comprehensive full-stack applications like Mind-Embodyy-Spirit to developing elegant platforms for freelance art clients, I don't just write code—I build scalable digital ecosystems. Beyond development, I am the founder of Future Coders, where I organize dynamic hackathons and build custom team-judging systems to bring tech communities together. Whether I'm designing custom vector graphics or deep in a late-night debugging session, I bring a unique blend of creative vision and technical problem-solving to everything I build on the modern web.</p>
						</div>

						<div className={`col-span-2 expand-indicator-wrapper ${isExpanded ? "expanded" : ""}`}>
							<div className={`expand-indicator ${isExpanded ? "expanded" : ""}`}>▼</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center text-white">
				<div className="w-full">
					<div className="tech-stack-container mx-4">
						<div className="flex justify-center text-white">
							<h2 className="text-4xl md:text-6xl lg:text-8xl font-bold noselect mt-16 mb-8">Tech Stack</h2>
						</div>
						<div className="flex flex-wrap gap-8 mb-16">
							<div className="tech-item w-full">
								<h3 className="text-6xl font-bold mb-4 pb-4">Frontend</h3>
								<div className="LogoLoop-container">
									<LogoLoop logos={FELogos} speed={100} direction="left" logoHeight={60} gap={60} hoverSpeed={110} scaleOnHover fadeOut fadeOutColor="rgba(0, 0, 0, 0)" ariaLabel="Frontend Tech stack" />
								</div>
							</div>
							<div className="tech-item w-full">
								<h3 className="text-6xl font-bold mb-4 pb-4 text-right">Backend</h3>
								<div className="LogoLoop-container">
                                    <LogoLoop logos={BELogos} speed={100} direction="right" logoHeight={60} gap={60} hoverSpeed={110} scaleOnHover fadeOut fadeOutColor="rgba(0, 0, 0, 0)" ariaLabel="Backend Tech stack" />
                                </div>
							</div>
                            <div className="tech-item w-full">
                                <h3 className="text-6xl font-bold mb-4 pb-4">Tools & Platforms</h3>
                                <div className="LogoLoop-container">
                                    <LogoLoop logos={ToolsLogos} speed={100} direction="left" logoHeight={60} gap={60} hoverSpeed={110} scaleOnHover fadeOut fadeOutColor="rgba(0, 0, 0, 0)" ariaLabel="Tools and Platforms" />
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
