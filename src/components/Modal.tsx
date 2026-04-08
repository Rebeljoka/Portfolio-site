import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/50 z-40"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						onClick={onClose}
					>
						<div
							className="rounded-[40px] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
							style={{
								backdropFilter: "blur(22px)",
								WebkitBackdropFilter: "blur(22px)",
								background: "rgba(255, 255, 255, 0.12)",
								border: "1px solid rgba(255, 255, 255, 0.25)",
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex justify-between items-center p-6 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}>
								<h2 className="text-2xl font-bold text-white">{title}</h2>
								<button
									onClick={onClose}
									className="text-white/60 hover:text-white transition-colors"
								>
									✕
								</button>
							</div>
							<div className="p-6 text-white/90">
								{children}
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
