import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Image from 'next/image'; // Import Next.js Image for responsive images

const MotionBox = motion(Box);

const EnergyCharging = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed" // Use fixed to always stay in the center of the viewport
      top="0" // Ensure it's positioned relative to the viewport
      left="0"
      width="100vw" // Full viewport width
      height="100vh" // Full viewport height
      zIndex="1000" // Adjust z-index to be on top if needed
    >
      {/* MotionBox is used for animation effects */}
      <MotionBox
        as={motion.div}
        initial={{ opacity: 0, scale: 1 }} // Start with opacity 0 and default scale
        animate={{
          opacity: [0, 1, 1, 1, 0], // Lightning effect fade in/out
          scale: [1.7, 1.7,1.7,1.7, 1.7], // Optional scaling animation
        }}
        transition={{
          delay: 0.6, // 1-second delay before the animation starts
          duration: 1, // Length of the animation
          ease: "easeInOut",
        }}
      >
        {/* Responsive Image using Next.js Image */}
        <Image
          src="/images/charging.gif" // Ensure the correct path to your GIF
          alt="Charging Effect"
          width={900} // Adjust the size for responsive behavior
          height={500} // Same here
          objectFit="contain" // Keep the aspect ratio intact
          style={{
            filter: 'brightness(99%) drop-shadow(0 0 12px rgba(89, 56, 24, 1))',  // Optional: Remove black background effect by adjusting brightness
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default EnergyCharging;
