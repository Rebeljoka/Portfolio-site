import "../../App.css";
import Profile from "../../assets/img/W.jpg";

export default function Home() {
	return (
		<section className="About">

            <div className="flex justify-center text-white text-center w-full">
                <div className="w-full">
                    <h1 className="text-6xl md:text-9xl lg:text-9xl font-black mt-64 noselect">Habib Ullah</h1>
                    <img src={Profile} alt="Profile Picture" className="w-64 h-64 rounded-full object-cover object-[35%_35%] mx-auto mt-16 mb-16" />
                </div>
            </div>

		</section>
	);
    }