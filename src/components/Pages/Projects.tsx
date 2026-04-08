import "../../App.css";
import { useState } from "react";
import BlueNeon from "../../assets/img/Graphics/BlueNeon-OMGScorpion.png";
import FadeVision from "../../assets/img/Graphics/FadeVision.png";
import LogoAutoAttar from "../../assets/img/Graphics/LogoAutoAttar.png";
import TomVose from "../../assets/img/Graphics/TomVose.png";
import RedRebel from "../../assets/img/Graphics/Rebeljoka-red.png";
import VDelight from "../../assets/img/Graphics/VapersDelight.png";
import LOS from "../../assets/img/Graphics/LifeOfScorpion.png";
import OJ from "../../assets/img/Graphics/OJ.png";
import Icon from "../../assets/img/Graphics/Steam.png";
import Gold from "../../assets/img/Graphics/gold.png";
import Seats from "../../assets/img/Graphics/Seats.jpg";
import TiltedCard from '../TiltedCard';
import Masonry from "../Masonry";
import Modal from "../Modal";

const projectDetails = [
	{
		id: "1",
		title: "Const Collection | Art By Cecilia K.",
		description: "Collaboratively as a 4-person team we developed a responsive art gallery and online store featuring dynamic artwork listings, artist profiles, and secure checkout functionality. Implemented a Django backend with PostgreSQL (NeonDB) for relational data management and Cloudinary for optimized media handling. Integrated Django Allauth for role-based authentication (visitor, site owner, admin). Delivered a mobile-first, accessible UI using Bootstrap and custom CSS. Deployed to Heroku with environment-specific configurations for scalability and maintainability. As repository owner, managed Git workflows, handled merge requests, and resolved version control conflicts to ensure consistent, production- ready releases. Stripe payments are utilised for selling of artworks.",
		image: "https://mind-embodyy-spirit-92af4b6525c8.herokuapp.com/static/images/Logo.webp",
		deployedLink: "https://mind-embodyy-spirit-92af4b6525c8.herokuapp.com",
		githubLink: "https://github.com/Rebeljoka/Mind-Embodyy-Spirit",
		tech: ["Django", "PostgreSQL", "Cloudinary", "Bootstrap", "Stripe API", "Git, GitHub", "Heroku", "JavaScript", "Tailwind CSS"],
	},
	{
		id: "2",
		title: "Backlog Wishlyst",
		description: "Developed a full-stack Steam game wishlist platform enabling users to create, reorder, and track games in real time. Designed a responsive pastel-themed UI, integrated Steam API for dynamic game data, and deployed on Heroku with a PostgreSQL backend and Cloudinary media management. Implemented user authentication, real-time updates with WebSockets, and secure data handling. As repository owner, managed Git workflows, handled merge requests, and resolved version control conflicts to ensure consistent, production-ready releases.",
		image: "https://backlog-wishlyst-70712188933f.herokuapp.com/static/favicon.0bc0cc5ba511.svg",
		deployedLink: "https://backlog-wishlyst-70712188933f.herokuapp.com",
		githubLink: "https://github.com/Rebeljoka/Capstone-Project---Backlog",
		tech: ["React", "Node.js", "MongoDB", "Express", "WebSockets", "Cloudinary", "Heroku", "Git, GitHub", "JavaScript", "Tailwind CSS", "Steam API", "API Integration", "Agile Methodologies", "Version Control", "Project Management", "Real-Time Updates", "User Authentication", "Responsive Design"],
	},
	{
		id: "3",
		title: "Spock It To Me",
		description: "Led a team of four in a 48-hour hackathon to deliver a JavaScript-based Rock-Paper-Scissors-Lizard-Spock game. Applied agile methodologies including daily stand-ups, sprint planning, and iterative feedback cycles—serving as de facto Scrum Master. Architected modular game logic and animated UI transitions, ensuring responsive design and cross-browser compatibility. Used Git for version control and collaborative branching, delivering a polished MVP under tight deadlines. The game features dynamic animations, sound effects, and a user-friendly interface, showcasing effective teamwork and rapid development skills.",
		image: "https://github.com/Rebeljoka/Spock-It-To-Me/blob/main/assets/favicon/android-chrome-512x512.png?raw=true",
		deployedLink: "https://rebeljoka.github.io/Spock-It-To-Me/",
		githubLink: "https://github.com/Rebeljoka/Spock-It-To-Me",
		tech: ["JavaScript", "HTML", "Bootstrap", "Git, GitHub", "Agile Methodologies", "Game Development", "UI/UX Design", "Version Control", "Team Leadership", "Collaboration", "Responsive Design", "Cross-Browser Compatibility", "Animation", "Sound Integration", "Project Management", "Rapid Prototyping", "Agile Development"],
	},
	{
		id: "4",
		title: "Quiet Bloom",
		description: "Developed a responsive, accessibility-first web app using HTML, CSS, and JavaScript to promote mental health literacy. Applied semantic markup and WCAG-compliant design, improving cross-device readability and inclusive engagement by 30%. ",
		image: "https://github.com/Rebeljoka/mental-health-awareness/blob/main/assets/favicons/android-chrome-512x512.png?raw=true",
		deployedLink: "https://rebeljoka.github.io/mental-health-awareness/index.html",
		githubLink: "https://github.com/Rebeljoka/mental-health-awareness",
		tech: ["HTML", "CSS", "JavaScript", "Accessibility", "Responsive Design", "UI/UX Design", "Mental Health Awareness", "Web Development", "Inclusive Design", "Cross-Device Compatibility", "Semantic Markup", "User Engagement", "Project Management", "Agile Methodologies", "Version Control", "Git, GitHub"],
	},
];

const items = [
    {
        id: "1",
        img: BlueNeon,
        height: 400,
    },
    {
        id: "2",
        img: FadeVision,
        height: 250,
    },
    {
        id: "3",
        img: LogoAutoAttar,
        height: 600,
    },
    {
        id: "4",
        img: TomVose,
        height: 350,
    },
    {
        id: "5",
        img: RedRebel,
        height: 400,
    },
    {
        id: "6",
        img: VDelight,
        height: 400,
    },
    {
        id: "7",
        img: LOS,
        height: 400,
    },
    {
        id: "8",
        img: OJ,
        height: 400,
    },
    {
        id: "9",
        img: Icon,
        height: 400,
    },
    {
        id: "10",
        img: Gold,
        height: 400,
    },
    {
        id: "11",
        img: Seats,
        height: 400,
    }
];


export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<string | null>(null);
	const project = projectDetails.find(p => p.id === selectedProject);

	return (
		<section className="Projects">
			<Modal
				isOpen={!!selectedProject}
				onClose={() => setSelectedProject(null)}
				title={project?.title || ""}
			>
				{project && (
					<div className="space-y-4">
						<img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
						<p className="text-base">{project.description}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{project.tech.map(tech => (
								<span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-3">
							<a
								href={project.deployedLink}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
							>
								Visit Site →
							</a>
							{project.githubLink && (
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
								>
									Repository
								</a>
							)}
						</div>
					</div>
				)}
			</Modal>

            <div className="flex justify-center text-white text-center w-full">
                <div className="w-full">
                    <div>
                        <h1 className="text-6xl md:text-9xl lg:text-9xl font-black mt-64 noselect">Web Development Projects</h1>
                    </div>
                    <div className="grid w-full justify-items-center grid-cols-1 lg:grid-cols-2 projects-grid xl:grid-cols-4 gap-24 my-24">
                        <div>
                            <TiltedCard
                                imageSrc="https://mind-embodyy-spirit-92af4b6525c8.herokuapp.com/static/images/Logo.webp"
                                altText="Const Collection | Art By Cecilia K."
                                captionText="Const Collection | Art By Cecilia K."
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip
                                displayOverlayContent
                                overlayContent={
                                    <p className="tilted-card-demo-text mix-blend-difference">
                                    Const Collection | Art By Cecilia K.
                                    </p>
                                }
                                onClick={() => setSelectedProject("1")}
                            />
                        </div>

                        <div>
                            <TiltedCard
                                imageSrc="https://backlog-wishlyst-70712188933f.herokuapp.com/static/favicon.0bc0cc5ba511.svg"
                                altText="Backlog Wishlyst"
                                captionText="Backlog Wishlyst"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip
                                displayOverlayContent
                                overlayContent={
                                    <p className="tilted-card-demo-text mix-blend-difference">
                                    Backlog Wishlyst
                                    </p>
                                }
                                onClick={() => setSelectedProject("2")}
                            />
                        </div>

                        <div>
                            <TiltedCard
                                imageSrc="https://github.com/Rebeljoka/Spock-It-To-Me/blob/main/assets/favicon/android-chrome-512x512.png?raw=true"
                                altText="Spock It To Me"
                                captionText="Spock It To Me"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip
                                displayOverlayContent
                                overlayContent={
                                    <p className="tilted-card-demo-text mix-blend-difference">
                                    Spock It To Me
                                    </p>
                                }
                                onClick={() => setSelectedProject("3")}
                            />
                        </div>

                        <div>
                            <TiltedCard
                                imageSrc="https://github.com/Rebeljoka/mental-health-awareness/blob/main/assets/favicons/android-chrome-512x512.png?raw=true"
                                altText="Quiet Bloom"
                                captionText="Quiet Bloom"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip
                                displayOverlayContent
                                overlayContent={
                                    <p className="tilted-card-demo-text mix-blend-difference">
                                    Quiet Bloom
                                    </p>
                                }
                                onClick={() => setSelectedProject("4")}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-white text-center w-full">
                <div className="w-full mx-auto px-4 md:px-8">
                    <div>
                        <h1 className="text-6xl md:text-9xl lg:text-9xl font-black mt-64 noselect">Graphics Design Projects</h1>
                    </div>
                    <div className="w-full my-24 graphics-container">
                        <Masonry
                            items={items}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover
                            hoverScale={0.95}
                            blurToFocus
                            colorShiftOnHover={false}
                        />
                    </div>
                </div>
            </div>

            <div className="text-white text-center w-full">
                <div className="w-full mx-auto px-4 md:px-8">
                    <div>
                        <h1 className="text-6xl md:text-9xl lg:text-9xl font-black mt-64 noselect">Content Creation</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-24">
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/30">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/kA4-X7btIsg"
                                title="Channel Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/30">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/KCtqFTRqe6I"
                                title="Indie Film Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/30">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/DgEBYqIx3RA"
                                title="Rainbow Six Siege Montage"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/30">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/Dnihkl0EkxQ"
                                title="IRL go-karting video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    
                </div>
            </div>

		</section>
	);
}
