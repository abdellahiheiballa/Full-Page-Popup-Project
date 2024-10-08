import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion-enabled Box
const MotionBox = motion(Box);

const ShieldUnderlay = () => (
  <MotionBox
    position="fixed" // Use fixed positioning to keep it centered
    top="50%" // Center vertically
    left="50%" // Center horizontally
    transform="translate(-50%, -50%)" // Adjust the position to be exactly centered
    as="img"
    src="/images/shieldbgblack.png"
    alt="Level Up Emblem Underlay"
    boxSize={{ base: "80vw", md: "710px" }} // Responsive size
    objectFit="contain"
    filter="brightness(0) saturate(100%)"
    initial={{ 
      opacity: 0.2, // Start at this opacity
    }}
    animate={{
      opacity: 0.1, // End at this opacity
    }}
    transition={{
      duration: 1.5, // Transition duration of 1.5 seconds
      ease: "easeInOut", // Smooth easing
    }}
    style={{
      filter: "blur(5px) drop-shadow(0px 0px 5px #000000FF)", // Outline shadow effect
    }}
  />
);

export default ShieldUnderlay;
