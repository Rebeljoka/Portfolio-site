import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here you would typically send the form data to a backend service
		console.log("Form submitted:", formData);
		setSubmitted(true);
		setTimeout(() => {
			setFormData({ name: "", email: "", subject: "", message: "" });
			setSubmitted(false);
		}, 3000);
	};

	const contactInfo = [
		{
			icon: <FaEnvelope className="text-3xl" />,
			title: "Email",
			value: "I will respond within 24-48 hours",
			link: "mailto:habib.u99@googlemail.com",
		},
		{
			icon: <FaLinkedin className="text-3xl" />,
			title: "LinkedIn",
			value: "Your Next Junior Full-Stack Software Developer",
			link: "https://www.linkedin.com/in/your-next-jfssd-habib/",
		},
		{
			icon: <FaGithub className="text-3xl" />,
			title: "GitHub",
			value: "My Projects and Code Repositories",
			link: "https://github.com/Rebeljoka",
		},
	];

	return (
		<section className="Contact text-white min-h-screen mt-44 md:mt-48">
			<div className="flex justify-center">
				<div className="w-full">
					{/* Header Section */}
					<div className="GetInTouch mb-16">
						<div className="max-w-4xl mx-auto mb-6 md:mb-12 lg:mb-24">
							<div className="text-center">
								<h1 className="text-6xl md:text-8xl lg:text-9xl font-black noselect mb-8">Get in Touch</h1>
								<p className="text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.</p>
							</div>
						</div>

						{/* Main Content Grid */}
						<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-6 md:mb-6 lg:mb-12 xl:mb-24">
							{/* Contact Info Cards */}
							{contactInfo.map((item, index) => (
								<a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card group">
									<div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center hover:border-white/40 transition-all duration-300 hover:scale-105">
										<div className="text-white/80 group-hover:text-white mb-6 transition-colors">{item.icon}</div>
										<h3 className="text-2xl font-bold mb-3">{item.title}</h3>
										<p className="text-white/70 group-hover:text-white/90 transition-colors break-all">{item.value}</p>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="flex justify-center">
				<div className="w-full">
					<div className="EmailSection mb-16">
						<div className="mx-auto mb-6 md:mb-12 lg:mb-12">
							<div className="text-center">
								<h1 className="text-6xl md:text-8xl lg:text-9xl font-black noselect mb-8">Prefer Email?</h1>
							</div>
							<div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-10 md:p-16">
								<h2 className="text-4xl md:text-5xl font-bold mb-12">Send a Message</h2>

								{submitted && (
									<div className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-xl">
										<p className="text-green-300 font-semibold">✓ Message sent successfully! I'll get back to you soon.</p>
									</div>
								)}

								<form onSubmit={handleSubmit} className="space-y-6">
									{/* Name Field */}
									<div>
										<label htmlFor="name" className="block text-white/80 font-semibold mb-3">
											Your Name
										</label>
										<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300" placeholder="Full Name" />
									</div>

									{/* Email Field */}
									<div>
										<label htmlFor="email" className="block text-white/80 font-semibold mb-3">
											Your Email
										</label>
										<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300" placeholder="example@example.com" />
									</div>

									{/* Subject Field */}
									<div>
										<label htmlFor="subject" className="block text-white/80 font-semibold mb-3">
											Subject
										</label>
										<input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300" placeholder="Project Inquiry" />
									</div>

									{/* Message Field */}
									<div>
										<label htmlFor="message" className="block text-white/80 font-semibold mb-3">
											Message
										</label>
										<textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300 resize-none" placeholder="Tell me about your project or idea..." />
									</div>

									{/* Submit Button */}
									<button type="submit" className="w-full mt-8 px-8 py-4 bg-linear-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 hover:border-white/50 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group">
										Send Message
										<HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="flex justify-center">
				<div className="w-full">
					<div className="CTA">
						<div className="mx-auto text-center">
							<div className="bg-linear-to-r from-white/5 to-white/5 border border-white/20 rounded-2xl p-12">
								<h3 className="text-6xl md:text-8xl lg:text-9xl font-black noselect mb-8">Prefer Direct Contact?</h3>
								<p className="text-md md:text-3xl font-light max-w-2xl mx-auto leading-relaxed mb-4">Feel free to reach out on any of my social platforms or send an email directly. I'm always open to interesting projects and collaboration opportunities.</p>
								<div className="flex justify-center gap-6">
									<a href="https://github.com/Rebeljoka" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-110">
										<FaGithub className="sm:text-2xl md:text-4xl lg:text-6xl" />
									</a>
									<a href="https://linkedin.com/in/habibu" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-110">
										<FaLinkedin className="sm:text-2xl md:text-4xl lg:text-6xl" />
									</a>
									<a href="mailto:habib@example.com" className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-110">
										<FaEnvelope className="sm:text-2xl md:text-4xl lg:text-6xl" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
