import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";

const MotionBox = motion(Box); // Motion-enabled Box

// Shield Emblem JSX
const ShieldEmblem = () => (
	<Box
		position="absolute"
		top="47%" // Center vertically
		left="50%" // Center horizontally
		transform="translate(-50%, -50%)" // Adjust position to center
		as="img"
		src="/images/shield.png"
		alt="Level Up Emblem"
		boxSize={{ base: "162px", md: "192px", lg: "212px" }} // Responsive sizes
		objectFit="contain"
		zIndex="5"
	/>
);

export default ShieldEmblem;
