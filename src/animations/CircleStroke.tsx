import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";

const MotionBox = motion(Box); // Motion-enabled Box

const CircleStroke: React.FC = () => {
  return (
    <MotionBox
      position="absolute"
      top="35%" // Center vertically
      left="38%" // Center horizontally
      width="180px" // Initial circle width
      height="180px" // Initial circle height
      borderRadius="50%" // Making it a circle
      border="50px solid #e9faa6" // Initial stroke color
      boxShadow="0 0 65px rgba(255, 0, 0, 1)" // Glowing effect
      initial={{
        scale: 0.8, // Start smaller
        opacity: 0, // Start hidden
        borderWidth: 50 // Initial border width
      }}
      animate={{
        scale: [0.8, 3], // Scale to 500% (5 times larger)
        opacity: [0, 1, 0], // Fade in and then fade out
        borderWidth: [50, 0] // Decrease border width to 0
      }}
      transition={{
        delay: 1, // 1-second delay before animation starts
        duration: 0.8, // Total duration of the animation
        ease: "easeInOut", // Easing function
        times: [0, 0.4, 1], // Fade in at the first 75%, then fade out
        //repeat: Infinity, // Repeat the animation indefinitely
      }}
      style={{
        transform: "translate(-50%, -50%)", // Centering using transform
      }}
    />
  );
};

export default CircleStroke;
