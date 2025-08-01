// src/components/AutumnParallaxSeparator.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text, HStack, Icon } from '@chakra-ui/react';
import { FaLeaf } from 'react-icons/fa';

const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const AutumnParallaxSeparator = ({ text, imageUrl }) => {
  const words = text.split(' ');

  return (
    <MotionBox
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`}
      bgPos="center"
      bgSize="cover"
      bgAttachment="fixed"
      h="250px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      my={8}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(210,105,30,0.4), rgba(255,140,0,0.3), rgba(184,134,11,0.4))"
        zIndex={1}
      />

      {/* Hojas decorativas */}
      <MotionIcon
        as={FaLeaf}
        position="absolute"
        top="15%"
        left="10%"
        color="#CD853F"
        boxSize={8}
        zIndex={2}
        animate={{ 
          y: [0, 15, 0], 
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <MotionIcon
        as={FaLeaf}
        position="absolute"
        bottom="20%"
        right="15%"
        color="#B8860B"
        boxSize={6}
        zIndex={2}
        animate={{ 
          y: [0, -10, 0], 
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      
      <MotionIcon
        as={FaLeaf}
        position="absolute"
        bottom="30%"
        left="20%"
        color="#D2691E"
        boxSize={5}
        zIndex={2}
        animate={{ 
          y: [0, 10, 0], 
          rotate: [0, 20, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <Box
        zIndex={2}
        textAlign="center"
        px={4}
      >
        <HStack spacing={1} flexWrap="wrap" justifyContent="center">
          {words.map((word, index) => (
            <MotionText
              key={index}
              display="inline-block"
              fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.6)"
              m={1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: index * 0.1
              }}
            >
              {word}
            </MotionText>
          ))}
        </HStack>
      </Box>

      <MotionBox
        width="40%"
        height="3px"
        bg="autumn.gold"
        mt={4}
        zIndex={2}
        initial={{ width: '0%' }}
        whileInView={{ width: '40%' }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      />
    </MotionBox>
  );
};

export default AutumnParallaxSeparator;