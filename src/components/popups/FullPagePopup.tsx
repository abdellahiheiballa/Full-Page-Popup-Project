"use client";
import { Box, Center } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react"; // Chakra utility
import { motion } from "framer-motion"; // Motion animations
import React from "react";

// Import animation components
import EnhancedTriangularSpeedLines from "../../animations/EnhancedTriangularSpeedLines"; 
import PopupStroke from "../common/PopupStroke"; 
import CircleStroke from "../../animations/CircleStroke"; 
import ShieldEmblem from "../BadgeAnimation/ShieldEmblem"; 
import GlowingLight from "../../animations/GlowingLight"; 
import ShieldUnderlay from "../BadgeAnimation/ShieldUnderlay"; 
import ShieldTopLayer from "../BadgeAnimation/ShieldTopLayer"; 
import ShieldEmblemfadein from "../BadgeAnimation/ShieldEmblemfadein"; 
import ShieldEmblemLight from "../BadgeAnimation/ShieldEmblemLight"; 
import { DiamondShape } from "../common/DiamondShape"; 
import LevelUpText from "../common/LevelUpText"; 
import ShieldEmblemFadeOut from "../BadgeAnimation/ShieldEmblemFadeOut"; 
import ShieldTopLayerShader from "../BadgeAnimation/ShieldTopLayerShader"; 
import EnergyCharging from "../../animations/EnergyCharging"; 
import StarAnimation from "../../animations/StarAnimation"; 
import Lightning from "../../animations/Lightning"; 
import Glare from "../common/Glare"; 
import Beems from "../common/Beems"; 
import FlyingBeems from "../../animations/FlyingBeems"; 

// Define the type for the FullPagePopup component's props
interface FullPagePopupProps {
	isOpen: boolean; // Indicates if the popup is open
	onClose: () => void; // Function to close the popup
}

// Create a motion-compatible Box component using chakra
const MotionBox = motion(chakra.div);

// Main FullPagePopup component
const FullPagePopup: React.FC<FullPagePopupProps> = ({ isOpen, onClose }) => {
	// Early return if the popup is not open
	if (!isOpen) return null;

	return (
		<Center
			pos="fixed"
			top="0"
			left="0"
			w="100vw"
			h="100vh"
			bg="rgba(0, 0, 0, 0.9)"
			zIndex="1000"
			onClick={onClose}
			p={{ base: "4", md: "8" }} // Add padding for small screens
		>
			<MotionBox
				position="relative"
				maxH="90vh" // Adjust max height for smaller screens
				maxW="90vw" // Adjust max width for smaller screens
				minW={{ base: "90vw", md: "760px" }} // Responsive min width
				minH={{ base: "70vh", md: "590px" }} // Responsive min height
				borderRadius="35px"
				overflow="hidden"
				bg="radial-gradient(circle, #FFFFFF 0%, #fcd171 0%, #924e1a 90%)"
				// Initial state
				initial={{ scale: 1, opacity: 1 }}
				// Animate to beat after a 2s delay
				animate={{ scale: [1, 1.1, 1], opacity: 1 }}
				// Timing of the animation
				transition={{
					delay: 1.1, // Delay of 2 seconds
					duration: 0.5, // Duration of the beat effect
					ease: "easeInOut", // Easing function for smooth animation
				}}
			>
				<EnhancedTriangularSpeedLines />
				<ShieldUnderlay />
				<ShieldTopLayer />
				<PopupStroke />
				<LevelUpText />
				<DiamondShape />
				<ShieldEmblemLight />
				<Lightning />
				<Beems />
				<GlowingLight />
				<CircleStroke />
				<FlyingBeems />
				<ShieldEmblem />
				<ShieldTopLayerShader />
			</MotionBox>
			<EnergyCharging />
			<StarAnimation />
			<ShieldEmblemfadein />
			<ShieldEmblemFadeOut />
			<Glare />
		</Center>
	);
};

export default FullPagePopup;
