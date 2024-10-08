import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box); // Motion-enabled Box

// Shield Emblem JSX
const ShieldEmblemfadein = () => {
	const TIME_MS = 1000;
	const FADE_IN_DELAY_SECONDS = 0.6; // Delay before fade-in starts
	const FADE_IN_DURATION_SECONDS = 0.3; // Duration of fade-in animation
	const APPLY_BLUR_FILTER_TIMER_SECONDS = 1; // Timer for applying blur effect

	const ANIMATION_DISPEAR_TIMER_SEONCDS = 1.3;

	const [isVisible, setIsVisible] = useState(false); // Track visibility

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true); // Set to visible after delay
		}, FADE_IN_DELAY_SECONDS * TIME_MS); // Convert seconds to milliseconds

		// Timer to make the component disappear after total duration
		const disappearTimer = setTimeout(() => {
			setIsVisible(false); // Set to invisible after total display duration
		}, ANIMATION_DISPEAR_TIMER_SEONCDS * TIME_MS); // Convert seconds to milliseconds3

		return () => {
			clearTimeout(timer);
			clearTimeout(disappearTimer);
		}; // Clear timer if component unmounts
	}, []);

	if (!isVisible) {
		return null; // Don't render anything until delay is over
	}

	return (
		<MotionBox
			position={"absolute"}
			//top="15%" // Center vertically
			transform="translate(-50%, -50%)" // Adjust position to center
			as="img"
			src="/images/shield.png"
			alt="Level Up Emblem"
			boxSize="850px" // Original size
			objectFit="contain"
			zIndex="6"
			initial={{
				opacity: 0.1,
				scale: 1.5,
				filter: "blur(0px)", // Start with no blur
			}}
			animate={{
				opacity: 1, // Fade out to 0 opacity
				scale: 0.27,
				filter: "blur(20px)", // Increase blur as it fades out
			}}
			transition={{
				opacity: { duration: FADE_IN_DURATION_SECONDS, delay: 0 }, // Fade-out timing
				scale: { duration: FADE_IN_DURATION_SECONDS, delay: 0 }, // Scale timing
				filter: { duration: APPLY_BLUR_FILTER_TIMER_SECONDS, delay: 0 }, // Blur effect timing
			}}
		/>
	);
};

export default ShieldEmblemfadein;
