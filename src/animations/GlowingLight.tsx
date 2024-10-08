import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const GlowingLight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Control visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide after the animation finishes
    }, 1000); // Adjust the timing as needed (duration + delay)
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  if (!isVisible) return null; // Remove the component from DOM when invisible

  return (
    <MotionBox
      position="absolute"
      top="25%" // Adjusted for vertical centering
      left="20%" // Adjusted for horizontal centering
      transform="translate(-50%, -50%)" // Center the element
      width={["60%"]} // Responsive width
      height={["50%"]} // Responsive height
      borderRadius="10%" // Slightly curved corners
      background="radial-gradient(rgba(152, 221, 68,1) 0%, rgba(152, 221, 68,0) 70%, rgba(152, 221, 68,0) 100%)" // Glowing effect
      initial={{
        scale: 0.1, // Start small
        opacity: 0.1, // Start hidden
      }}
      animate={{
        scale: 1, // Scale to full size
        opacity: 0.6, // Fade in partially
      }}
      exit={{
        opacity: 0.2, // Fade out completely
      }}
      transition={{
        duration: 0.3, // Animation duration
        ease: "easeOut", // Smooth easing
        opacity: { delay: 0.6, duration: 0.5 }, // Delay and timing for fade-out
      }}
    />
  );
};

export default GlowingLight;
