import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';

const MotionText = motion(Text);
const MotionBox = motion(Box);

const ParallaxSeparator = ({ text, imageUrl }) => {
  const words = text.split(' ');

  return (
    <MotionBox
      bgImage={`url(${imageUrl})`}
      bgPos="center"
      bgSize="cover"
      bgAttachment="fixed"
      h="200px" // Reduced height
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      my={8} // Slightly reduced margin
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
        bgGradient="linear(to-b, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.5))"
        zIndex={1}
      />

      <Box
        zIndex={2}
        textAlign="center"
        px={4}
      >
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
      </Box>

      <MotionBox
        width="40%"
        height="3px"
        bg="cyan.400"
        mt={4}
        zIndex={2}
        initial={{ width: '0%' }}
        whileInView={{ width: '40%' }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      />
    </MotionBox>
  );
};

export default ParallaxSeparator;