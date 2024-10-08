import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box); // Motion-enabled Box

const ShieldTopLayer = () => (
	<MotionBox
		position="fixed" // Use fixed positioning to keep it centered
		top="60.7%" // Center vertically
		left="50%" // Center horizontally
		transform="translate(-50%, -50%)" // Adjust the position to be exactly centered
		boxSize={{ base: "80vw", md: "710px" }} // Responsive size
		style={{
			maskImage: `url('/images/shieldbg.png')`, // Use the shield image as a mask
			maskSize: "contain", // Ensure the mask fits the container
			maskRepeat: "no-repeat", // Don't repeat the mask
		}}
		initial={{
			background: "linear-gradient(to top, #F6CC69, #B16C1D)", // Start gradient
			opacity: 0.3, // Start opacity
		}}
		animate={{
			background: "linear-gradient(to top, #E7C67A, #DFAA6E)", // End gradient
			opacity: 0.3, // End opacity
		}}
		transition={{
			duration: 1.5, // Animate over 3 seconds
			ease: "easeInOut", // Smooth easing
		}}
		alt="Level Up Emblem Top Layer"
	/>
);

export default ShieldTopLayer;
