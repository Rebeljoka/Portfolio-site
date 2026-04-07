import "../../App.css";
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
	return (
		<section className="Projects">
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
