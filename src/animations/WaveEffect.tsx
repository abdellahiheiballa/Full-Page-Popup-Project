import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

export const WaveEffect: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true); // Trigger the wave effect
		}, 500); // Adjust delay as needed for synchronization

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<>
			{/* First Wave */}
			<MotionBox
				position="absolute"
				top="50%"
				left="50%"
				width="150px"
				height="150px"
				borderRadius="50%"
				bg="rgba(255, 255, 255, 0.2)" // Soft glow
				boxShadow="0 0 20px rgba(255, 255, 255, 0.5)"
				initial={{ scale: 0.6, opacity: 0 }}
				animate={{ scale: [0.6, 1.2, 2.5], opacity: [0.5, 1, 0] }}
				transition={{ duration: 1.5, ease: "easeOut", times: [0, 0.6, 1] }}
				style={{ transform: "translate(-50%, -50%)" }}
			/>

			{/* Second Wave */}
			<MotionBox
				position="absolute"
				top="50%"
				left="50%"
				width="180px"
				height="180px"
				borderRadius="50%"
				bg="rgba(255, 255, 255, 0.3)"
				boxShadow="0 0 30px rgba(255, 255, 255, 0.4)"
				initial={{ scale: 0.7, opacity: 0 }}
				animate={{ scale: [0.7, 1.5, 2.8], opacity: [0.6, 1, 0] }}
				transition={{ duration: 2, ease: "easeOut", times: [0, 0.6, 1] }}
				style={{ transform: "translate(-50%, -50%)" }}
			/>

			{/* Third Wave (final ripple) */}
			<MotionBox
				position="absolute"
				top="50%"
				left="50%"
				width="210px"
				height="210px"
				borderRadius="50%"
				bg="rgba(255, 255, 255, 0.1)"
				boxShadow="0 0 40px rgba(255, 255, 255, 0.3)"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: [0.8, 1.8, 3], opacity: [0.7, 1, 0] }}
				transition={{ duration: 2.5, ease: "easeOut", times: [0, 0.6, 1] }}
				style={{ transform: "translate(-50%, -50%)" }}
			/>
		</>
	);
};

export default WaveEffect;
