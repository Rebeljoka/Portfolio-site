import { useEffect, useState } from "react";

// Breakpoint values that match Tailwind CSS breakpoints
// Used to determine when to change logo sizes based on screen width
const breakpoints = {
	sm: 640, // Small screens
	md: 768, // Medium screens (tablets)
	lg: 1024, // Large screens (desktops)
	xl: 1280, // Extra large screens
	"2xl": 1536, // 2XL screens (large desktops)
};

/**
 * Custom hook to get responsive logo height based on screen size
 * Returns a number that changes automatically when the window is resized
 *
 * Logo sizes:
 * - Under 768px (small): 40px
 * - 768px to 1024px (medium): 50px
 * - 1024px to 1280px (large): 60px
 * - 1280px and above (xl+): 80px
 */
export function useResponsiveView() {
	// Start with 60px as the default size
	const [logoHeight, setLogoHeight] = useState(60);
    const [gap, setGap] = useState(60);

	// Set up event listener to detect screen size changes
	useEffect(() => {
		// Function that checks current window width and updates logo height
		const handleResize = () => {
			const width = window.innerWidth;

			// Determine logo height based on current screen width
			if (width < breakpoints.md) {
				setLogoHeight(30); // Small screens
                setGap(30);
			} else if (width < breakpoints.lg) {    
				setLogoHeight(40); // Medium screens
                setGap(40);
			} else if (width < breakpoints.xl) {
				setLogoHeight(50); // Large screens
                setGap(50);
			} else {
				setLogoHeight(60); // Extra large screens
                setGap(60);
            }
		};

		// Run immediately on component mount to set correct size for current screen
		handleResize();

		// Listen for window resize events and update size when screen changes
		window.addEventListener("resize", handleResize);

		// Cleanup: remove event listener when component unmounts to prevent memory leaks
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty dependency array means this runs once on mount

	// Return the current logo height value
	return {logoHeight, gap};
}
