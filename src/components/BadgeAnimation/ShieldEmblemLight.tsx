import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DiamondShape } from "./DiamondShape";

const MotionBox = motion(Box); // Motion-enabled Box

// Shield Emblem JSX
const ShieldEmblemLight = () => {
	return (
		<>
			{/* Diamond Shape Transition */}

			<MotionBox
				position="fixed" // Use fixed positioning to center the emblem
				top="30%" // Center vertically
				left="37%" // Center horizontally
				transform="translate(-50%, -50%)" // Adjust position to center the shape
				as="img"
				src="/images/shieldbg.png"
				alt="Level Up Emblem"
				boxSize={{ base: "143px", md: "182px", lg: "202px" }} // Responsive sizes
				objectFit="contain"
				zIndex="6"
				initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }} // Initial state
				animate={{
					opacity: [0, 1, 1, 0], // Fade in and out
					scale: [1, 1.1, 1.24], // Beat effect
					filter: ["blur(5px)", "blur(0)", "blur(0)", "blur(5px)"], // Blur effect
				}}
				transition={{
					duration: 2, // Total duration of the animation
					delay: 0.5, // Delay before the animation starts
					ease: "easeInOut",
					times: [0, 0.4, 0.55, 1], // Time points for each value in animate
				}}
			/>
		</>
	);
};

export default ShieldEmblemLight;
