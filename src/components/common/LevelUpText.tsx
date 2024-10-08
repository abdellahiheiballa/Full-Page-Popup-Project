import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionText = motion(Text);

export const LevelUpText: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const LEVEL_UP_TEXT = "LEVEL UP"; // The text we want to animate

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true); // Show the "Level Up" text after delay
		}, 1000); // Adjust the delay to match the wave effect

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<Box
			position="absolute"
			top="24%" // Center vertically
			left="50%" // Center horizontally
			transform="translate(-50%, -50%)"
			display="flex"
			justifyContent="center"
			fontFamily="Shentox2, sans-serif" // Apply Shentox globally
		>
			{/* Mapping each character to create a staggered animation */}
			{LEVEL_UP_TEXT.split("").map((char, index) => (
				<MotionText
					key={index}
					fontSize="5xl" // Customize font size
					fontWeight="bold"
					fontFamily="Shentox2, sans-serif" // Apply Shentox globally
					color="#f8d667" // The golden yellow color from the reference
					textShadow="2px 2px 2px rgba(0, 0, 0, 0.8)" // Subtle shadow with a softer black
					initial={{ opacity: 0, y: 40, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 0.6,
						delay: index * 0.1, // Staggered animation
						ease: "easeOut",
					}}
				>
					{char === " " ? "\u00A0" : char} {/* Handling spaces */}
				</MotionText>
			))}
		</Box>
	);
};

export default LevelUpText;
