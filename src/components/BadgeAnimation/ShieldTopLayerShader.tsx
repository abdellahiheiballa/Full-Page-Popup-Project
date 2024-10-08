import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box); // Motion-enabled Box

const ShieldTopLayerShader = () => (
  <MotionBox
    position="fixed" // Use fixed positioning to keep it centered
    top="-3%" // Center vertically
    left="3%" // Center horizontally
    transform="translate(-50%, -50%)" // Adjust the position to be exactly centered
    boxSize={{ base: "80vw", md: "710px" }} // Responsive size
    style={{
      maskImage: `url('/images/shieldbg.png')`, // Use the shield image as a mask
      maskSize: "contain", // Ensure the mask fits the container
      maskRepeat: "no-repeat", // Don't repeat the mask
    }}
    initial={{
      background: "radial-gradient(circle, #F7BE43FF 0%, #F7BE43FF 25%, #562D00FF 70%)", // Start circular gradient
      opacity: 0, // Start opacity
      scale: 0.5, // Start smaller
    }}
    animate={{
	  opacity: [0, 0.5, 0], // Fade in and out
	  scale: [0.50, 0.95, 1], // Scale up slightly and down
    }}
    transition={{
      duration: 1.5, // Animate over 1.5 seconds
      ease: "easeInOut", // Smooth easing
      delay: 1, // Add 1 second delay before starting
	  times: [0, 0.5, 1],
    }}
    alt="Level Up Emblem Top Layer"
  />
);

export default ShieldTopLayerShader;
