import "../../App.css";
import TiltedCard from '../TiltedCard';

export default function Projects() {
	return (
		<section className="w-screen h-screen flex justify-center text-white text-center">
            <div  className="m-auto">
                <div>
                    <h1 className="text-6xl md:text-9xl lg:text-9xl font-black mt-64 2xl:mt-0">Web Development Projects</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 [@media(min-width:768px)_and_(max-width:1280px)]:grid-cols-2 xl:grid-cols-4 gap-8 mt-24 mx-auto max-w-fit">
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
		</section>
	);
}
