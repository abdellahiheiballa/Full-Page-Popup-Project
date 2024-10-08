import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { motion } from "framer-motion";

const SparkleAnimation: React.FC = () => {
    const starArray = new Array(8).fill(0); // Star-shaped sparkle count
  
    return (
      <>
        {/* Star-shaped Sparkles */}
        {starArray.map((_, index) => (
          <MotionBox
            key={`star-${index}`}
            position="absolute"
            top={`${Math.random() * 60 + 20}%`}
            left={`${Math.random() * 60 + 20}%`}
            w="40px" // Increased size
            h="40px" // Increased size
            zIndex="3"
            bg="transparent"
            _before={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "50%",
              width: "4px", // Increased line width
              height: "40px", // Increased line height
              backgroundColor: "yellow.300",
              transform: "translateX(-50%)",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "50%",
              left: "0",
              width: "40px", // Increased line width
              height: "4px", // Increased line height
              backgroundColor: "yellow.300",
              transform: "translateY(-50%)",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            }}
            sx={{
              "&::before": {
                // Diagonal Line 1
                content: '""',
                position: "absolute",
                width: "4px", // Increased line width
                height: "40px", // Increased line height
                backgroundColor: "yellow.300",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
              },
              "&::after": {
                // Diagonal Line 2
                content: '""',
                position: "absolute",
                width: "4px", // Increased line width
                height: "40px", // Increased line height
                backgroundColor: "yellow.300",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-45deg)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
              },
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 45, 90],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </>
    );
  };
  

  export default SparkleAnimation;