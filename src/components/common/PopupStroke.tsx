import { Box, Flex } from "@chakra-ui/react"; // Import Box and Flex from Chakra UI
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box); // Motion-enabled Box

const PopupStroke: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true); // State to manage visibility

	// Define initial and final states for the animation
	const initialStyle = {
		borderRadius: "25px",
		border: "3px solid #d6b923",
		opacity: 0,
		boxShadow: "0px 0px 10px rgba(214, 185, 35, 0.7)",
		width: "34%",
		height: "36%",
	};

	const finalStyle = {
		borderRadius: "35px",
		border: "5px solid #d6b923",
		opacity: 1,
		boxShadow: "0px 0px 10px rgba(214, 185, 35, 0.7)",
		width: "94%",
		height: "94%",
	};

	// Function to handle animation completion
	const handleAnimationComplete = () => {
		setIsVisible(false); // Hide the component after animation completes
	};

	useEffect(() => {
		// Set a timeout to call the completion handler after animation duration
		const timer = setTimeout(() => {
			handleAnimationComplete();
		}, 2000); // 2 seconds delay after the animation duration

		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);

	// If not visible, return null to not render the component
	if (!isVisible) {
		return null;
	}

	return (
		<Flex
			align="center" // Center items vertically
			justify="center" // Center items horizontally
			position="fixed" // Use fixed positioning to cover the viewport
			top={0} // Align to the top
			left={0} // Align to the left
			right={0} // Align to the right
			bottom={0} // Align to the bottom
			zIndex={1000} // Ensure it's on top of other elements
		>
			{/* First onion skin */}
			<MotionBox
				initial={{ ...initialStyle, opacity: 0 }} // Slightly more opaque
				animate={{ ...finalStyle, opacity: 0.5 }} // Animate to invisible
				transition={{
					duration: 1.1,
					ease: "easeInOut",
				}}
				position="absolute" // Use absolute positioning
			/>

			{/* Second onion skin */}
			<MotionBox
				initial={{ ...initialStyle, opacity: 0 }} // More transparent
				animate={{ ...finalStyle, opacity: 0.3 }} // Animate to invisible
				transition={{
					duration: 1.2, // Slightly longer duration for the second skin
					ease: "easeInOut",
				}}
				position="absolute" // Use absolute positioning
			/>

			{/* Main animated box */}
			<MotionBox
				initial={initialStyle} // Set initial style
				animate={finalStyle} // Set final style
				transition={{
					duration: 1, // Total duration of 1 second for the animation
					ease: "easeInOut", // Smooth in and out
				}}
				position="absolute" // Use absolute positioning
			/>
		</Flex>
	);
};

export default PopupStroke;
