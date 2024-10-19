import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Spinner,
  IconButton,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const phrases = [
  "AVENTURA",
  "PAZ Y SOSIEGO",
  "NATURALEZA",
  "HISTORIA",
];

const VideoBanner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/spot.mp4';
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      position="relative"
      overflow="hidden"
    >
      <AnimatePresence>
        {!isVideoLoaded && (
          <MotionBox
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="#00A9CE"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="10"
          >
            <Spinner size="xl" color="#FFB81C" thickness="4px" />
          </MotionBox>
        )}
      </AnimatePresence>

      {isVideoLoaded && (
        <Box
          as="video"
          autoPlay
          loop
          muted
          playsInline
          src="/spot.mp4"
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
      )}

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0,169,206,0.3)"
        zIndex="1"
      />

      <VStack
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        spacing={8}
        zIndex="2"
        width="100%"
        px={4}
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heading as="h1" size="4xl" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.3)">
            VIVÍ
          </Heading>
          <Heading as="h2" size="3xl" color="#FFB81C" textShadow="2px 2px 4px rgba(0,0,0,0.3)">
            SAN FRANCISCO
          </Heading>
        </MotionBox>

        <Box height="60px" overflow="hidden">
          <AnimatePresence mode="wait">
            <MotionText
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
            >
              {phrases[currentPhrase]}
            </MotionText>
          </AnimatePresence>
        </Box>
      </VStack>

      <IconButton
        icon={<ChevronDownIcon />}
        aria-label="Scroll down"
        position="absolute"
        bottom="5%"
        left="50%"
        transform="translateX(-50%)"
        onClick={scrollToContent}
        size="lg"
        fontSize="3xl"
        color="white"
        bg="transparent"
        _hover={{ bg: "whiteAlpha.200" }}
        zIndex="2"
      />
    </Box>
  );
};

export default VideoBanner;