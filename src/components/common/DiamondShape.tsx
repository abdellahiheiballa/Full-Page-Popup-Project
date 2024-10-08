import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const DiamondShape: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const FADE_OUT_DELAY = 0.7; // Control fade-out timing
	const DIAMOND_ANIMATION_DURATION = 2.1; // Duration of diamond animation
	const BLUR_AMOUNT = 7; // Amount of blur for the diamond shape
	const ANIMATION_START_DELAY = 0.8; // Delay before the animation starts

	const MotionBox = motion(Box); // Motion-enabled Box

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true); // Show the diamond shape after delay
		}, ANIMATION_START_DELAY * 1000); // Adjust delay for appearance timing

		const fadeOutTimer = setTimeout(() => {
			setIsVisible(false); // Hide the diamond shape after fade-out delay
		}, (FADE_OUT_DELAY + ANIMATION_START_DELAY) * 1000); // Adjust timing for fade-out effect

		return () => {
			clearTimeout(timer);
			clearTimeout(fadeOutTimer);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<MotionBox
			zIndex="10"
			position="fixed"
			top="40%" // Center vertically
			left="43%" // Center horizontally
			width={{ base: "150px", md: "180px", lg: "100px" }} // Square width
			height={{ base: "150px", md: "180px", lg: "100px" }} // Square height
			borderRadius="5%" // Slight rounded corners to make it diamond-like
			bg="radial-gradient(circle, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%)" // Glowing effect
			border="7px solid transparent" // Transparent border to show gradient
			backgroundImage="linear-gradient(white, white), linear-gradient(to right, rgb(255, 255, 0), rgb(255, 255, 255))" // Gradient border
			initial={{
				opacity: 0,
				scale: 0.8,
				filter: "blur(10px)",
				rotate: 45, // Rotate to form a diamond shape
			}} // Start with motion blur and hidden
			animate={{
				opacity: [0.4, 1, 1, 0], // Fade in and out
				scale: [0.1, 1.2, 2.6], // Scale up slightly and down
				filter: [
					`blur(${BLUR_AMOUNT}px)`,
					`blur(${BLUR_AMOUNT}px)`,
					`blur(${BLUR_AMOUNT}px)`,
					`blur(${BLUR_AMOUNT}px)`,
				], // Blur effect
				rotate: 45, // Maintain diamond shape
			}}
			transition={{
				duration: DIAMOND_ANIMATION_DURATION, // Total animation duration
				ease: "easeInOut",
				times: [0, 0.4, 0.6, 1], // Time points for keyframes
			}}
		/>
	);
};
