'use client';

import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import FullPagePopup from "../components/popups/FullPagePopup"; // Adjusted import

export default function HomePage() {
  const [isFullPageOpen, setFullPageOpen] = useState(false);
  const [isCompactOpen, setCompactOpen] = useState(false);
  const rewards = ['50 Coins', 'New Avatar', 'Special Power-Up'];

  return (
    <VStack spacing={4} mt={8}>
      <FullPagePopup isOpen={true} onClose={() => {}} />
    </VStack>
  );
}
