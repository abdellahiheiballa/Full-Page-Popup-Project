import { Box } from "@chakra-ui/react"; // For layout
import { motion } from "framer-motion"; // For animation
import Image from "next/image"; // For responsive image rendering
import { useMemo } from "react"; // To optimize star generation

const MotionBox = motion(Box); // Create motion-enabled Box

const StarAnimation = ({
  starSize = 110, // Default star size
  duration = 1.4, // Animation duration in seconds
  delay = 1.3, // Delay before the animation starts
  areaSize = 200, // Area size for star movement (px)
  starCount = 8, // Number of stars
}) => {
  // Generate random values for the stars
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      size: Math.random() * starSize + starSize / 2, // Random size
    //   size: 200, // Random size
      x: Math.random() * areaSize - areaSize / 2, // Random horizontal offset from center
      y: Math.random() * areaSize - areaSize / 2, // Random vertical offset from center
      delay: Math.random() * 13.5, // Random delay for each star
      angle: Math.random() > 0.5 ? 45 : 0, // Random rotation angle: 0 or 45 degrees
    }));
  }, [starSize, areaSize, starCount]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed" // Use fixed to always stay in the center of the viewport
      top="0"
      left="0"
      width="100vw" // Full viewport width
      height="100vh" // Full viewport height
      zIndex="1000" // Adjust z-index to be on top if needed
    >
      {/* Map over the generated stars */}
      {stars.map((star, index) => (
        <MotionBox
          key={index}
          position="absolute"
          initial={{ opacity: 0 }} // Start invisible
          animate={{
            opacity: [0, 1, 0], // Fade in and fade out
            scale: [0, 1, 0], // Pop in (small to big) and pop out
          }}
          transition={{
            duration, // Set the duration of the animation
            delay: delay + star.delay, // Delay for the overall and each star's random delay
            repeat: Infinity, // Loop the animation infinitely
            ease: "easeInOut", // Smooth easing
          }}
          style={{
            top: `calc(45% + ${star.y}px)`, // Center star relative to the middle of the screen, with a random offset
            left: `calc(40% + ${star.x}px)`, // Center horizontally with random offset
            transform: `rotate(${star.angle}deg)`, // Apply random rotation angle
            filter: 'drop-shadow(0 0 12px white)', // Add glow effect
          }}
        >
          {/* Render the star image */}
          <Image
            src="/images/star.png" // Path to the star image
            alt="Shining Star"
            width={star.size} // Use the random size for the star
            height={star.size} // Set height equal to width to maintain aspect ratio
          />
        </MotionBox>
      ))}
    </Box>
  );
};

export default StarAnimation;
