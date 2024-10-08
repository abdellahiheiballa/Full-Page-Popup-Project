import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Image from 'next/image'; // Import Next.js Image for responsive images

const MotionBox = motion(Box);

const Lightning = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed" // Use fixed to always stay in the center of the viewport
      top="46%" // Center vertically
      left="50%" // Center horizontally
      transform="translate(-50%, -50%)" // Adjust positioning to be exactly in the center
      width="100vw" // Full viewport width
      height="100vh" // Full viewport height
      pointerEvents="none" // Disable interaction with the box to avoid blocking clicks
    >
      {/* MotionBox for animation */}
      <MotionBox
        as={motion.div}
        initial={{ opacity: 0, scale: 1 }} // Start with opacity 0 and default scale
        animate={{
          opacity: [0, 1, 0], // Lightning effect fade in/out
          scale: [1.7, 1.7, 1.7], // Optional scaling animation
        }}
        transition={{
          delay: 0.8, // 1-second delay before the animation starts
          duration: 1.2, // Length of the animation
          ease: "easeInOut",
        }}
      >
        {/* Responsive Image using Next.js Image */}
        <Image
          src="/images/Lightning.gif" // Ensure the correct path to your GIF
          alt="Charging Effect"
          width={900} // Initial size, can be adjusted
          height={500} // Adjust height
          style={{
            filter: ' drop-shadow(0 0 12px rgba(92, 39, 2, 10))',  // Optional: Adjust brightness and shadow
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default Lightning;
